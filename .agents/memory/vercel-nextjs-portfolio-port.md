---
name: Vercel Next.js portfolio port
description: Lesson from porting a simple Next.js App Router portfolio (no API routes) to the pnpm_workspace react-vite artifact.
---

The `fullstack-copy-frontend.sh` script auto-detects the client dir by looking for `src/App.tsx`/`src/main.tsx`/`src/components`/`src/pages` (a Vite-shaped layout). A Next.js App Router project has none of those — it has `src/app/`. Auto-detect fails with "Could not find client directory."

**Fix:** pass `--client-dir src` explicitly. The script then copies `src/*` wholesale (including the `app/` router tree) into the artifact's `src/`, but it does NOT convert Next.js routing — that conversion is still manual:

- Move page components (`app/**/page.js`) into a flat `src/pages/` and wire them into a wouter `Switch`/`Route` in `App.tsx`.
- Move shared UI (`app/components/*`) into `src/components/site/` (or similar), replacing `next/link` → wouter `Link`, `next/navigation` `usePathname` → wouter `useLocation()[0]`.
- `layout.js` (fonts, metadata, `<html>` wrapper) becomes `index.html` head tags + the top-level JSX wrapper in `App.tsx`.
- Delete the leftover `src/app/` tree once ported so it isn't dead code sitting next to the new pages.
- Plain `.jsx` files ported as-is typecheck-fail on import from `.tsx` (`TS7016`); add `// @ts-ignore` on those imports rather than rewriting every file to `.tsx` — acceptable per the "out of scope: strict typecheck" migration rule.
