import { x } from "mathlifier";

export const pnc: { point: string; example: string | undefined, shortPoint?: string }[] = [
	{
		point: "*Multiplication* principle.",
		example: x`A restaurant serves 5 mains and 3 sides.\\
How many ways can a customer choose one main and one side?

#${"align*"} \\text{No. of ways } &= 5 \\times 3
\\\\ &= 15`,
	},
	{
		point: "Addition principle (*cases*).",
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
		point: "*Complement* technique.",
		example: x`A restaurant serves 5 mains and 3 sides.\\
How many ways can a customer buy two distinct items from the restaurant such that it has at least one side?

#${"gather*"}
\\text{Complement: no sides} \\\\
\\text{No. of ways } = {5 \\choose 2} 

#${"align*"} \\text{Required ways } &= \\text{Total ways} - {5 \\choose 2}
\\\\ &= {8 \\choose 2} - {5 \\choose 2}
\\\\ &= 18`,
	},
	{
		point: x`$\\boxed{n!}$ ways to rearrange $n$ 
distinct objects in a *line*.`,
		example: undefined,
	},
	{
		point: x`$\\boxed{(n-1)!}$ ways to rearrange $n$ 
distinct objects in a *circle*.`,
		example: undefined,
	},
	{
		point: x`$\\boxed{\\frac{n!}{r_1! \\dotsm r_k!}}$ ways to rearrange $n$ 
objects with $r_i$ *identical*.`,
		shortPoint: x`Rearranging identical objects`,
		example: x`How many ways are there to rearrange the letters
in ABBBCCDEEE?

$${{}} \\text{Number of ways} = \\frac{10!}{3!2!3!}`,
	},
	{
		point: '*Grouping* technique.',
		example: x`How many ways are there to rearrange 8 people in a line such
that 3 of them are always together?

$${{}} \\ast \\; \\ast \\; \\ast \\; \\ast \\; \\ast \\; \\boxed{\\ast \\; \\ast \\; \\ast}

We treat the 3 people as a unit, such that we have 6 total units
(the group of 3 as well as the 5 other people).


#${'align*'} \\text{Number of ways} &= 6! \\times 3!
\\\\ &= `
	},
	{
		point: '*Slotting* technique.',
		example: x`How many ways are there to rearrange 8 people in a line such that
3 of them are not next to one another?

$${{}} \\cdot \\boxed{\\ast} \\cdot \\boxed{\\ast} \\cdot \\boxed{\\ast}
\\cdot \\boxed{\\ast} \\cdot \\boxed{\\ast} \\cdot

We rearrange the 5 other people first, and slot the remaining 3 in.

#${'align*'} \\text{Number of ways} &= 5! \\times {6 \\choose 3} \\times 3!
\\\\ &=`
	},
	{
		point: x`$\\boxed{{n \\choose r}}$ ways *choose*
$r$ unique objects out of $n$.`,
		example: undefined,
	},
	{
		point: x`Use cases to handle choosing with identical objects.`,
		example: x`Find the number of 3-letter codewords that can
be formed using letters from ABBBCCDEEE.

#${"gather*"}
\\text{Case 1: 1 letter repeated 3 times} \\\\
\\text{No. of ways } = {2 \\choose 1}

#${"gather*"}
\\text{Case 2: 1 letter repeated exactly twice}\\\\
\\text{No. of ways } = {3 \\choose 2} \\times {4 \\choose 1} \\times \\frac{3!}{2!}

#${"gather*"}
\\text{Case 3: 3 unique letters}\\\\
\\text{No. of ways } = {5 \\choose 3} \\times 3!

#${"align*"} \\text{Total ways } &= {2 \\choose 1} + {3 \\choose 2} \\times {4 \\choose 1} \\times \\frac{3!}{2!} + {5 \\choose 3} \\times 3!
\\\\ &= `
	}
];
// advanced venn diagram not covered