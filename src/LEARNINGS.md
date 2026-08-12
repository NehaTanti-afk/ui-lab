# Learnings

## Phase 1 — Foundation

**components.json**
settings file for the shadcn CLI . it is basically instructions for a tool , not code with the help of this we find where to go .

**clsx vs twMerge**
clsx- joins multiple things into one string.
twmerge - overrides the default value it keeps last one and delete the previous one.

**cva**
cva- its function that builds a string of class names no components involoved .

**Where bg-primary gets its value**
bg- primary ---is the class in your button the colour come from @theme invents the class :root sets its value .dark sets different values .

**focus-visible vs focus**
focus-- ring appers on click and on tab
focus visible-- is the browser's fix.
keyboard focus not mouse click.

**asChild**
asChild renders nothing of its own- it hands its classes to the child you passed and lets that child be the element.
"asChild means: don't render your own element - render my child instead, but put your styling on it".

**data-slot**
a label you stick on the element it does nothing its own no styling no behaviour . its there so other thing can find this element

**Decisions I made**

- Chose Radix UI over the recommended Base UI, because the brief's Phase 4 questions are written against Radix.

## Phase 2 — Storybook

**args vs argTypes vs parameters**
args : which is component and what the component receive if i change the args the component re render differently.
argTypes: which is control the UI(control panel) how it works etc.
parameter: it is basically addone or improve the storybook.

**Why fn() rather than () => {}**
both are function but they do nothing fn() is like a spy which records every call which helps alot later.

**What satisfies Meta<typeof Button> buys you**
satisfies: it is basically a checker which checks the meta againts buttons props in hidden way means without widening the type.

**What autodocs generates, and from what**
autodocs: it generate the documents automatically it contains default, type, source etc.props table comes from your TypeScript types; the previews and code snippets come from your stories.

**The bug the keyboard story catches that the click story misses**
in click story it skips the keyboard features means only mouse user can access this but noone know untill the keyboard is used . but in keyboard story the tab button or keyboard button works.

**What the a11y panel catches and misses**
It catches things a machine can measure — a missing label, contrast that's too low.
It misses anything needing judgement: whether a label actually means something
("Click here" passes but is useless), whether tab order makes sense, whether focus
goes somewhere sensible after a dialog closes. Zero violations means nothing
obviously broken, not that it's accessible.

## Phase 3 — Extending Button

**1. Why startIcon: ReactNode rather than icon: LucideIcon + iconPosition**
i will choose startIcon:ReactNode rather than icon:LucideIcon +iconposition because ReactNode render anything which is renderable.LucideIcon would lock every consumer of your design system to one icon library, and two separate props let you pass two icons at once.

**2. Should loading be a cva variant or handled in the body?**
loading should be handled in the body not cva because cva is collection of classes it returns strings so it should be handled in body separetly.cva returns a string; loading has to render a spinner and block clicks, which a string can't do.

**3. How to stop an icon-only button shipping with no accessible name**
with the help of console warning, the console warning -loud during development, wherever the component runs we can stop an icon-only button shipping with no accessible name.

**4. Should icons be sized by the button or by the caller?**
the icon size is decided by button which is default and caller, can override.

**5. Does the button change width when loading? Should it?**
no the button does not change the width when loading it only disappear the text the colour became grey.

**6. Does asChild still work with icons?**
with asChild , buttons renders nothings of its own it gives classes to the child.so there's no element for startIcon to render into; the caller has to put the icon inside their own element.

**disabled vs aria-disabled**
Used disabled. It blocks clicks and keyboard activation completely. The cost: a
disabled button drops out of tab order, so a keyboard user filling a form loses
their focus position the moment the button starts loading. aria-disabled would
keep it focusable but I'd have to block the click myself.

**What went wrong along the way**
Storybook has its own entry point and never loads main.tsx, so index.css wasn't
imported. Every story had been rendering without my tokens. Fixed by importing
it in .storybook/preview.tsx.

Because of that, my click tests on disabled and loading buttons had been passing
for the wrong reason — pointer-events: none was never applied. Once the CSS
loaded, they failed. Rewrote them to assert state (toBeDisabled, aria-busy)
instead of simulating a click. A passing test proves nothing if the environment
is broken.

## Phase 4 — Five components

**1. Dialog: what Radix handled, and what it didn't**
.radix handles internal things like how tabs works, clicks works etc not how buttons looks basically it gives accessibility the size, height you can decided, in short Radix handles behaviour and accessibility; you handle appearance.

**2. Tabs: automatic vs manual activation**
automatic is suitable because it takes us to next panel automatic but it is suitable where data is not fetch from browser when data is load and heavy then use manual.

**3. DropdownMenu inside Dialog: what determined which painted on top?**
Equal z-index means DOM order decides, and the dialog was landing later.Found by inspecting where each portal landed. Fixed by raising the menu to z-60 rather than reordering.

**4. Input: what aria-invalid + aria-describedby gives that a red border doesn't**
aria invalid only shows error but aria descibedly describe the reason behind why it is showing error.

**5. Across all five: which prop APIs came out consistent, and which drifted?**
size: size means height on Button and Input, but max-width on Dialog.
Card's size meant padding — I renamed it to density.
variant:variant means colour on Button and Badge, layout on TabsList, and only default/destructive on DropdownMenuItem.
asChild:asChild is only on Button and Badge. className: className is always last in cn(), so overrides always work.
data-slot:data-slot is on every component.
(className, data-slot) are consistent because shadcn shipped them that way.

## Phase 5 — Docs site and dashboard

**How does an MDX file become a route?**
The MDX plugin converts the file into a React component, main.tsx imports it,
a Route connects it to a URL, and React Router renders it inside the Layout's Outlet.

**Why is a live preview better than a screenshot?**
It updates when the component changes — a screenshot keeps showing the old colour
or font and nothing warns you, so the docs lie silently. A live preview also works
with the theme toggle, and you can tab to it and click it, so it proves the
behaviour instead of just claiming it.

**What would break with a seventh component? What would you automate first?**
Five places to update by hand: the .mdx file, the import, the route, the index
array, and the props table. Forget the route and the link 404s; forget the index
and nobody can find the page. I would automate routing and the index first —
a broken link is worse than an incomplete table, and a missing index entry means
there is nothing to notice.

**Where is the boundary between Storybook and the docs site?**
Storybook is for the developer building the components — every state, including
broken ones, plus the a11y panel and the interaction tests. The docs site is for
someone using them — what it does, when to use it, one good example and the props.

**Props tables: hand-write or auto-generate?**
Chose auto-generation in principle, kept hand-written for now. A hand-written table
is a second source of truth and goes stale silently. But setup costs more than
writing seven tables, and the Description column can't be generated from types.
Would revisit around twenty components.
