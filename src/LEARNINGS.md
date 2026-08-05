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
