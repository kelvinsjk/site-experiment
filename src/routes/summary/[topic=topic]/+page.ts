import { summaries } from "$lib/summary";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
	const topic = params.topic;
	return {
		topic,
		summary: summaries[topic],
	};
};
