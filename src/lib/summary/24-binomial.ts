import { x } from "mathlifier";

function P(x: string) {
	return `\\mathrm{P}\\left( ${x} \\right)`
}

export const probability: { point: string; example: string | undefined, shortPoint?: string }[] = [
	{
		point: x`Using *P&C* to find probabilities.`,
		shortPoint: "Using P&C to find probabilities",
		example: x`$${{}} \\boxed{${P("A")} = \\frac{\\text{Number of ways for } A \\text{ to occur}}{\\text{Total number of ways}} } 

### Example

:::qn
A group of 10 students is made up of 6 boys and 4 girls.
A team of 3 from the class.
Find the probability that that there are exactly 2 boys on the team?
:::

:::ans
#${"align*"}
& ${P('\\text{required}')} \\\\
& = \\frac{{6 \\choose 2} \\times {4 \\choose 1}}{{10 \\choose 3}} \\\\
& = \\frac{60}{120} \\\\
&= \\frac{1}{2} \\; \\QED

:::


`
	},
	{
		point: "Basic *notation*.",
		shortPoint: "Basic notation",
		example: x`### "Math-to-English" translation

|Notation|Probability of |
|---|---|
| $ @${P("A \\cap B")} $ | $A$ *_and_* $B$ |
| $ @${P("A'")} $ | *_Not_* $A$ |
| $ @${P("A \\cup B")} $ | $A$ *_or_* $B$ (or both) |
| $ @${P("A \\mid B")} $ | $ \\begin{matrix*}[l] A \\textit{\\textbf{ given }} B \\\\ A \\textit{\\textbf{ if }} B \\end{matrix*} $ |

![complement](/svgs/s2a_A_Prime.png)
![intersect](/svgs/s2b_A_Cap_B.png)
![union](/svgs/s2c_A_Cup_B.png)

### Some probability results

- ${{}} 0 \\leq ${P("A")} \\leq 1
for all events $A$.
- ${{}} A \\subseteq B \\Rightarrow ${P("A")} \\leq ${P("B")}.
- ${{}} A \\subset B \\Rightarrow ${P("A")} < ${P("B")}.

![subset](/svgs/s2d_A_Subset_B.png)

### Example

:::qn
Let $A$ be the event that we score more than 70 marks for both
a physics and math test. Let $B$ be the event that the total marks for the 
physics and math test is more than 140. 

State, with a reason, whether ${P("A")}
or ${P("B")}
is smaller?
:::

:::ans

${P("A")} < ${P("B")}
because event $A$ is a *proper subset* of event $B \\; \\QED$

If event $A$ were to occur, then event $B$ would be true.

However, the opposite is not true. 
For example, we could score $80$ and $65$ marks for the tests,
satisfying event $B$ but not $A$.

`,
	},
	{
		point: x`*Complement* ${{}} \\boxed{ ${P("A'")} = 1-${P("A")} }.`,
		example: undefined,
	},
	{
		point: x`*Union* ${{}} \\boxed{ ${P("A \\cup B")} = ${P("A")} + ${P("B")} - ${P("A \\cap B")} }.`,
		example: undefined,
	},
	{
		point: "*Tree* diagram.",
		shortPoint: "Tree diagram",
		example: x`A *tree diagram* is a very useful tool to help us
visualize many problem situations. Having a tree diagram can
help us recall when to multiply or add probabilities (via the
multiplication and addition principles).

### Example

:::qn
There is a probability of $0.6$
that Daniel takes his parents' car to go to school.
Otherwise, he takes a bus.

If he takes his parents' car, he has a $0.01$ probability of being late.
The conditional probability that Daniel is late for school given
that he took the bus is $0.05$.

Find the probability that

(a) Daniel is late and took the bus.
(b) Daniel arrives to school on time.
:::

![tree](/svgs/s2e_tree_diagram.png)

:::ans
(a) By using the tree diagram,
#${"align*"}
& ${P("\\text{late} \\cap \\text{bus}")} \\\\
&= 0.4 \\times 0.05 \\\\
& = 0.02 \\; \\QED

(b) By considering the two cases from the tree diagram,
#${"align*"}
& ${P("\\text{on time}")} \\\\
&= 0.6 \\times 0.99 + 0.4 \\times 0.95 \\\\
& = 0.974 \\; \\QED

:::`,
	},
	{
		point: x`*Conditional* probability ${{}} \\boxed{  ${P("A \\mid B")} = \\frac{${P("A \\cap B")}}{${P("B")}} }. `,
		shortPoint: "Conditional probability",
		example: x`${{}} \\boxed{ ${P("A \\mid B") } = \\frac{${P("A \\cap B")}}{${P("B")}} }


### Example 1 

#### Problem situation

:::qn
There is a probability of $0.6$
that Daniel takes his parents' car to go to school.
Otherwise, he takes a bus.

If he takes his parents' car, he has a $0.01$ probability of being late.
The conditional probability that Daniel is late for school given
that he took the bus is $0.05$.

Find the probability that Daniel took the bus given that he is on time
:::

![tree](/svgs/s2e_tree_diagram.png)

:::ans
By using the conditional probability formula,
#${"align*"}
& ${P("\\text{bus} \\mid \\text{on time}")} \\\\
&= \\frac{${P("\\text{bus} \\cap \\text{on time}")}}{${P("\\text{on time}")}} \\\\
&= \\frac{0.4 \\times 0.05}{0.6 \\times 0.99 + 0.4 \\times 0.95} \\\\
& = \\; \\QED

:::

### Example 2

#### Algebraic approach

:::qn
Given that ${P("A")}=0.3
and ${P("B \\mid A'")}=0.4,
find ${P("A' \\cap B")}.
:::

:::ans
#${"align*"}
${P("B \\mid A'")} &= 0.4 \\\\
\\frac{${P("B \\cap A'")}}{${P("A'")}} &= 0.4 \\\\
\\frac{${P("B \\cap A'")}}{1 - ${P("A")}} &= 0.4 \\\\
\\frac{${P("B \\cap A'")}}{1 - 0.3} &= 0.4 \\\\
${P("A' \\cap B")} &= 0.28 \\; \\QED

:::
`,
	},
	
	{
		point: x`*Venn* diagram.`,
		shortPoint: x`Venn diagram`,
		example: x`*Venn diagrams* help us visualize sets, and are
especially useful for questions involving complements, unions and/or
intersections.

### Example

:::qn
Two events $A$ and $B$ are such that ${{}} {${P("A")}=0.7,}
${{}} {${P("B")}=0.5,}
and ${{}} {${P("A \\cap B'")}=0.38. }
Find 

(a) ${P("A \\cup B")}
(b) ${P("A' \\mid B'")}
:::


:::ans
We fill up a Venn diagram, starting from
${{}} {${P("A \\cap B'")} = 0.38.}
The rest of the regions can then be deduced
using the information provided.

![venn](/svgs/s2f_venn_example_1.png)

In particular, the outside region of 0.12 is obtained by taking
the total probability of $1$ minus everything inside $A \\cup B$

(a) From the Venn diagram
$$ \\begin{align*} 
& @${P("A \\cup B")} 
\\\\ &= @${P("A \\cap B'")} + @${P("B")}
\\\\ &= 0.38 + 0.5
\\\\ &= 0.88 \\; \\QED
\\end{align*} $$

(b) Using the conditional probability formula,
$$ \\begin{align*}
& @${P("A' \\mid B'")} \\\\
&= \\frac{@${P("A' \\cap B'")}}{@${P("B'")}} \\\\
&= \\frac{0.12}{1-0.5} \\\\
&= 0.24 \\; \\QED
\\end{align*}$$
:::`,
	},
	{
		point: '*Table* of outcomes.',
		shortPoint: "Table of outcomes",
		example: x`*Table of outcomes* can be very useful
to visualize problem situations with two sub-events.

### Example

:::qn
Two fair six-sided dice, one blue and one red, are thrown. Let $A$ denote
the event that the blue die shows a $6.$ Let $B$ denote the event that the
minimum of the two dice is $3.$

(a) Find the probability that either $A$ or $B$ occurs (but not both).
(b) Find ${P("B \\mid A'")}.
:::

![table](/svgs/s2g_table.svg)

:::ans
(a) The shaded regions on the table are the outcomes required. By
counting the number shaded regions,
$$ \\begin{align*}
& @${P("\\text{required}")}
\\\\ &= \\frac{11}{36} \\; \\QED
\\end{align*} $$

(b) The darker shaded region on the table represents $B \\cap A'$.
$$ \\begin{align*}
& @${(P("B \\mid A'"))}
\\\\ &= \\frac{@${(P("B \\cap A'"))}}{@${(P("A'"))}}
\\\\ &= \\frac{\\frac{6}{36}}{1-\\frac{1}{6}}
\\\\ &= \\frac{1}{5} \\; \\QED
\\end{align*} $$
:::`,
	},
	{
		point: x`*Mutually exclusive* events, ${{}} \\boxed{${P("A \\cap B")}=0}.`,
		shortPoint: "Mutually exclusive events",
		example: x`Two events are *mutually exclusive* if they
cannot both occur at the same time.

For mutually exclusive events, $ \\boxed{@${P("A \\cap B")} = 0} $

![mutually exclusive](/svgs/s2h_mutually_exclusive.png)

### Example

For a single die roll, the event of rolling a 5 and the event of rolling
an even number are mutually exclusive.`
	},
	{
		point: x`*Independent* events, ${{}} \\boxed{${P("A \\cap B")}=${P("A")} ${P("B")}}.`, 
		shortPoint: x`Independent events`,
		example: x`Two events are *independent* if
${{}} \\boxed{${P("A \\cap B")}=${P("A")} ${P("B")}}

Alternatively, ${{}} { ${P("A \\mid B")} = ${P("A")} }.

### Example 1

#### Using the independent formula
		
:::qn
Two independent events $A$ and $B$ are such that
${{}} {${P("A")}=0.7}
and ${{}} {${P("B")}=0.5}
Find ${{}} {${P("A \\cup B")}.}
:::

:::ans
 #${"align*"}
${P("A \\cup B")} &= ${P("A")} + ${P("B")} - ${P("A \\cap B")} \\\\
	&= 0.7 + 0.5 - ${P("A")} ${P("B")} \\\\
	&= 0.85 \\; \\QED

:::

### Example 2

#### Proving independence

:::qn
Two events $A$ and $B$ are such that
${{}} {${P("A")}=0.7,}
${{}} {${P("B")}=0.6}
and ${{}} {${P("A \\cap B'")} = 0.28.}
Determine whether $A$ and $B$ are independent.
:::

:::ans
 #${"align*"}
${P("A \\cap B")} &= 0.7 - 0.28 \\\\
	&= 0.42

#${"align*"}
${P("A")} ${P("B")} &= 0.7 \\times 0.6 \\\\
&= 0.42

Since ${P("A \\cap B")} = ${P("A")} ${P("B")},
$A$ and $B$ are independent $\\QED$

:::

### Discussion

Note that mutually exclusive events and independence are two separate concepts.

- Are you able to come up with two events that are independent but not mutually exclusive?
- How about two events that mutually exclusive and not independent?
- How about two events that are neither independent nor mutually exclusive?
- What can be said if two events are both mutually exclusive and independent?`
	},
	{
		point: x`Handling sequential events.`,
		shortPoint: x`Handling sequential events`,
		example: x`### Example

:::qn
A fair six-sided die is rolled three times.
Find the probability that 

(a) we obtain a "2" on one of the rolls,
an odd number for one of the rolls,
and obtain either "4" or "6" for one of the rolls?
(b) we obtain a "2" on one of the rolls and an odd number
for two of the rolls.
:::

:::ans

We can use the multiplication principle to get the probability of
${{}} { \\frac{1}{6} \\times \\frac{3}{6} \\times \\frac{2}{6} }.

However, this probability assumes that the *first* roll is "2",
the *second* roll is odd and the *third* roll is either "4" or "6".

The required probability must include other arrangements (eg odd, then "4" or "6", then "2").
We can use the addition principle to do that with different cases, but
the factorial (to rearrange the 3 events) is a quick way to get the required probability.

(a) We use $3!$ to rearrange the 3 outcomes
$$ \\begin{align*}
& @${P('\\text{required}')} \\\\
& = \\frac{1}{6} \\times \\frac{3}{6} \\times \\frac{2}{6} \\times 3! \\\\
& = \\frac{1}{6} \\; \\QED
\\end{align*} $$

(b) Since two of the outcomes are identical, we use $\\frac{3!}{2!}$
$$ \\begin{align*}
& @${P('\\text{required}')} \\\\
& = \\frac{1}{6} \\times \\frac{3}{6} \\times \\frac{3}{6} \\times \\frac{3!}{2!} \\\\
& = \\frac{1}{8} \\; \\QED
\\end{align*} $$

:::`,
	},
	{
		point: x`Finding range of probabilities.`,
		shortPoint: x`Finding range of probabilities`,
		example: x`Using algebra on a Venn diagram can
help us efficiently find the possible *range* of values a probability can take.

### Example

:::qn
Two events $A$ and $B$ are such that 
${{}} { ${P("A")}=0.6 }
and ${{}} { ${P("B")}=0.7 }
Find the range of possible values of 
${P("A \\cap B")}.
:::

:::ans
We let $x$ denote 
${P("A \\cap B")}
and fill up our Venn diagram in terms of $x$.

![venn](/svgs/s2i_venn_diagram_A.png)

Since all probabilities must be between 0 and 1, 
$x$ must be at least 0.3 otherwise 
${{}} {${P("A' \\cap B '")} = x - 0.3}
will be negative.

Similarly, $x$ must be at most 0.6 so that
${{}} {${P("A' \\cap B")} = 0.6-x}
 will be non-negative.

Hence ${{}} 0.3 \\leq ${P("A \\cap B")} \\leq 0.6 \\; \\QED

:::
`,
	}
];
// advanced venn diagram not covered