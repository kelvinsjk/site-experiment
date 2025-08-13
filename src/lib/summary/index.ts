import { pnc } from "./21-pnc";
import { probability } from "./22-probability";
import { drv } from "./23-drv";
import { binomial } from "./24-binomial";
import {normal} from './25-normal';
export const summaries = {
	// stats
	pnc,
	probability,
  drv,
  binomial,
  normal,
} as const;

export const topics = Object.keys(summaries) as (keyof typeof summaries)[];

export const topicToTitle: Record<typeof topics[number], { title: string; shortTitle?: string }> = {
    pnc: { title: "Permutations and Combinations", shortTitle: "P&C" },
    probability: { title: "Probability" },
    drv: { title: "Discrete Random Variables", shortTitle: "DRV" },
    binomial: { title: "Binomial Distribution", shortTitle: "Binomial" },
    normal: { title: "Normal Distribution", shortTitle: "Normal" },
  };