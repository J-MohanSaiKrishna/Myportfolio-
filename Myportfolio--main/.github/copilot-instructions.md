## Quick context for AI coding agents

- Project type: Vite + React + TypeScript + Tailwind (shadcn-ui components). Source code lives under `src/` and assets under `src/assets` and `public/`.
- Build system: Vite (see `vite.config.ts`). The project uses the `@` alias mapped to `./src` — prefer imports like `@/components/...` and `@/assets/...`.

## Essential commands (use the project's package.json)
- Install dependencies: `npm i` (README instructs npm). There is a `bun.lockb` in the repo, but README and scripts use npm/Vite.
- Development server: `npm run dev` — Vite runs on host `::` port `8080` by default (see `vite.config.ts`).
- Build: `npm run build` (and `npm run build:dev` for dev-mode build).
- Preview built output: `npm run preview`.
- Lint: `npm run lint` (ESLint configured).

## Project patterns & conventions (concrete examples)
- Component layout: UI primitives are under `src/components/ui/` (e.g. `button.tsx`, `input.tsx`). Use these primitives rather than introducing new global UI patterns.
- Page/components: top-level components like `Hero.tsx`, `About.tsx`, `Contact.tsx` live in `src/components/`. Example: `Hero.tsx` imports images with `import profileImage from "@/assets/profile.jpg"` and uses `@/components/ui/button` for buttons.
- Hooks: reusable hooks live in `src/hooks/` (e.g. `use-ripple.tsx`, `use-toast.ts`). Follow their API shape when adding new hooks.
- Utilities: `src/lib/utils.ts` for shared helper logic.
- CSS / Tailwind: Tailwind is configured in `tailwind.config.ts`. Content scanning includes `./src/**/*.{ts,tsx}`, so edit classes directly in TSX files. Custom CSS lives in `src/index.css` and `src/App.css`.

## Imports and filesystem references
- Use the `@` alias (Vite alias defined in `vite.config.ts`) for internal imports: `@/components`, `@/hooks`, `@/assets`.
- Static assets (images, icons) are imported from `src/assets` (preferred) or placed in `public/` for root-relative paths.

## Component style & UI guidelines (discoverable patterns)
- Many components use Radix UI + shadcn-style primitives; prefer small, composable components matching `src/components/ui/*` naming and props patterns (e.g. `Button` accepts `size` and `className`). Inspect `src/components/ui/button.tsx` for the pattern.
- Prefer utility-first Tailwind classes inside JSX. Reuse existing class names (e.g., `gradient-bg`, `glass-effect`, `text-shadow`) that appear in components rather than inventing new ones without a reason.

## Testing / Quality gates
- There are no explicit test scripts in package.json. Linting is available via `npm run lint` (ESLint). When changing types/TSX, ensure TypeScript compiler (tsc) would not error; IDE/typecheck is the primary safeguard.

## External dependencies and integration points
- Key deps: `react`, `react-dom`, `vite`, `tailwindcss`, `@radix-ui/*`, `@tanstack/react-query`, `react-router-dom`.
- There are no backend services configured in the repo. If adding API calls, follow the front-end-only conventions and place network helpers under `src/lib` or a new `src/services` folder.

## When to change project config vs code
- If you need new path aliases, update `vite.config.ts` and then adjust imports.
- If adding global Tailwind utilities, update `tailwind.config.ts` (colors, animations) and ensure `content` globs include new file locations.

## Small checklist for PRs and edits
- Keep imports using `@` alias.
- Reuse UI primitives in `src/components/ui/`.
- Run `npm run dev` locally and check the UI at `http://localhost:8080` (Vite server). If adding new Tailwind classes, verify they appear after rebuild.

If anything in this summary is unclear or you want additional rules (commit message style, PR labels, or tests), tell me which area to expand and I'll update this file.
