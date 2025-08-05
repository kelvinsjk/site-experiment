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

export const drv: { point: string; example: string | undefined, shortPoint?: string }[] = [
	{
		point: x`Probability *distribution*.`,
		shortPoint: "Probability distribution",
		example: x`The *probability distribution* of a discrete random variable
is a list of all the possible outcomes and their associated probabilities.
Typically, these are presented in the form of a *table*.

### Example

#### Probability distribution table

:::qn
A team of 3 students is to be chosen from a class made up of 6 boys and 4 girls.
Let $X$ be the random variable of the number of boys on the team.
Find the probability distribution of $X$.
:::

:::ans
The possible values of $X$ are $0, 1, 2$ and $3$.

|:---:|:---:|:---:|:---:|:---:|
| $x$ | 0 | 1 | 2 | 3 |
| $@${P("X=x")}$ | $\\frac{1}{30}$ | $\\frac{3}{10}$ | $\\frac{1}{2}$ | $\\frac{1}{6}$ |

$\` \\begin{aligned}
@${P("X=0")} & = \\frac{{6 \\choose 0} \\times {4 \\choose 3}}{{10 \\choose 3}} \\\\
& = \\frac{1}{30} \\\\
@${P("X=1")} & = \\frac{{6 \\choose 1} \\times {4 \\choose 2}}{{10 \\choose 3}} \\\\
& = \\frac{3}{10} \\\\
@${P("X=2")} & = \\frac{{6 \\choose 2} \\times {4 \\choose 1}}{{10 \\choose 3}} \\\\
& = \\frac{1}{2} \\\\
@${P("X=3")} & = \\frac{{6 \\choose 3} \\times {4 \\choose 0}}{{10 \\choose 3}} \\\\
& = \\frac{1}{6}
\\end{aligned}\`

:::
`
	},
	{
		point: `$ \\boxed{ \\sum ${P("X=x")} = 1 } $.`,
		shortPoint: "Probabilities sum to 1",
		example: x`$${{}} \\boxed{ \\sum ${P("X=x")} = 1 }

### Example

:::qn
A discrete random variable $X$ has the probability distribution

$${P("X=x")} = \\begin{cases}
kx^2 & \\text{for } x = 1, 3, 6 \\\\
0 & \\text{otherwise}
\\end{cases}

Find $k$.
:::

:::ans
We can rewrite the probability distribution in table form:

|:---:|:---:|:---:|
| $x$ | 1 | 3 | 6 |
| $@${P("X=x")}$ | $k$ | $9k$ | $36k$ |

By using ${{}} { \\sum ${P("X=x")} = 1 },
#${"align*"}
k + 9k + 36k & = 1 \\\\
46k & = 1 \\\\
k &= \\frac{1}{46} \\; \\QED

:::`
	},
	{
		point: `*Expectation* $ \\boxed{ ${E("X")} = \\sum x ${P("X=x")} }$.`,
		shortPoint: "Expectation",
		example: x`The *expectation* (or *mean*)
of a discrete random variable is denoted by the symbol ${E("X")}
(or $\\mu$) and is
 given by the formula
${{}} \\boxed{ ${E("X")} = \\sum x ${P("X=x")} }.

### Example

:::qn
Let $X$ be a DRV with the following probability distribution:

|:---:|:---:|:---:|:---:|:---:|
| $x$ | 0 | 1 | 2 | 3 |
| $@${P("X=x")}$ | $\\frac{1}{30}$ | $\\frac{3}{10}$ | $\\frac{1}{2}$ | $\\frac{1}{6}$ |

Find ${E("X")}.
:::

:::ans
#${"align*"}
${E("X")} &= \\sum x ${P("X=x")} \\\\
&= (0) \\left( \\frac{1}{30} \\right) + (1) \\left( \\frac{3}{10} \\right) + (2) \\left( \\frac{1}{2} \\right) + (3) \\left( \\frac{1}{6} \\right) \\\\
&= 1.8 \\; \\QED 

:::
`,
	},
	{
		point: `*Variance* $ \\boxed{ ${Var("X")} = ${E("X^2")} - \\Big( ${E("X")} \\Big)^2 }$.`,
		shortPoint: "Variance",
		example: x`The *variance*
of a discrete random variable is denoted by the symbol ${Var("X")}
(or $\\sigma^2$) and is
 given by the formula
${{}} \\boxed{ ${Var("X")} = ${E("X^2")} - \\Big( ${E("X")} \\Big)^2 }.

The square root of the variance is called the *standard deviation*, denoted by the symbol $\\sigma$.

### Example

:::qn
Let $X$ be a DRV with the following probability distribution:

|:---:|:---:|:---:|:---:|:---:|
| $x$ | 0 | 1 | 2 | 3 |
| $@${P("X=x")}$ | $\\frac{1}{30}$ | $\\frac{3}{10}$ | $\\frac{1}{2}$ | $\\frac{1}{6}$ |


Find ${Var("X")}.

(Note: We have found that ${{}} { ${E("X")} = 1.8  }
in the previous example.)
:::

:::ans
#${"align*"}
&${E("X^2")} \\\\
&= \\sum x^2 ${P("X=x")} \\\\
&= (0^2) \\left( \\frac{1}{30} \\right) + (1^2) \\left( \\frac{3}{10} \\right) + (2^2) \\left( \\frac{1}{2} \\right) + (3^2) \\left( \\frac{1}{6} \\right) \\\\
&= 3.8 

#${"align*"}
${Var("X")} &= ${E("X^2")} - \\Big( ${E("X")} \\Big)^2 \\\\
&= 3.8 - (1.8)^2 \\\\
&= 0.56 \\; \\QED 

:::
`,
	},
	{
		point: x`Factorial algebra, $ \\boxed{ n! = n (n-1)!} $.`,
		shortPoint: "Factorial algebra",
		example: x`Let us look at the example of $${{}} 10! = 10 \\cdot 9 \\cdot 8 \\dotsb 1

We observe that this can be rewritten as ${{}} {10! = 10 \\cdot 9!}.

This is generalized to ${{}} \\boxed{ n! = (n-1)! },
which is very useful when working with factorials algebraically.

We will also be using the formula $$ { n \\choose r } = \\frac{n!}{r! \\times (n-r)!} $$
from our formula booklet in the following example. 

### Example

:::qn
A team of 3 students is to be chosen from a class made up of $m$ boys and 4 girls.
Let $X$ be the random variable of the number of boys on the team.

Given that ${{}} { ${P("X=2")} = 3 ${P("X=3")}, }
find $m$.
:::

:::ans
#${"align*"}
${P("X=2")} &= 3 ${P("X=3")} \\\\
\\frac{ {m \\choose 2} {4 \\choose 1} }{ {m+4 \\choose 3} } &= 3 \\frac{ {m \\choose 3} {4 \\choose 0} }{ {m+4 \\choose 3} } \\\\
{m \\choose 2} {4 \\choose 1} &= 3 {m \\choose 3} {4 \\choose 0} \\\\
\\frac{m!}{2!(m-2)!} \\cdot 4 &= 3 \\cdot \\frac{m!}{3!(m-3)!} \\cdot 1 \\\\
\\frac{4m!}{2(m-2)!} &= \\frac{3m!}{6(m-3)!} \\\\
\\frac{2}{(m-2)!} &= \\frac{1}{2(m-3)!} \\\\
4(m-3)! &= (m-2)!

We now use the $n! = n(n-1)!$ formula for ${{}} {n=m-2}

#${"align*"}
4(m-3)! &= (m-2)(m-3)! \\\\
4 &= m-2 \\\\
m &= 6 \\; \\QED

:::
`,
	},
];