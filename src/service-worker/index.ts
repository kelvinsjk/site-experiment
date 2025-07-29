/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope;

import { build, files, prerendered, version } from "$service-worker";

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files, // everything in `static`
];
// also cache home page and error page
const ASSETS_PLUS = [...ASSETS, "/", "/error"];

sw.addEventListener("install", (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS_PLUS);
	}

	event.waitUntil(addFilesToCache());
});

sw.addEventListener("activate", (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

sw.addEventListener("fetch", (event) => {
	// ignore POST requests etc
	if (event.request.method !== "GET") return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error("invalid response from fetch");
			}

			if (response.status === 200) {
				// only cache own domain
				if (url.origin === sw.location.origin) {
					cache.put(event.request, response.clone());
				}
			}

			return response;
		} catch (err) {
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			console.log(err);
			return new Response("Redirect to error page", {
				status: 307,
				headers: { Location: "/error" },
			});
			//throw err;
		}
	}

	event.respondWith(respond());
});

sw.addEventListener("message", async (event) => {
	if (event.data.action === "cacheFiles") {
		const files = event.data.files ?? [];
		if (!Array.isArray(files))
			throw new Error("service worker error: files must be an array");
		const prerenderedFiles = files.filter((file) => prerendered.includes(file));
		async function cacheFiles() {
			const cache = await caches.open(CACHE);
			await cache.addAll(prerenderedFiles);
		}
		event.waitUntil(cacheFiles());
		return;
	}
	if (event.data.action === "getCachedFiles") {
		const cache = await caches.open(CACHE);
		const keys = await cache.keys();
		console.log("get cached 4", keys);
		const cachedFiles = prerendered.filter(
			(file) =>
				keys.map((key) => new URL(key.url).pathname).includes(file) &&
				file !== "/error",
		);
		event.source?.postMessage({
			action: "getCachedFiles",
			files: cachedFiles,
		});
		return;
	}
});
