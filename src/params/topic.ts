import type { ParamMatcher } from "@sveltejs/kit";

import { topics } from "$lib/summary";
export const match = ((topic: string): topic is (typeof topics)[number] =>
	(topics as readonly string[]).includes(topic)) satisfies ParamMatcher;
