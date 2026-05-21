# Design System Source of Truth

「ぼやき日記 (TalkDiary)」のデザイントークン集。クリーム × イエロー × インクブラックを軸にした、温かく親しみやすい配色を持つ対話型日記アプリのための単一の真実源。

## Intent
- Overall feeling: warm, friendly, hand-drawn (やわらかく親しみやすい)
- Target context: 対話型日記アプリ「ぼやき日記」 — 続けるためのハードルを下げる、温度のあるUI
- Decisions made: typography, spacing, radius, shadow, color

## Typography
- Base font size: 16px
- Modular scale ratio: 1.25 (major third)
- Font pairing: M PLUS Rounded — M PLUS Rounded 1c — friendly rounded forms, consumer products.
- Pairing structure: single-family system (M PLUS Rounded) — heading and body share the typeface for unity
- Rationale: standard-modern — most web products

### Type scale
```css
--font-size-xs: 0.64rem;
--font-size-sm: 0.8rem;
--font-size-base: 1rem;
--font-size-lg: 1.25rem;
--font-size-xl: 1.5625rem;
--font-size-2xl: 1.9531rem;
--font-size-3xl: 2.4414rem;
--font-size-4xl: 3.0518rem;
```

### Line heights
```css
--line-height-tight: 1.275;
--line-height-normal: 1.58;
--line-height-relaxed: 1.73;
```

### Font families
```css
--font-family-heading: 'M PLUS Rounded 1c', 'Hiragino Maru Gothic ProN', system-ui, sans-serif;
--font-family-body: 'M PLUS Rounded 1c', 'Hiragino Maru Gothic ProN', system-ui, sans-serif;
--font-family-mono: 'JetBrains Mono', ui-monospace, monospace;
```

### Font weights
```css
--font-weight-body: 400;
--font-weight-body-strong: 500;
--font-weight-heading: 700;
```

## Spacing
- Base unit: 8px
- Scale approach: linear
- Rationale: Balanced, familiar web rhythm — wide compatibility and predictable density.

### Spacing scale
```css
--space-2xs: 0.25rem;
--space-xs: 0.5rem;
--space-sm: 0.75rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;
--space-2xl: 3rem;
--space-3xl: 4rem;
--space-4xl: 6rem;
--space-5xl: 8rem;
```

### Component defaults
```css
--space-button-padding-x: 1rem;
--space-button-padding-y: 0.5rem;
--space-card-padding: 1.5rem;
--space-input-padding-x: 0.75rem;
--space-input-padding-y: 0.5rem;
--space-section-gap: 4rem;
--space-stack-gap: 1rem;
```

## Radius
- Base radius: 16px (pill-like)
- Scale approach: scaled
- Rationale: playful, pill-adjacent — per-component variation that reinforces shape roles (inputs crisper, cards softer).

### Radius scale
```css
--radius-none: 0;
--radius-sm: 0.5rem;
--radius-md: 1rem;
--radius-lg: 1.5rem;
--radius-xl: 2rem;
--radius-full: 9999px;
```

### Per-component variables
```css
--radius-input: 0.5rem;
--radius-button: 1rem;
--radius-card: 1.5rem;
--radius-badge: 9999px;
```

## Shadow / Elevation
- Intensity: subtle
- Tinted: no (neutral black)
- Rationale: quiet hierarchy without depth theater.

### Shadow scale
```css
--shadow-sm: 0 1px 2px 0 oklch(0% 0 0 / 0.06);
--shadow-md: 0 4px 6px -1px oklch(0% 0 0 / 0.08), 0 2px 4px -2px oklch(0% 0 0 / 0.08);
--shadow-lg: 0 10px 15px -3px oklch(0% 0 0 / 0.1), 0 4px 6px -4px oklch(0% 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px oklch(0% 0 0 / 0.12), 0 8px 10px -6px oklch(0% 0 0 / 0.12);
```

### Elevation hierarchy
`dropdown` (sm) < `card` (md) < `modal` (lg) < `toast` (xl)

## Color
- Approach: cream-base, warm-neutral with yellow accent (クリーム × イエロー × インクブラック)
- Primary accent: yellow (highlight / CTA)
- Neutral style: warm cream (純白ではなく温かみのあるベージュ系)
- Dark mode: not yet defined
- Rationale: 手書きノートのような温度感をベースに、ハイライトとCTAだけイエローで強く立ち上げる。背景70% (cream) / 文字25% (ink) / アクセント5% (yellow) の比率を想定。

