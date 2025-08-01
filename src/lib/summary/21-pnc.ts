import { x } from "mathlifier";

export const pnc: { point: string; example: string | undefined, shortPoint?: string }[] = [
	{
		point: "*Multiplication* principle.",
		shortPoint: "Multiplication principle",
		example: x`By breaking an event up into
*steps* with $m$ ways for step 1, followed by
$n$ ways for step 2, there are $\\boxed{m \\times n}$
ways for the event to occur.

### Example

#### Forming a password with repetition

:::qn
How many ways are there to form a five-letter
password using the 26 alphabets from A to Z (all uppercase)?
Repetitions are allowed.

a. No restrictions.
b. The password must start with a vowel.
c. The password must start with A or B and end with B,C or D.
:::

:::ans
(a) We apply the multiplication principle for each letter in the password.
 $$ \\begin{align*}
  \\text{Number of ways} &= 26 \\times 26 \\times 26 \\times 26 \\times 26 \\\\ & = 11,881,376 \\; \\QED
 \\end{align*} $$

(b) There are now only 5 ways to fill in the first letter such that it is a vowel.
$$ \\begin{align*}
	\\text{Number of ways} &= 5 \\times 26 \\times 26 \\times 26 \\times 26 \\\\ &= 2,284,880 \\; \\QED
 \\end{align*} $$

(c) There are 2 ways for the first letter and 3 ways for the last letter.
$$ \\begin{align*}
	\\text{Number of ways} &= 2 \\times 26 \\times 26 \\times 26 \\times 3 \\\\ &= 104,456 \\; \\QED
 \\end{align*} $$
:::`,
	},
	{
		point: x`$\\boxed{{n \\choose r}}$ ways to *choose*
$r$ unique objects out of $n$.`,
		shortPoint: x`Choosing unique objects`,
		example: x`There are
$ \\boxed{{n \\choose r} = ^n\\!C_r}  $ ways to *choose* $r$
objects out of $n$.

### Example

#### Choosing people to form a team

:::qn
A group of 10 students is made up of 6 boys and 4 girls.
How many ways are there to choose a team of 3 from the class?

(a) No restrictions.
(b) There are 2 boys and 1 girl on the team.
:::

:::ans
(a) We choose the team of 3 from the class of 10.
 $$ \\begin{align*}
  \\text{Number of ways} &= {10 \\choose 3} \\\\ & = 120 \\; \\QED
 \\end{align*} $$

(b) We choose the boys and girls separately using the multiplication principle.
 $$ \\begin{align*}
  \\text{Number of ways} &= {6 \\choose 2} \\times {4 \\choose 1} \\\\ & = 60 \\; \\QED
 \\end{align*} $$

:::`
	},
	{
		point: "Addition principle (*cases*).",
		shortPoint: "Addition principle (cases)",
		example: x`By breaking an event up into *cases* with either case 1 (m ways)
or case 2 (n ways), there are $\\boxed{m + n}$ ways for the event to occur.

### Example

#### Choosing people to form a team (using cases)

:::qn
A group of 10 students is made up of 6 boys and 4 girls.
How many ways are there to choose a team of 3 from the class such
that there are at least 2 boys on the team?
:::

:::ans
Case 1: Exactly 2 boys
$$ \\begin{align*}
  \\text{Number of ways} &= {6 \\choose 2} \\times {4 \\choose 1} \\\\ & = 60
 \\end{align*} $$

Case 2: Exactly 3 boys
$$ \\begin{align*}
  \\text{Number of ways} &= {6 \\choose 3} \\\\ & = 20
 \\end{align*} $$

Using the addition principle,
#${"align*"}
& \\text{Required number of ways} \\\\
& = 60 + 20 \\\\
& = 80 \\; \\QED

:::`,
	},
	{
		point: "*Complement* technique.",
		shortPoint: "Complement technique",
		example: x`Sometimes it is easier
to calculate the "opposite" of what is required.
For such cases, we use the *complement* technique,
where we take the total number of ways and subtract the
number of ways for the complement.

$$ \\boxed{n(A) = n(\\text{total}) - n\\left(A'\\right)} $$

### Example

#### Choosing people to form a team (using complement)

:::qn
A group of 10 students is made up of 6 boys and 4 girls.
How many ways are there to choose a team of 3 from the class such
that there are at least 1 boy on the team?
:::

:::ans
The complement of "at least 1 boy on the team" is
"no boys on the team" (all girls).
#${"align*"}
& \\text{Required number of ways} \\\\
& = \\text{Total number of ways} - \\text{all girls} \\\\
& = {10 \\choose 3} - {4 \\choose 3} \\\\
& = 116 \\; \\QED

:::`,
	},
	{
		point: x`$\\boxed{n!}$ ways to rearrange $n$ 
distinct objects in a *line*.`,
		shortPoint: x`Rearrangements in a line`,
		example: x`There are $\\boxed{n!}$
ways to rearrange $n$ distinct objects in a *line*.

### Example

#### Rearranging people in a row
		
:::qn
7 friends A,B,C,D,E,F,G get together for a meal.
How many ways are there to arrange them in a row?
:::

:::ans
#${"align*"} &\\text{Number of ways}
\\\\ &= 7!
\\\\ &= 5040 \\; \\QED

:::`,
	},
	{
		point: '*Grouping* technique.',
		shortPoint: "Grouping technique",
		example: x`We can *group* objects together and consider them as
a single "unit" to tackle questions where items must be together.

### Example

#### Rearranging people in a row (using grouping)

:::qn
7 friends A,B,C,D,E,F,G get together for a meal.
How many ways are there to arrange them in a row
such that A,B and C are together?
:::

![grouping](/svgs/s1a_grouping.svg)

:::ans
#${"align*"} &\\text{Number of ways}
\\\\ &= 5! \\times 3!
\\\\ &= 720 \\; \\QED

:::`,
	},
	{
		point: '*Slotting* technique.',
		shortPoint: "Slotting technique",
		example: x`To *separate* objects, we can apply the
slotting technique. First rearrange the other objects. We then
place the remaining objects in the "slots" around the others.

### Example

#### Rearranging people in a row (using slotting)

:::qn
7 friends A,B,C,D,E,F,G get together for a meal.
How many ways are there to arrange them in a row
such that F and G are separated?
:::

![slotting](/svgs/s1b_slotting.svg)

:::ans
#${"align*"} &\\text{Number of ways}
\\\\ &= 5! \\times {6 \\choose 2} \\times 2!
\\\\ &= 3600 \\; \\QED

:::

### Discussion

The example above (involving 2 people) can also be solved using the
complement and grouping techniques to obtain the exact same answer.

Can you see why the complement and slotting approach will
give different answers when we consider 3 people. In particular,
consider the following two examples:

- A, B and C are *not all together*
- A, B and C are *not next to one another*`
	},
	{
		point: x`$\\boxed{(n-1)!}$ ways to rearrange $n$ 
distinct objects in a *circle*.`,
		shortPoint: x`Rearrangements in a circle`,
		example: x`There are $\\boxed{(n-1)!}$
ways to rearrange $n$ distinct objects in a *circle*.

### Example

#### Rearranging people in a circle
		
:::qn
7 friends A,B,C,D,E,F,G get together for a meal.
How many ways are there to arrange them in a circle?

(a) No restrictions.
(b) A,B and C are together.
(c) F and G are separated.
:::

:::ans
(a) We apply the $(n-1)!$ formula.
 $$ \\begin{align*}
  \\text{Number of ways} &= (7-1)! \\\\ & = 720 \\; \\QED
 \\end{align*} $$

(b) We apply the grouping technique in addition to the circle formula.
![grouping](/svgs/s1c_grouping_circle.svg)
 $$ \\begin{align*}
  \\text{Number of ways} &= (5-1)! \\times 3! \\\\ & = 144 \\; \\QED
 \\end{align*} $$

(c) We modify the slotting technique for a circle
![slotting](/svgs/s1d_slotting_circle.svg)
 $$ \\begin{align*}
  \\text{Number of ways} &= (5-1)! \\times {5 \\choose 2} \\times 2! \\\\ & = 480 \\; \\QED
 \\end{align*} $$

:::`
	},
	{
		point: x`$\\boxed{\\frac{n!}{r_1! \\dotsm r_k!}}$ ways to rearrange $n$ 
objects with $r_i$ *identical*.`,
		shortPoint: x`Rearranging identical objects.`,
		example: x`There are $\\boxed{\\frac{n!}{r_1! \\dotsm r_k!}}$
ways to rearrange $n$ objects with $r_i$ *identical*.

### Example

#### Rearranging a word with repeated letters

:::qn
How many ways are there to rearrange the letters
of the word SEQUENCES?
:::

:::ans
There are 3 repeated E and 2 repeated S
#${"align*"} &\\text{Number of ways}
\\\\ &= \\frac{9!}{3!2!}
\\\\ &= 30,240 \\; \\QED

:::`,
	},
	{
		point: x`Choosing with rearrangements.`,
		shortPoint: "Choosing with rearrangements",
		example: x`There are
$ \\boxed{{n \\choose r} \\times r! = ^n\\!P_r}  $ ways to choose $r$
objects out of $n$ with arrangements.

### Example 1

#### Forming a password without repetition

:::qn
How many ways are there to form a five-letter
password using the 26 alphabets from A to Z (all uppercase)?
Repetitions are *not* allowed.

(a) No restrictions.
(b) The password must start with a vowel.
(c) The password must start with A or B and end with B,C or D.

:::

:::ans
(a) We choose the 5 letters and then rearrange them
 $$ \\begin{align*}
  \\text{Number of ways} &= {26 \\choose 5 } \\times 5! \\\\ & = 7,893,600 \\; \\QED
 \\end{align*} $$

(b) We apply the multiplication principle for the first letter and the remaining 4. 
 $$ \\begin{align*}
  \\text{Number of ways} &= {5 \\choose 1} \\times {25 \\choose 4} \\times 4! \\\\ & = 1,518,000 \\; \\QED
 \\end{align*} $$

(c) Case 1: Start with A. Then the last letter can be B, C or D.
 $$ \\begin{align*}
  \\text{Number of ways} &= 1 \\times 3 \\times {24 \\choose 3} \\times 3!
	\\\\ &= 36,432
 \\end{align*} $$
Case 2: Start with B. Then the last letter can be C or D.
 $$ \\begin{align*}
  \\text{Number of ways} &= 1 \\times 2 \\times {24 \\choose 3} \\times 3!
	\\\\ &= 24,288
 \\end{align*} $$
 
Using the addition principle,
#${"align*"}
& \\text{Required number of ways} \\\\
& = 36,432 + 24,288 \\\\
& = 60,720 \\; \\QED

:::

### Example 2

#### Rearranging a word

:::qn
(a) How many ways are there to rearrange the
letters of the word THEORY?
(b) How many 3-letter codewords can be formed
using the letters of the word THEORY?
:::

:::ans
(a) $ \\text{Number of ways } = \\; 6! = 720 \\; \\QED$
(b) $ \\text{Number of ways } = \\; {6 \\choose 3} \\times 3! = 120 \\; \\QED$
`
	},
	{
		point: x`Choosing with identical objects.`,
		shortPoint: "Choosing with identical objects",
		example: x`We use cases (based on the number of identical objects)
to handle situations where we need to choose with potential repetitions.

:::qn
How many 3-letter codewords can be formed using
the letters of the word SEQUENCES?
:::

:::ans
Case 1: All unique letters ("XYZ").
 $$ \\begin{align*}
  \\text{Number of ways} &= {6 \\choose 3} \\times 3!
	\\\\ &= 120
 \\end{align*} $$
Case 2: 2 repeated letters ("XXY").
 $$ \\begin{align*}
  \\text{Number of ways} &= {2 \\choose 1} \\times {5 \\choose 2} \\times \\frac{3!}{2!}
	\\\\ &= 30
 \\end{align*} $$
Case 3: 3 repeated letters ("XXX").
 $$ \\begin{align*}
  \\text{Number of ways} &= 1
 \\end{align*} $$

Using the addition principle,
#${"align*"}
& \\text{Required number of ways} \\\\
& = 120 + 30 + 1 \\\\
& = 151 \\; \\QED

:::`
	}
];
// advanced venn diagram not covered