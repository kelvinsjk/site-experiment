import { x } from "mathlifier";

export const pnc: { point: string; example: string | undefined }[] = [
	{
		point: "Multiplication principle.",
		example: x`A restaurant serves 5 mains and 3 sides.\\
How many ways can a customer choose one main and one side?

#${"align*"} \\text{No. of ways } &= 5 \\times 3
\\\\ &= 15`,
	},
	{
		point: "Addition principle (cases).",
		example: x`A restaurant serves 5 mains and 3 sides.\\
How many ways can a customer buy two distinct items from the restaurant such that it has at least one side?

#${"gather*"}
\\text{Case 1: Exactly 1 side} \\\\
\\text{No. of ways } = 5 \\times 3 

#${"gather*"}
\\text{Case 2: Exactly 2 sides}\\\\
\\text{No. of ways } = {3 \\choose 2}

#${"align*"} \\text{Total ways } &= 5 \\times 3 + {3 \\choose 2}
\\\\ &= 18`,
	},
	{
		point: "hi",
		example: undefined,
	},
];
