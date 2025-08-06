import { x } from "mathlifier";

function P(x: string) {
	return `\\mathrm{P}\\left( ${x} \\right)`
}
function E(x: string) {
	return `\\mathrm{E}\\left( ${x} \\right)`
}
function Var(x: string) {
	return `\\mathrm{Var}\\left( ${x} \\right)`
}

export const binomial: { point: string; example: string | undefined, shortPoint?: string }[] = [
	{
		point: x`Conditions and *assumptions*.`,
		shortPoint: "Conditions and assumptions",
		example: x`A discrete random variable $X$ has a binomial distribution if

- There are a fixed number of "trials", $n$
- For each "trial", there are only two possible outcomes: "success" (with probability $p$) and "failure" (with probability $1-p$)
- The probability that a single "trial" is a "success" is the same for each "trial"
- The event that a single "trial" is a "success" is independent of all other "trials"

The final two conditions are typically assumptions that we make to use a binomial distribution.

### Example

#### Assumptions for a binomial distribution

:::qn
Let $X$ denote the random variable of the number of apples that are sweet in a bag of 8 apples.
State, in context, two assumptions needed to model $X$ by a binomial distribution.
:::

:::ans
- The *probability* that an apple is sweet is the *same* for each apple $\\QED$
- The *event* that an apple is sweet is *independent* of all other apples $\\QED$ 
:::

#### Common error

"The probability that an apple is sweet is independent" is incorrect as
independence is used to describe events and random variables, not probabilities.
`
	},
		{
		point: `$\\boxed{ X \\sim \\mathrm{B}(n,p) }$.`,
		example: undefined
	},
	{
		point: `*Binompdf* $ \\boxed{ ${P("X=x")} }$.`,
		shortPoint: "Binompdf",
		example: x`We use \`binompdf\` on our calculator to calculate ${{}} \\boxed{${P("X=x")}}

### Example

:::qn
A bag contains 8 apples. Each apple has a $0.7$ probability of being sweet.
Find the probability that there are exactly 6 apples in the bag that are sweet.
:::

:::ans
Let $X$ denote the random variable of the number of apples that are sweet in a bag of 8 apples.
$$ X \\sim \\mathrm{B}(8,0.7) $$
Using the \`binompdf\` function on our calculator,
$${{}} ${P("X=6")} = 0.296 \\text{ (to 3 s.f.)} \\; \\QED

:::
`,
	},
	{
		point: `*Binomcdf* $ \\boxed{ ${P("X \\leq x")} }$.`,
		shortPoint: "Binomcdf",
		example: x`We use \`binomcdf\` on our calculator to calculate ${{}} \\boxed{ ${P("X \\leq x")}}

### Conversion to cdf form

Other inequalities can be converted to cdf form, as shown in the following examples:

- ${{}} ${P("X < 5")} = ${P("X \\leq 4")}
- ${{}} ${P("X > 11")} = 1 - ${P("X \\leq 11")}
- ${{}} ${P("X \\geq 16")} = 1 - ${P("X \\leq 15")}
- ${{}} ${P("7 \\leq X < 13")} = ${P("X \\leq 12")} - ${P("X \\leq 6")}

### Example

:::qn
A bag contains 8 apples. Each apple has a $0.7$ probability of being sweet.
Find the probability that 

(a) there are at most than 6 apples in the bag that are sweet
(a) there are less than 4 apples in the bag that are sweet
(b) there are more than 5 apples in the bag that are sweet
(c) there are at least 3 apples in the bag that are sweet
:::

:::ans
Let $X$ denote the random variable of the number of apples that are sweet in a bag of 8 apples.
$$ X \\sim \\mathrm{B}(8,0.7) $$
Using the \`binomcdf\` function on our calculator,

(a) $$ @${P("X \\leq 6")} = 0.745 \\text{ (to 3 s.f.)} \\; \\QED $$

(b) $$ \\begin{align*}
& @${P("X < 4")} \\\\
&= @${P("X \\leq 3")} \\\\
&= 0.0580 \\text{ (to 3 s.f.)} \\; \\QED 
\\end {align*} $$

(c) $$ \\begin{align*}
& @${P("X > 5")} \\\\
&= 1 - @${P("X \\leq 5")} \\\\
&= 0.552 \\text{ (to 3 s.f.)} \\; \\QED 
\\end {align*} $$

(d) $$ \\begin{align*}
& @${P("X \\geq 3")} \\\\
&= 1 - @${P("X \\leq 2")} \\\\
&= 0.989 \\text{ (to 3 s.f.)} \\; \\QED 
\\end {align*} $$
:::
`,
	},
	{
		point: x`"*Nested*" binomials.`,
		shortPoint: "Nested binomials",
		example: x`Binomials can be "*nested*" in other binomials, like in the following example

### Example 

:::qn
A bag contains 8 apples. Each apple has a $0.7$ probability of being sweet.
A bag is considered "excellent" if it contains at least 6 sweet apples.

A shop stocks 25 bags of apples. Find the probability that there are more than
11 bags of "excellent" apples in the shop.
:::

:::ans
Let $X$ denote the random variable of the number of apples that are sweet in a bag of 8 apples.
$$ X \\sim \\mathrm{B}(8,0.7) $$
#${"align*"}
& ${P("X \\geq 6")} \\\\
&= 1 - ${P("X \\leq 5")} \\\\
&= 0.55177

Let $Y$ denote the random variable of the number of bags that are excellent out of 25 bags.
$$ Y \\sim \\mathrm{B}(25,0.55177) $$
#${"align*"}
& ${P("Y > 11")} \\\\
&= 1 - ${P("Y \\leq 11")} \\\\
&= 0.822 \\; \\QED

:::
`,
	},
	
	{
		point: x`GC *tables* and *graphs*.`,
		shortPoint: x`Using a graphing calculator`,
		example: x`A graphing calculator can be used to find unknown parameters such as $n$ and $p$.
The *table* is useful for integer-valued unknowns while the *graph* is useful for real-valued unknowns.

### Example 1

#### Using a table

:::qn
Given that $ Y \\sim \\mathrm{B}(n, 0.7) $
and ${{}} { ${P("X \\leq 4")} < 0.1, }
find the least possible value of $n$.
:::

:::ans
We use the table function from our GC

|:---:|:---:|
| $n$ | $ @${P("X \\leq 4")}$ |
| $8$ | $0.1941  > 0.1$ ❌ |
| $9$ | $0.0988  < 0.1$ ✅ |
| $10$ | $0.0473 < 0.1$ ✅ |

Hence the least value of $n = 9 \\; \\QED$

:::

### Example 2

#### Using a graph

:::qn
Given that $ Y \\sim \\mathrm{B}(8, p) $
and ${{}} { ${P("X \\leq 1")} = 0.1, }
find $p$.
:::

:::ans
We plot \`binomcdf(8, X, 1)\` and \`y=0.1\`
on our graphing calculator

Setting \`Xmin\`, \`Ymin\` to 0
and \`Xmax\`, \`Ymax\` to 1
in the \`window\` settings can help us see the graph better.

|:---:|:---:|
| $n$ | $ @${P("X \\leq 4")}$ |
| $8$ | $0.1941  > 0.1$ ❌ |
| $9$ | $0.0988  < 0.1$ ✅ |
| $10$ | $0.0473 < 0.1$ ✅ |

Using the \`intersect\` solver,
$$ p = 0.406 \\text{ (to 3 s.f.)} \\; \\QED $$

:::
`,
	},
	{
		point: `*Mean* $\\boxed{ ${E("X")} = np }$ and *variance* $ \\boxed{ ${Var("X")} = np(1-p) }$ .`,
		shortPoint: "Mean and variance",
		example: x`The *mean* of a binomial distribution $ X \\sim \\mathrm{B}(n,p) $
is given by ${{}} \\boxed{  ${E("X")} = np }
and the *variance* is given by ${{}} \\boxed{  ${Var("X")} = np(1-p) }.

Note: These formulas are provided in the formula booklet.

### Example

:::qn
A bag contains 8 apples. Each apple has a $0.7$ probability of being sweet. Find
the mean and variance of the number of apples that are sweet in a bag.
:::

:::ans
Let $X$ denote the random variable of the number of apples that are sweet in a bag of 8 apples.
$$ X \\sim \\mathrm{B}(8,0.7) $$

#${"align*"}
${E("X")} &= np
\\\\ &= 8 (0.7) 
\\\\ &= 5.6 \\; \\QED \\\\
${Var("X")} &= np(1-p)
\\\\ &= 8 (0.7)(1-0.7)
\\\\ &= 1.68 \\; \\QED

:::
`,
	},
	{
		point: `Binompdf *formula* $ \\boxed{ ${P("X=x")} = {n \\choose x} p^x (1-p)^{n-x} }$.  `,
		shortPoint: "Binompdf formula",
		example: x`To form algebraic equations from binomial distributions,
we can use the *formula* ${{}} \\boxed{ ${P("X=x")} = {n \\choose x} p^x (1-p)^{n-x} }.

Note: This formulas are provided in the formula booklet.

### Example

:::qn
A bag contains 6 apples. Each apple has a probability $p$ of being sweet.
Given that the probability that half of the apples in a bag are sweet is
$\\frac{5}{16}$, form a equation in $p$ and solve for $p$.
:::

:::ans
Let $X$ denote the random variable of the number of apples that are sweet in a bag of 6 apples.
$$ X \\sim \\mathrm{B}(6,p) $$

#${"align*"}
${P("X=3")} &= \\frac{5}{16} \\\\
{6 \\choose 3} p^3 (1-p)^{6-3} &= \\frac{5}{16} \\\\
20 p^3 (1-p)^3 &= \\frac{5}{16} \\; \\QED \\\\
\\Big( p(1-p) \\Big)^3 &= \\frac{1}{64} \\\\
p(1-p) &= \\sqrt[3]{\\frac{1}{64}} \\\\
p - p^2 &= \\frac{1}{4} \\\\
4p - 4p^2 &= 1 \\\\
4p^2 -4p + 1 &= 0 \\\\
(2p-1)^2 &= 0 \\\\
p &= \\frac{1}{2} \\; \\QED

:::`

	},
	{
		point: x`*Sketch* of a binomial distribution.`, 
		shortPoint: x`Sketch of a binomial distribution`,
		example: x`A *bar chart* can be used to sketch the probability distribution of
a binomial distribution.

For example, consider $X \\sim \\mathrm{B}(4,0.3)$

Using \`binompdf\` and the table on our graphing calculator, we have

|:---:|:---:|
|$x$ | $@${P("X=x")}$|
|0 | 0.2401|
|1 | 0.4116|
|2 | 0.2646|
|3 | 0.0756|
|4 | 0.0081|

`
	},
	{
		point: x`*Mode* of a binomial distribution.`,
		shortPoint: x`Mode`,
		example: x`The *mode* refers to the most likely/most probable outcome. It is the value of $x$
for which ${P("X=x")}
is the largest.

### Example 1

#### Using a table to determine the mode

:::qn
Let $X \\sim \\mathrm{B}(4,0.3)$. Find the mode of $X$.
:::

:::ans
Using \`binompdf\` and the table on our graphing calculator, we have

|:---:|:---:|
|$x$ | $@${P("X=x")}$|
|0 | 0.2401|
|1 | 0.4116|
|2 | 0.2646|
|$\\dots$ | $\\dots$|

Hence the mode is $1 \\; \\QED$
:::

## Algebraic approach

If $x$ is the mode of a binomial distribution, then
${{}} \\boxed{ ${P("X=x")} \\geq ${P("X=x+1")} }
and ${{}} \\boxed{ ${P("X=x")} \\geq ${P("X=x-1")} }

### Example 2

:::qn
Let $X \\sim \\mathrm{B}(4,p)$. Given that the mode of $X$ is 1, find
the range of possible values of $p$.
:::

:::ans
#${"align*"}
${P("X=1")} &\\geq ${P("X=2")} \\\\
{4 \\choose 1} p^1 (1-p)^{4-1} &\\geq {4 \\choose 2} p^2 (1-p)^{4-2} \\\\
4 p(1-p)^3 &\\geq 6 p^2 (1-p)^2 \\\\
2(1-p) &\\geq 3p \\\\
2 - 2p &\\geq 3p \\\\
p &\\leq \\frac{2}{5}

#${"align*"}
${P("X=1")} &\\geq ${P("X=0")} \\\\
{4 \\choose 1} p^1 (1-p)^{4-1} &\\geq {4 \\choose 0} p^0 (1-p)^{4-0} \\\\
4 p(1-p)^3 &\\geq (1-p)^4 \\\\
4p &\\geq 1-p \\\\
p &\\geq \\frac{1}{5}

Combining the two,
$$ \\frac{1}{5} \\leq p \\leq \\frac{2}{5} \\; \\QED $$
:::
`,
	},
];