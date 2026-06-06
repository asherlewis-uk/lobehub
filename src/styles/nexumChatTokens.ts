import { createGlobalStyle } from 'antd-style';

/**
 * nexumChat design token injection.
 *
 * This stylesheet:
 * 1. Defines the nexumChat semantic token palette as CSS custom properties.
 * 2. Maps the antd-style / @lobehub-ui CSS variables that the app already
 *    consumes (`--ant-*` and `--lobe-vars-*`) onto those nexumChat tokens.
 *
 * Because the codebase uses `createStaticStyles(({ cssVar }))` everywhere,
 * overriding the CSS variables at the root is the fastest, lowest-risk way to
 * re-theme the entire SPA and auth surfaces without editing 100+ files.
 *
 * We attach mapped variables directly to html` / html[data-theme]` so they
 * override the default antd-generated :root` variables by specificity.
 */

export const NexumChatTokenStyle = createGlobalStyle`
  :root {
    /* Fonts */
    --font-sans: satoshi variable, inter, ui-sans-serif, system-ui, -apple-system,
      blinkmacsystemfont, "Segoe UI", "Helvetica Neue", arial, sans-serif;
    --font-mono: jetbrains mono, sfmono-regular, menlo, monaco, consolas,
      "Liberation Mono", monospace;

    /* Spacing */
    --space-0: 0px;
    --space-025: 2px;
    --space-050: 4px;
    --space-075: 6px;
    --space-100: 8px;
    --space-150: 12px;
    --space-200: 16px;
    --space-250: 20px;
    --space-300: 24px;
    --space-400: 32px;
    --space-500: 40px;
    --space-600: 48px;
    --space-800: 64px;
    --space-1000: 80px;

    /* Radius */
    --radius-none: 0px;
    --radius-xs: 2px;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-2xl: 24px;
    --radius-pill: 999px;

    /* Elevation */
    --shadow-none: none;
    --shadow-1: 0 1px 4px rgb(0 0 0 / 18%);
    --shadow-2: 0 4px 12px rgb(0 0 0 / 22%);
    --shadow-3: 0 8px 24px rgb(0 0 0 / 28%);
    --shadow-4: 0 16px 40px rgb(0 0 0 / 34%);
    --shadow-5: 0 24px 80px rgb(0 0 0 / 42%);

    /* Glows */
    --glow-cyan: 0 0 24px rgb(34 211 238 / 30%);
    --glow-violet: 0 0 32px rgb(139 92 246 / 32%);
    --glow-magenta: 0 0 32px rgb(217 70 239 / 26%);

    /* Gradients */
    --gradient-brand: linear-gradient(
      135deg,
      #22d3ee 0%,
      #3b82f6 28%,
      #8b5cf6 58%,
      #d946ef 78%,
      #ff7a59 100%
    );
    --gradient-brand-soft: linear-gradient(
      135deg,
      rgb(34 211 238 / 18%),
      rgb(139 92 246 / 16%),
      rgb(217 70 239 / 14%)
    );

    /* Motion */
    --duration-fast: 120ms;
    --duration-base: 180ms;
    --duration-slow: 260ms;
    --duration-slower: 420ms;
    --ease-standard: cubic-bezier(0.2, 0, 0, 1);
    --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
    --focus-ring: 0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-focus);

    color-scheme: dark light;
  }

  /*
   * Dark theme (primary brand experience)
   * Default on :root so un-themed markup still looks correct.
   */
  :root,
  html[data-theme="dark"] {
    --color-bg: #050711;
    --color-bg-subtle: #080b18;
    --color-surface: #0c1020;
    --color-surface-2: #10162a;
    --color-surface-3: #151d33;
    --color-surface-glass: rgb(12 16 32 / 72%);
    --color-border: #26304a;
    --color-border-subtle: #1a2238;
    --color-text: #f8fafc;
    --color-text-muted: #c8d0e2;
    --color-text-subtle: #8b96b3;
    --color-text-disabled: #566178;
    --color-primary: #3b82f6;
    --color-primary-hover: #60a5fa;
    --color-primary-active: #2563eb;
    --color-accent: #d946ef;
    --color-accent-2: #22d3ee;
    --color-success: #34d399;
    --color-warning: #fbbf24;
    --color-danger: #fb7185;
    --color-info: #60a5fa;
    --color-focus: #a78bfa;
    --color-scrim: rgb(2 6 23 / 72%);
  }

  html[data-theme="light"] {
    --color-bg: #f7f9fc;
    --color-bg-subtle: #eef3fa;
    --color-surface: #fff;
    --color-surface-2: #f8faff;
    --color-surface-3: #eef2ff;
    --color-surface-glass: rgb(255 255 255 / 78%);
    --color-border: #d8e0ef;
    --color-border-subtle: #e8edf7;
    --color-text: #111827;
    --color-text-muted: #334155;
    --color-text-subtle: #64748b;
    --color-text-disabled: #94a3b8;
    --color-primary: #2563eb;
    --color-primary-hover: #1d4ed8;
    --color-primary-active: #1e40af;
    --color-accent: #c026d3;
    --color-accent-2: #0891b2;
    --color-success: #059669;
    --color-warning: #b45309;
    --color-danger: #e11d48;
    --color-info: #2563eb;
    --color-focus: #7c3aed;
    --color-scrim: rgb(15 23 42 / 40%);
  }

  /*
   * Ant Design / antd-style variable mapping.
   * Attached to html and antd's CSS-var scope classes so it overrides
   * the :root variables emitted by antd's CSS-var engine and @lobehub/ui's
   * ThemeProvider.
   */
  html,
  html[data-theme="dark"],
  html[data-theme="light"],
  .lobe-vars,
  [class*="css-var-"] {
    /* Typography */
    --ant-font-family: var(--font-sans);
    --lobe-vars-font-family: var(--font-sans);
    --ant-font-family-code: var(--font-mono);
    --lobe-vars-font-family-code: var(--font-mono);

    /* Backgrounds */
    --ant-color-bg-layout: var(--color-bg);
    --lobe-vars-color-bg-layout: var(--color-bg);
    --ant-color-bg-container: var(--color-surface);
    --lobe-vars-color-bg-container: var(--color-surface);
    --ant-color-bg-elevated: var(--color-surface-2);
    --lobe-vars-color-bg-elevated: var(--color-surface-2);
    --ant-color-bg-container-secondary: var(--color-surface-2);
    --lobe-vars-color-bg-container-secondary: var(--color-surface-2);
    --ant-color-bg-spotlight: var(--color-surface-3);
    --lobe-vars-color-bg-spotlight: var(--color-surface-3);
    --ant-color-bg-mask: var(--color-scrim);
    --lobe-vars-color-bg-mask: var(--color-scrim);
    --ant-color-bg-text-hover: var(--color-surface-2);
    --lobe-vars-color-bg-text-hover: var(--color-surface-2);

    /* Fills (subtle backgrounds, hover states) */
    --ant-color-fill: var(--color-surface-2);
    --lobe-vars-color-fill: var(--color-surface-2);
    --ant-color-fill-secondary: var(--color-surface-3);
    --lobe-vars-color-fill-secondary: var(--color-surface-3);
    --ant-color-fill-tertiary: var(--color-border-subtle);
    --lobe-vars-color-fill-tertiary: var(--color-border-subtle);
    --ant-color-fill-quaternary: var(--color-border);
    --lobe-vars-color-fill-quaternary: var(--color-border);

    /* Text */
    --ant-color-text: var(--color-text);
    --lobe-vars-color-text: var(--color-text);
    --ant-color-text-secondary: var(--color-text-muted);
    --lobe-vars-color-text-secondary: var(--color-text-muted);
    --ant-color-text-tertiary: var(--color-text-subtle);
    --lobe-vars-color-text-tertiary: var(--color-text-subtle);
    --ant-color-text-quaternary: var(--color-text-disabled);
    --lobe-vars-color-text-quaternary: var(--color-text-disabled);
    --ant-color-text-placeholder: var(--color-text-subtle);
    --lobe-vars-color-text-placeholder: var(--color-text-subtle);
    --ant-color-text-heading: var(--color-text);
    --lobe-vars-color-text-heading: var(--color-text);
    --ant-color-text-label: var(--color-text-muted);
    --lobe-vars-color-text-label: var(--color-text-muted);
    --ant-color-text-description: var(--color-text-subtle);
    --lobe-vars-color-text-description: var(--color-text-subtle);
    --ant-color-text-disabled: var(--color-text-disabled);
    --lobe-vars-color-text-disabled: var(--color-text-disabled);
    --ant-color-text-light-solid: var(--color-text);
    --lobe-vars-color-text-light-solid: var(--color-text);

    /* Borders */
    --ant-color-border: var(--color-border);
    --lobe-vars-color-border: var(--color-border);
    --ant-color-border-secondary: var(--color-border-subtle);
    --lobe-vars-color-border-secondary: var(--color-border-subtle);

    /* Primary action (brand) */
    --ant-color-primary: var(--color-primary);
    --lobe-vars-color-primary: var(--color-primary);
    --ant-color-primary-hover: var(--color-primary-hover);
    --lobe-vars-color-primary-hover: var(--color-primary-hover);
    --ant-color-primary-active: var(--color-primary-active);
    --lobe-vars-color-primary-active: var(--color-primary-active);
    --ant-color-primary-bg: var(--color-surface-2);
    --lobe-vars-color-primary-bg: var(--color-surface-2);
    --ant-color-primary-bg-hover: var(--color-surface-3);
    --lobe-vars-color-primary-bg-hover: var(--color-surface-3);
    --ant-color-primary-border: var(--color-border);
    --lobe-vars-color-primary-border: var(--color-border);
    --ant-color-primary-border-hover: var(--color-primary-hover);
    --lobe-vars-color-primary-border-hover: var(--color-primary-hover);
    --ant-color-primary-text: var(--color-primary);
    --lobe-vars-color-primary-text: var(--color-primary);
    --ant-color-primary-text-hover: var(--color-primary-hover);
    --lobe-vars-color-primary-text-hover: var(--color-primary-hover);

    /* Status colors */
    --ant-color-success: var(--color-success);
    --lobe-vars-color-success: var(--color-success);
    --ant-color-success-hover: var(--color-success);
    --lobe-vars-color-success-hover: var(--color-success);
    --ant-color-success-active: var(--color-success);
    --lobe-vars-color-success-active: var(--color-success);
    --ant-color-success-bg: var(--color-surface-2);
    --lobe-vars-color-success-bg: var(--color-surface-2);
    --ant-color-warning: var(--color-warning);
    --lobe-vars-color-warning: var(--color-warning);
    --ant-color-warning-hover: var(--color-warning);
    --lobe-vars-color-warning-hover: var(--color-warning);
    --ant-color-warning-active: var(--color-warning);
    --lobe-vars-color-warning-active: var(--color-warning);
    --ant-color-warning-bg: var(--color-surface-2);
    --lobe-vars-color-warning-bg: var(--color-surface-2);
    --ant-color-error: var(--color-danger);
    --lobe-vars-color-error: var(--color-danger);
    --ant-color-error-hover: var(--color-danger);
    --lobe-vars-color-error-hover: var(--color-danger);
    --ant-color-error-active: var(--color-danger);
    --lobe-vars-color-error-active: var(--color-danger);
    --ant-color-error-bg: var(--color-surface-2);
    --lobe-vars-color-error-bg: var(--color-surface-2);
    --ant-color-info: var(--color-info);
    --lobe-vars-color-info: var(--color-info);
    --ant-color-info-hover: var(--color-info);
    --lobe-vars-color-info-hover: var(--color-info);
    --ant-color-info-active: var(--color-info);
    --lobe-vars-color-info-active: var(--color-info);
    --ant-color-info-bg: var(--color-surface-2);
    --lobe-vars-color-info-bg: var(--color-surface-2);

    /* Links */
    --ant-color-link: var(--color-primary);
    --lobe-vars-color-link: var(--color-primary);
    --ant-color-link-hover: var(--color-primary-hover);
    --lobe-vars-color-link-hover: var(--color-primary-hover);
    --ant-color-link-active: var(--color-primary-active);
    --lobe-vars-color-link-active: var(--color-primary-active);

    /* Radius */
    --ant-border-radius: var(--radius-md);
    --lobe-vars-border-radius: var(--radius-md);
    --ant-border-radius-lg: var(--radius-xl);
    --lobe-vars-border-radius-lg: var(--radius-xl);
    --ant-border-radius-sm: var(--radius-sm);
    --lobe-vars-border-radius-sm: var(--radius-sm);
    --ant-border-radius-xs: var(--radius-xs);
    --lobe-vars-border-radius-xs: var(--radius-xs);

    /* Elevation */
    --ant-box-shadow: var(--shadow-1);
    --lobe-vars-box-shadow: var(--shadow-1);
    --ant-box-shadow-secondary: var(--shadow-2);
    --lobe-vars-box-shadow-secondary: var(--shadow-2);
    --ant-box-shadow-tertiary: var(--shadow-3);
    --lobe-vars-box-shadow-tertiary: var(--shadow-3);

    /* Focus ring */
    --ant-color-focus: var(--color-focus);
    --lobe-vars-color-focus: var(--color-focus);
    --ant-control-outline: var(--focus-ring);
    --lobe-vars-control-outline: var(--focus-ring);
  }

  html body {
    font-family: var(--font-sans);
  }

  /* Focus visible aligned with design pack */
  :focus-visible {
    outline: none;
    box-shadow: var(--focus-ring);
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;

export default NexumChatTokenStyle;
