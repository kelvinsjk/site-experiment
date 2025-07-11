import type { ParamMatcher } from "@sveltejs/kit";

const topics = ["pnc"] as const;
export const match = ((topic: string): topic is (typeof topics)[number] =>
	(topics as readonly string[]).includes(topic)) satisfies ParamMatcher;
