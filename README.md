# ui-lab

A small design system built from scratch to learn how one works.

**Live:** https://ui-lab-2.vercel.app

## What's in it

Seven components — Button, Badge, Input, Card, Dialog, Tabs, DropdownMenu — built on
Radix primitives with a Tailwind v4 token layer, documented in Storybook and on an
MDX docs site, plus a dashboard demonstrating composition.

## Stack

Vite · React · TypeScript · Tailwind v4 · Radix UI · Storybook · Vitest · GitHub Actions

## Running it

```bash
pnpm install
pnpm dev          # docs site and dashboard
pnpm storybook    # component workshop
pnpm exec vitest run   # interaction tests
```

## What I learned

The most useful failures were the silent ones. A contrast violation of 3.98 against
a required 4.5 that no eye could catch — and where my first fix made it worse. A
class that did nothing because of a stray space in the name. A size prop that never
applied because a responsive prefix needed a viewport I didn't have. Interaction
tests that passed for months because Storybook was rendering without my stylesheet,
so `pointer-events: none` never applied.

None of those produced an error. Each one only surfaced by inspecting the rendered
result rather than trusting the source.

The other thing that stuck: Radix owns behaviour, I own appearance. Focus traps,
keyboard handling and ARIA wiring came free. Every colour, size and animation
was mine.

Full per-phase notes in [LEARNINGS.md](./LEARNINGS.md).
