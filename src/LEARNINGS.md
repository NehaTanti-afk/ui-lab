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