### Primary palette — Yellow（アクセント・ハイライト・CTA）
```css
--color-primary-50:  #FFF9DB;
--color-primary-100: #FFF4C4; /* yellow-pale — marker highlight */
--color-primary-200: #FFE89A; /* yellow-soft — soft accent surface */
--color-primary-300: #FFD84D; /* yellow — main accent (default) */
--color-primary-400: #F0C234;
--color-primary-500: #D9A91A;
--color-primary-600: #B58A0D;
--color-primary-700: #8C6A05;
--color-primary-800: #5E4700;
```
- Default accent: `--color-primary-300` (#FFD84D)
- Marker highlight (見出し下線・ハイライト背景): `--color-primary-300`
- Pale highlight (本文中の強調背景): `--color-primary-100`

### Neutral palette — Warm Cream（背景・カード・文字すべての基調）
```css
--color-neutral-50:  #FFFBEE; /* cream-card — elevated card on cream */
--color-neutral-100: #FAF5E9; /* cream — page background */
--color-neutral-200: #F2E9CE; /* cream-deep — section background */
--color-neutral-300: #E6DBBE; /* line — borders, dividers */
--color-neutral-400: #C9BF9D; /* hard-shadow color (offset shadow blocks) */
--color-neutral-500: #7A6F5C; /* mute — secondary text */
--color-neutral-600: #5C5343;
--color-neutral-700: #3F392E;
--color-neutral-800: #2A251E; /* ink-soft — body text */
--color-neutral-900: #14110D; /* ink — headings, primary text */
```

### Paper / Pure white
```css
--color-paper: #FFFFFF; /* used inside iPhone mock screens, bubbles */
```

### Semantic surface roles
```css
--color-bg:             var(--color-neutral-100); /* #FAF5E9 cream */
--color-surface:        var(--color-neutral-100);
--color-surface-raised: var(--color-neutral-50);  /* #FFFBEE cream-card */
--color-surface-section: var(--color-neutral-200);/* #F2E9CE cream-deep */
--color-surface-inverse: var(--color-neutral-900);/* #14110D ink — dark sections */

--color-text:           var(--color-neutral-900); /* #14110D ink */
--color-text-soft:      var(--color-neutral-800); /* #2A251E ink-soft */
--color-text-muted:     var(--color-neutral-500); /* #7A6F5C mute */
--color-text-on-inverse: var(--color-neutral-100);/* cream on ink */
--color-text-on-accent:  var(--color-neutral-900);/* ink on yellow */

--color-border:         var(--color-neutral-300); /* #E6DBBE line */
--color-border-strong:  var(--color-neutral-900); /* hand-drawn outlined cards */
```

### Character accent palette（3キャラの個性カラー）
キャラクター紹介カードや吹き出しなど、人格を出したい場面に限定的に使用。本文や全体UIには使わない。

```css
/* ぺんまる — Blue（ポジティブ・小さな成功） */
--color-char-penmaru-surface: #DCE9F5;
--color-char-penmaru-accent:  #5A8BB8;

/* ホー博士 — Brown（傾聴・落ち着き） */
--color-char-hohakase-surface: #E8D9C2;
--color-char-hohakase-accent:  #8C6E4A;

/* テト — Purple（学び・思索） */
--color-char-teto-surface: #E8DAF0;
--color-char-teto-accent:  #8B6BA6;
```

### Semantic state colors
```css
--color-success-500: oklch(60% 0.16 145);
--color-warning-500: var(--color-primary-300);  /* yellow を流用 */
--color-danger-500:  oklch(60% 0.18 25);
--color-info-500:    oklch(60% 0.14 240);
```

### Interaction states (derived)
- `hover`: lightness -5%（暗系ボタンは lightness +5%）
- `active`: lightness -10%
- `focus`: `2px solid var(--color-primary-300)` with offset `2px`
- `disabled`: opacity 40%

## Usage guidelines

- Primary actions (CTA): 背景 `var(--color-neutral-900)` + 文字 `var(--color-neutral-100)` のインクボタン。サブとして yellow ボタン（背景 `var(--color-primary-300)` + 文字 `var(--color-neutral-900)`）。
- Marker highlight: 見出し内の重要語に `linear-gradient(transparent 60%, var(--color-primary-300) 60%, var(--color-primary-300) 92%, transparent 92%)` を背景指定。手書き蛍光ペン風。
- Page background: `var(--color-bg)`。長いページではセクション単位で `var(--color-surface-section)` (#F2E9CE) と切り替えてリズムを作る。
- Inverse section: 強調したいセクションは `var(--color-surface-inverse)` (#14110D)。文字は `var(--color-text-on-inverse)`、見出しハイライトはそのまま yellow を使える。
- Cards (standard): `var(--radius-card)` + `var(--color-surface-raised)` + `1px solid var(--color-border)` + `var(--shadow-md)`。
- Cards (hand-drawn / stamp): `var(--radius-card)` + `2px solid var(--color-border-strong)` + offset hard-shadow `6px 6px 0 var(--color-border-strong)`。重要な紹介カードに限定。
- Buttons: `var(--radius-button)` + `var(--shadow-sm)`。
- Inputs: `var(--radius-input)`。focus は interaction-states 通り。
- Body text: `var(--font-size-base)` + `var(--line-height-normal)` + `var(--color-text-soft)`。
- Section spacing: `var(--space-3xl)`〜`var(--space-4xl)` between major blocks。
- Stack spacing within a block: `var(--space-md)`。
- Character colors: 該当キャラのカード・吹き出し・アバター背景のみ。導線色やリンク色に転用しない。
- Color ratio target: cream 70% / ink 25% / yellow 5%。character accents は局所のみ。

## Mode scope

- Mode: light tokens のみ定義済み。dark mode は未定義 — 将来追加する際は新規セクションとして追記する。

## What this design system is NOT

- Not a component library specification — tokens only
- Not opinionated about responsive breakpoints
- Extend these tokens via prefixed custom properties (`--color-brand-*`), do not replace

## Change management

- Treat this file as v1 of the project's design source of truth.
- Add new tokens only when the nearest existing token cannot represent the need.
- Deprecate tokens by keeping the old token, documenting the replacement, migrating consumers, then removing it in a later change.
- Record new base decisions in an appended "Decision log" section with context.

## Generation instructions for AI

When using this DESIGN.md:
1. Treat the listed values as authoritative; do not re-derive from preference.
2. When a component needs a value not listed here, pick the nearest available token.
3. If a new decision is required, document it in an appended section and flag it clearly.
4. Preserve the rationale comments — they encode design intent and should guide new decisions in unlisted contexts.
5. Interaction states are derived rules, not hard-coded values — apply them procedurally.
6. Use the semantic surface roles for layout-level color choices before reaching directly into numbered neutral tokens.
7. Character accent colors are scoped to per-character UI only — never use them as global UI colors.
