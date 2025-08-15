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

export const normal: { point: string; example: string | undefined, shortPoint?: string }[] = [
	{
		point: x`Properties of a *normal* distribution.`,
		shortPoint: "Properties of a normal distribution",
		example: x`The *normal* distribution is an example of a continuous random variable.

### Probability of equality

For a continuous random variable $X$, ${P("X=a")} = 0
for all real numbers $a$. This means that ${{}} {${P("X < a")} = ${P("X \\leq a")}.}

Discussion: compare and contrast this with the binomial distribution.

### Normal distribution parameters

The mean $\\mu$ and the variance $\\sigma^2$ (or standard deviation $\\sigma$)
are the *parameters* of a normal distribution. We present it as
${{}} \\boxed{ X \\sim \\mathrm{N}\\left( \\mu, \\sigma^2 \\right) }

### Properties

- A normal distribution is *symmetrical* about its mean, $\\mu$.
- "Almost all" values of $x$ are within 3 standard deviations of the mean.

We visualize probabilities in a normal distribution as the *area* underneath the bell curve.

### Example

### Sketch of a normal distribution

:::qn
Given that a random variable $X$ is normally distributed with mean $16$
and standard deviation $3$, sketch the distribution of $X$.

Shade also, the region on your sketch that represents ${P("X > 20")}.
:::

:::ans

:::
`
	},
		{
		point: ` $ \\boxed{X \\sim \\mathrm{N}\\left(\\mu, \\sigma^2 \\right)}$.`,
		example: undefined
	},
	{
		point: `*Normcdf* $ \\boxed{ ${P("a < X \\leq b")} }$.`,
		shortPoint: "Normcdf",
		example: x`We use \`normcdf\` on our calculator to calculate probabilities associated with the
normal distribution.

### Example 1

#### Two-sided intervals

:::qn
The mass of an apple is normally distributed with mean $150$ and standard deviation $20$.
Find the probability that an apple weighs between $140$ and $170$ grams.
:::

:::ans
Let $X$ denote the random variable of the mass of an apple.

$$ X \\sim \\mathrm{N} \\left( 150, 20^2 \\right) $$

Using the \`normcdf\` function on our calculator,
with \`μ=150\`, \`σ = 20\`,
\`lower=140\` and \`upper=170\`,

$${{}} ${P("140 < X < 170")} = 0.533 \\text{ (to 3 s.f.)} \\; \\QED

*Remark*: Note that this probability is the same as ${{}} ${P("140 \\leq X \\leq 170")}
:::

### Example 2

#### One-sided intervals

:::qn
The mass of an orange is normally distributed with mean $200$ and variance $450$.
Find the probability that

(a) an orange weighs less than $210$ grams,
(b) an orange weighs at least $225$ grams.
:::

:::ans
Let $X$ denote the random variable of the mass of an orange.

$$ X \\sim \\mathrm{N} \\left( 200, 450 \\right) $$

To calculate one-sided probabilities, we
mimic "infinity" in our calculator with \`±1E99\`
(representing $ {\\pm 10^{99}}$)

We us the \`normcdf\` function on our calculator,
with \`μ=200\`, \`σ:\` $\\sqrt{450}$.

(a) Setting \`lower=-1E99\` and \`upper=210\`,
$${{}} ${P("X < 210")} = 0.681 \\text{ (to 3 s.f.)} \\; \\QED

(b) Setting \`lower=225\` and \`upper=1E99\`,
$${{}} ${P("X \\geq 225")} = 0.119 \\text{ (to 3 s.f.)} \\; \\QED

*Remark*: Note that we key the standard deviation $\\sqrt{450}$ into the calculator
instead of the variance of $450$.
:::

### Example 3

#### Situations where the normal distribution is not appropriate

:::qn
Let $X$ denote the random variable of the time it takes for a cafe to prepare
an order. It is known that the mean is 6 minutes and the standard deviation is 5 minutes.

Explain why a normal distribution is not appropriate to model $X$.
:::

:::ans
If $X$ is normally distributed, we have

$$ X \\sim \\mathrm{N} \\left( 9, 6^2 \\right) $$

Then ${{}} {${P("X < 0")} = 0.067 }
which suggests that a significant proportion of orders have negative preparation times.
This is not possible so a normal distribution is not appropriate to model $X \\; \\QED$
:::
`,
	},
	{
		point: `*Invnorm* $ \\boxed{ ${P("X \\leq b")} = p }$.`,
		shortPoint: "Invnorm",
		example: x`We use \`invnorm\` on our calculator for situations with *known probability*.
For example, if $X$ is normally distributed with known mean and variance and we know that ${{}} { ${P("X < b")} = 0.6, }
we can use the \`invnorm\` function to find the value of $b$.

### Example

#### Left and right \`invnorm\`

:::qn
The marks students score on a particular test can be modelled by a normal distribution
with mean 55 and standard deviation 15.

(a) A student is requires remedial classes if he or she scores less than $b$ marks. Given that
$20\\%$ of students require remedial classes, what is the value of $b$?

(b) What must a student score to be in the top $10\\%$?

:::

:::ans
Let $X$ denote the random variable of the marks a randomly chosen student scores on the test.

$$ X \\sim \\mathrm{N}\\left( 55,15^2\\right) $$

We use \`invnorm\` on our calculator with \`μ=55\`, \`σ = 15\`.

(a) Using \`invnorm\` \`LEFT\` with \`area=0.2\`,
#${'align*'}
 ${P("X < b")} &= 0.2
\\\\ b &= 42.4  \\text{ (to 3 s.f.)} \\; \\QED

(b) Let $a$ be the mark a student must score to be in the top $10\\%$.\\
Using \`invnorm\` \`RIGHT\` with \`area=0.1\`,
#${'align*'}
 ${P("X \\geq a")} &= 0.1
\\\\ a &= 74.2  \\text{ (to 3 s.f.)} \\; \\QED

:::
`,
	},
	{
		point: x`*Standardization* $\\boxed{ Z = \\frac{X-\\mu}{\\sigma} }$.`,
		shortPoint: "Standardization",
		example: x`The *standard normal* distribution, denoted by the letter $Z$ is
the normal distribution with mean 0 and variance 1

$$ Z \\sim \\mathrm{N} (0, 1) $$

All other normal distributions ${{}} { X \\sim \\mathrm{N} \\left( \\mu, \\sigma^2 \\right) }
can be converted to the standard normal with the following formula

$$ \\boxed{Z = \\frac{X - \\mu}{\\sigma}} $$

Conversion to the standard normal is a very useful strategy for questions with
*unknown mean* and/or *unknown variance*.

### Example 

:::qn
The mass of an orange is normally distributed with mean $\\mu$ and variance $450$.
Given that $15\\%$ of oranges have mass less than $150$ grams, what is the value of $\\mu$?
:::

:::ans
Let $X$ denote the random variable of the mass of randomly chosen orange.

$$ X \\sim \\mathrm{N}(\\mu,450) $$

Applying the standardization formula,

#${"align*"}
${P("X < 150")} &= 0.15 \\\\
${P("\\frac{X - \\mu}{\\sqrt{450}} < \\frac{150 - \\mu}{\\sqrt{450}} ")} &= 0.15 \\\\
${P("Z < \\frac{150 - \\mu}{\\sqrt{450}}")} &= 0.35 

where ${{}} { Z \\sim \\mathrm{N}(0,1) }.
\\
Using \`invnorm\` on our calculator, we get

#${"align*"}
\\frac{150 - \\mu}{\\sqrt{450}} &= -1.03643 \\\\
\\mu = 172 \\text{ (to 3 s.f.)} \\; \\QED

:::
`,
	},
	{
		point: x`*Sum* $\\boxed{ X + Y \\sim \\mathrm{N} \\left( \\mu_1 + \\mu_2, \\sigma_1^2 + \\sigma_2^2 \\right) }$. `,
		shortPoint: x`Sum of independent normal distributions`,
		example: x`If two normally distributed random variables $X$ and $Y$ are independent,
then the sum ${{}} {X+Y}
is also normally distributed with mean
${{}} \\boxed{  ${E("X + Y")} = ${E("X")} + ${E("Y")} }
and variance
${{}} \\boxed{  ${Var("X + Y")} = ${Var("X")} + ${Var("Y")} }

$$\\boxed{ X + Y \\sim \\mathrm{N} \\left( \\mu_1 + \\mu_2, \\sigma_1^2 + \\sigma_2^2 \\right) }$$

### Example

:::qn
The mass of an apple is normally distributed with mean $150$ and standard deviation $20$.
The mass of an orange is normally distributed with mean $200$ and variance $450$.
Find the probability that an apple and an orange has total mass more than 400 grams.

State an assumption used to answer this question.
:::

:::ans
Let $X$ and $Y$ denote the random variable of the mass of a randomly chosen apple and orange respectively.

#${"align*"}
X &\\sim \\mathrm{N} \\left( 150, 20^2 \\right) \\\\
Y &\\sim \\mathrm{N} \\left( 200, 450 \\right)

*Assumption*: $X$ and $Y$ are independent $\\QED$

#${"align*"}
X+Y &\\sim \\mathrm{N} \\left( 150+200, 20^2 + 450 \\right) \\\\
X+Y &\\sim \\mathrm{N} \\left( 350, 850 \\right)

$${{}} ${P("X + Y > 400")} = 0.0432 \\text{ (to 3 s.f.)} \\; \\QED

*Remark 1*: Note that we add the *variances* and not the standard deviation\\
*Remark 2*: Remember to key $\\sigma = \\sqrt{850}$ in your calculator and not the variance of $850$.
:::
`,
	},
	{
		point: x`*Difference* $\\boxed{ X - Y \\sim \\mathrm{N} \\left( \\mu_1 - \\mu_2, \\sigma_1^2 + \\sigma_2^2 \\right) }$. `,
		shortPoint: x`Difference of independent normal distributions`,
		example: x`If two normally distributed random variables $X$ and $Y$ are independent,
then the difference ${{}} {X-Y}
is also normally distributed with mean
${{}} \\boxed{  ${E("X - Y")} = ${E("X")} - ${E("Y")} }
and variance
${{}} \\boxed{  ${Var("X - Y")} = ${Var("X")} + ${Var("Y")} }

$$\\boxed{ X - Y \\sim \\mathrm{N} \\left( \\mu_1 - \\mu_2, \\sigma_1^2 + \\sigma_2^2 \\right) }$$

*Remark*: Note that we *add* the variances and do not subtract.

### Example

:::qn
The mass of an apple is normally distributed with mean $150$ and standard deviation $20$.
The mass of an orange is normally distributed with mean $200$ and variance $450$.
It is assumed that the mass of an apple is independent of the mass of an orange.
Find the probability that an apple weighs more than an orange.
:::

:::ans
Let $X$ and $Y$ denote the random variable of the mass of a randomly chosen apple and orange respectively.

#${"align*"}
X &\\sim \\mathrm{N} \\left( 150, 20^2 \\right) \\\\
Y &\\sim \\mathrm{N} \\left( 200, 450 \\right)

#${"align*"}
X-Y &\\sim \\mathrm{N} \\left( 150-200, 20^2 + 450 \\right) \\\\
X-Y &\\sim \\mathrm{N} \\left( -50, 850 \\right)

#${"align*"}
& ${P("X > Y")} \\\\
& = ${P("X - Y > 0")} \\\\
&= 0.0432 \\text{ (to 3 s.f.)} \\; \\QED

:::
`,
	},
	{
		point: x`*Multiple* $\\boxed{ aX \\sim \\mathrm{N} \\left( a\\mu, a^2 \\sigma^2 \\right) }$. `,
		shortPoint: x`Multiple of a normal distribution`,
		example: x`If $X$ is a normally distributed random variable,
then any scalar multiple ${{}} {aX}
is also normally distributed with mean
${{}} \\boxed{  ${E("aX")} = a ${E("X")} }
and variance
${{}} \\boxed{  ${Var("aX")} = a^2 ${Var("X")} }

$$\\boxed{ a X \\sim \\mathrm{N} \\left( a \\mu, a^2 \\sigma^2 \\right) }$$

*Remark*: Note we use the *square* of the multiple for computing the variance.

### Example

:::qn
The mass of an orange is normally distributed with mean $200$ and variance $450$.
Oranges are sold at 1.5 cents per gram.
Find the probability that an orange costs more than ${{}} \\\$2.50.
:::

:::ans
Let $X$ denote the random variable of the mass of a randomly chosen orange.

#${"align*"}
Y  &\\sim \\mathrm{N} \\left( 200, 450 \\right) \\\\
aY &\\sim \\mathrm{N} \\left( 1.5(200), 1.5^2 (450) \\right) \\\\
aY &\\sim \\mathrm{N} \\left( 300, 1012.5 \\right) 

$${{}} ${P("aX > 250")} = 0.942 \\text{ (to 3 s.f.)} \\; \\QED

:::
`,
	},
	{
		point: x`Sum, $\\boxed{nX}$ vs multiple $\\boxed{X_1 + \\dotsb + X_n}$.`,
		shortPoint: x`Sum vs multiple`,
		example: x`In statistics, the *sum* of two independent observations of $X$ (denoted by 
${{}} {X_1 + X_2}
) is different from *twice* of one observation of $X$ (denoted by $2X$).
 Using the correct notation (and hence the correct mean and variance) is key to answering questions.

#${'align*'}
&\\text{Sum} &&\\boxed{ X_1 + \\dotsb + X_n } \\sim \\mathrm{N} \\left( n\\mu, n\\sigma^2 \\right) \\\\
&\\text{Multiple}&& \\boxed{ nX } \\sim \\mathrm{N} \\left( n\\mu, n^2\\sigma^2 \\right)

:::qn
The mass of an apple is normally distributed with mean $150$ and standard deviation $20$.
The mass of an orange is normally distributed with mean $200$ and variance $450$.

Find the probability that the total mass of 5 apples is more than 4 times the mass of an orange.
:::

:::ans
Let $X$ and $Y$ denote the random variable of the mass of a randomly chosen apple and orange respectively.

#${"align*"}
X &\\sim \\mathrm{N} \\left( 150, 20^2 \\right) \\\\
Y &\\sim \\mathrm{N} \\left( 200, 450 \\right)

#${"gather*"}
\\text{Let } A = X_1 + \\dotsb + X_5 \\sim \\mathrm{N} \\left( 5(150), 5(20^2) \\right) \\\\
A \\sim \\mathrm{N} \\left( 750, 2000 \\right) \\\\
\\text{Let } O = 4Y \\sim \\mathrm{N} \\left( 4(200), 4^2(450) \\right) \\\\
O \\sim \\mathrm{N} \\left( 800, 7200 \\right)

$$ A - O \\sim \\mathrm{N} \\left( -50, 9200 \\right) $$

#${"align*"}
& ${P("X_1 + \\dotsb + X_5 > 5Y")} \\\\
& = ${P("A > O")} \\\\
& = ${P("A - O > 0")} \\\\
&= 0.301 \\text{ (to 3 s.f.)} \\; \\QED

:::
`
	},
];