<script lang="ts">
  import { browser } from "$app/environment";
  let cachedFiles = $state<string[]>([]);
  if (browser) {
    navigator.serviceWorker.controller?.postMessage({
      action: "getCachedFiles",
    });
    navigator.serviceWorker.addEventListener("message", (event) => {
      console.log("message", event.data);
      if (event.data.action === "getCachedFiles") {
        cachedFiles = event.data.files;
      }
    });
  }
</script>

<h1>Error</h1>

<p>We have encountered an error.</p>

<h2>Offline sites</h2>
{#if cachedFiles.length > 0}
  <ul>
    {#each cachedFiles as file}
      <li><a href={file}>{file}</a></li>
    {/each}
  </ul>
{/if}
