import { x } from "mathlifier";

export const pnc: { point: string; example: string | undefined, shortPoint?: string }[] = [
	{
		point: "*Multiplication* principle.",
		example: x`:::qn
A restaurant serves 5 mains and 3 sides.\\
How many ways can a customer choose one main and one side?
:::

:::ans
#${"align*"} \\text{No. of ways } &= 5 \\times 3
\\\\ &= 15

:::`,
	},
	{
		point: "Addition principle (*cases*).",
		example: x`:::qn
A restaurant serves 5 mains and 3 sides.\\
How many ways can a customer buy two distinct items from the restaurant such that it has at least one side?
:::

:::ans
#${"gather*"}
\\text{Case 1: Exactly 1 side} \\\\
\\text{No. of ways } = 5 \\times 3 

#${"gather*"}
\\text{Case 2: Exactly 2 sides}\\\\
\\text{No. of ways } = {3 \\choose 2}

#${"align*"} \\text{Total ways } &= 5 \\times 3 + {3 \\choose 2}
\\\\ &= 18

:::`,
	},
	{
		point: "*Complement* technique.",
		example: x`:::qn
A restaurant serves 5 mains and 3 sides.\\
How many ways can a customer buy two distinct items from the restaurant such that it has at least one side?
:::

:::ans
#${"gather*"}
\\text{Complement: no sides} \\\\
\\text{No. of ways } = {5 \\choose 2} 

#${"align*"} \\text{Required ways } &= \\text{Total ways} - {5 \\choose 2}
\\\\ &= {8 \\choose 2} - {5 \\choose 2}
\\\\ &= 18

:::`,
	},
	{
		point: x`$\\boxed{n!}$ ways to rearrange $n$ 
distinct objects in a *line*.`,
		shortPoint: x`Rearrangements (in a *line*).`,
		example: x`:::qn
How many ways are there to arrange 10 people in a line?
:::

:::ans
#${"align*"} &\\text{Number of ways}
\\\\ &= 10!
\\\\ &= 3\\,628\\,800

:::`,
	},
	{
		point: x`$\\boxed{(n-1)!}$ ways to rearrange $n$ 
distinct objects in a *circle*.`,
		shortPoint: x`Rearrangements (in a *circle*).`,
		example: x`:::qn
How many ways are there to arrange 10 people in a circle?
:::

:::ans
#${"align*"} &\\text{Number of ways}
\\\\ &= (10-1)!
\\\\ &= 362\\,880

:::`,
	},
	{
		point: x`$\\boxed{\\frac{n!}{r_1! \\dotsm r_k!}}$ ways to rearrange $n$ 
objects with $r_i$ *identical*.`,
		shortPoint: x`Rearranging *identical* objects.`,
		example: x`:::qn
How many ways are there to rearrange the letters
in ABBBCCDEEE?
:::

:::ans
#${"align*"} &\\text{Number of ways}
\\\\ &= \\frac{10!}{3!2!3!}
\\\\ &= 50\\,400

:::`,
	},
	{
		point: '*Grouping* technique.',
		example: x`:::qn
How many ways are there to rearrange 8 people in a line such
that 3 of them are always together?
:::

:::ans
$${{}} \\ast \\; \\ast \\; \\ast \\; \\ast \\; \\ast \\; \\boxed{\\ast \\; \\ast \\; \\ast}

We treat the 3 people as a unit, such that we have 6 total units
(the group of 3 as well as the 5 other people).

#${'align*'} \\text{Number of ways} &= 6! \\times 3!
\\\\ &= 4\\,320

:::`
	},
	{
		point: '*Slotting* technique.',
		example: x`:::qn
How many ways are there to rearrange 8 people in a line such that
3 of them are not next to one another?
:::

:::ans
$${{}} \\circ \\; \\boxed{\\ast} \\; \\circ \\; \\boxed{\\ast} \\; \\circ \\; \\boxed{\\ast}
\\; \\circ \\; \\boxed{\\ast} \\; \\circ \\; \\boxed{\\ast} \\; \\circ

We rearrange the 5 other people first, and slot the remaining 3 in.

#${"align*"} \\text{Number of ways} &= 5! \\times {6 \\choose 3} \\times 3!
\\\\ &= 14\\,440

:::`
	},
	{
		point: x`$\\boxed{{n \\choose r}}$ ways to *choose*
$r$ unique objects out of $n$.`,
		shortPoint: x`*Choosing* unique objects.`,
		example: x`:::qn
How many ways are there to form a team of 3 out of 10 people?
:::

:::ans
#${"align*"} & \\text{Number of ways}
\\\\ &= {10 \\choose 3}
\\\\ &= 120

:::`
	},
	{
		point: x`Choosing with identical objects (via cases).`,
		example: x`:::qn
Find the number of 3-letter codewords that can
be formed using letters from ABBBCCDEEE.
:::

:::ans
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
\\\\ &= 218

:::`
	}
];
// advanced venn diagram not covered