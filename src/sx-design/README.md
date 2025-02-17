**🚧 WORK in PROGRESS 🚧**

[![Crowdin](https://badges.crowdin.net/sx-design/localized.svg)](https://crowdin.com/project/sx-design)

Inclusive design system written using [`@adeira/sx`](https://github.com/adeira/sx). Core value of this project are (in this order):

- ⚛️ exclusively using atomic CSS via [`@adeira/sx`](https://github.com/adeira/sx)
- 🏳️‍🌈 fully supported localization ([🇺🇸🇲🇽🇨🇿🇳🇴🇺🇦🇷🇺🇦🇪](https://crowdin.com/project/sx-design))
- ☯️ light and dark theme out of the box
- 🆘 accessible components for people with visual impairment
- حلال support for RTL layouts ([🇦🇪](https://crowdin.com/project/sx-design))
- 📲 mobile first

# Installation and Usage

Using SX Design is as simple as installing the package via NPM or Yarn and importing the right component from `@adeira/sx-design`.

```bash
yarn add @adeira/sx @adeira/sx-design
```

SX Design is fully localized and requires information about the current application locale. This typically changes with every user, so it's necessary to provide it via `SxDesignProvider` React component (before the first SX Design component in the React tree):

```js
import { SxDesignProvider } from '@adeira/sx-design';

// Note: SX Design automatically enables styled error boundary 👍
export default function MyRootApp() {
  return (
    <SxDesignProvider
      locale="en-US" // affects translations as well as dates, monetary values and similar
      theme="light" // or "dark" or "system"
    >
      {/* … */}
    </SxDesignProvider>
  );
}
```

It is recommended to have some global CSS in your application where you configure fonts for your application, for example:

```css
/* https://github.com/rsms/inter */
@import url('https://rsms.me/inter/inter.css');
html {
  font-family: 'Inter', sans-serif;
  font-feature-settings: 'ss01', 'zero';
}
@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', sans-serif;
  }
}
```

SX Design doesn't currently take care of this to give you freedom of choice.

# Available components

**🚧 WORK in PROGRESS 🚧**

Legend:

```text
✅  yes! (or not relevant)
🧐  needs some more work (or not evaluated yet)
```

| Component              | Localized?¹ | Dark mode?² | Has stories?³ | Tested?⁴ | RTL?⁵ |
| ---------------------- | :---------: | :---------: | :-----------: | :------: | :---: |
| [`<Badge />`]          |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Breadcrumb />`]     |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Button />`]         |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<ButtonLink />`]     |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<DateTime />`]       |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Entity />`]         |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<EntityField />`]    |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<ErrorBoundary />`]  |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<FlashMessage />`]   |     🧐      |     🧐      |      🧐       |    🧐    |  🧐   |
| [`<FilterChips />`]    |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Image />`]          |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Kbd />`]            |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Link />`]           |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<LinkButton />`]     |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Loader />`]         |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<LocaleSwitcher />`] |     🧐      |     🧐      |      🧐       |    🧐    |  🧐   |
| [`<Menu />`]           |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Meter />`]          |     🧐      |     🧐      |      🧐       |    🧐    |  🧐   |
| [`<MissingData />`]    |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Modal />`]          |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Money />`]          |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Note />`]           |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Placeholder />`]    |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<ProductCard />`]    |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Skeleton />`]       |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<SkipLink />`]       |     ✅      |     🧐      |      🧐       |    🧐    |  🧐   |
| [`<Table />`]          |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Tabs />`]           |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Text />`]           |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Tooltip />`]        |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |

[`<badge />`]: https://sx-design.vercel.app/?path=/docs/components-badge
[`<breadcrumb />`]: https://sx-design.vercel.app/?path=/docs/components-breadcrumb
[`<button />`]: https://sx-design.vercel.app/?path=/docs/components-button
[`<buttonlink />`]: https://sx-design.vercel.app/?path=/docs/components-buttonlink
[`<datetime />`]: https://sx-design.vercel.app/?path=/docs/components-datetime
[`<entity />`]: https://sx-design.vercel.app/?path=/docs/components-entity
[`<entityfield />`]: https://sx-design.vercel.app/?path=/docs/components-entityfield
[`<errorboundary />`]: https://sx-design.vercel.app/?path=/docs/components-errorboundary
[`<flashmessage />`]: https://sx-design.vercel.app/?path=/docs/components-flashmessage
[`<filterchips />`]: https://sx-design.vercel.app/?path=/docs/components-filterchips
[`<image />`]: https://sx-design.vercel.app/?path=/docs/components-image
[`<kbd />`]: https://sx-design.vercel.app/?path=/docs/components-kbd
[`<link />`]: https://sx-design.vercel.app/?path=/docs/components-link
[`<linkbutton />`]: https://sx-design.vercel.app/?path=/docs/components-linkbutton
[`<loader />`]: https://sx-design.vercel.app/?path=/docs/components-loader
[`<localeswitcher />`]: https://sx-design.vercel.app/?path=/docs/components-localeswitcher
[`<menu />`]: https://sx-design.vercel.app/?path=/docs/components-menu
[`<meter />`]: https://sx-design.vercel.app/?path=/docs/components-meter
[`<missingdata />`]: https://sx-design.vercel.app/?path=/docs/components-missingdata
[`<modal />`]: https://sx-design.vercel.app/?path=/docs/components-modal
[`<money />`]: https://sx-design.vercel.app/?path=/docs/components-money
[`<note />`]: https://sx-design.vercel.app/?path=/docs/components-note
[`<placeholder />`]: https://sx-design.vercel.app/?path=/docs/components-placeholder
[`<productcard />`]: https://sx-design.vercel.app/?path=/docs/components-productcard
[`<skeleton />`]: https://sx-design.vercel.app/?path=/docs/components-skeleton
[`<skiplink />`]: https://sx-design.vercel.app/?path=/docs/components-skiplink
[`<table />`]: https://sx-design.vercel.app/?path=/docs/components-table
[`<tabs />`]: https://sx-design.vercel.app/?path=/docs/components-tabs
[`<text />`]: https://sx-design.vercel.app/?path=/docs/components-text
[`<tooltip />`]: https://sx-design.vercel.app/?path=/docs/components-tooltip

There is an additional set of so-called "Layout" components that are responsible for rendering the components above in a correct order, with correct spacing and so on:

- [`<LayoutBlock />`](https://sx-design.vercel.app/?path=/docs/layout-layoutblock) - typically⁶ vertical stacking
- [`<LayoutGrid />`](https://sx-design.vercel.app/?path=/docs/layout-layoutgrid) - children in a [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)
- [`<LayoutInline />`](https://sx-design.vercel.app/?path=/docs/layout-layoutinline) - typically⁶ horizontal stacking
- … 🚧

_Did you find a mistake in this table? Please, [report is as an issue](https://github.com/adeira/universe/issues/new)._

<sub>
¹ Localized means that it's either translated by us or the component inputs are (Flow) typed in a way that encourages passing translated strings instead of plain strings.<br />
² Component should look fine in both light and dark mode.<br />
³ There are stories in the Storybook (https://sx-design.vercel.app/) and these stories are somehow useful and explanatory.<br />
⁴ There are tests available to make sure that the component works as expected and we won't break it by accident.<br />
⁵ Component correctly supports right-to-left (RTL) as well as traditional left-to-right (LTR) layouts<br />
⁶ https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline
</sub>

# Styles customization

SX Design leverages full power of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) as a main way of style customization. You can optionally overwrite the values from your application. Most of the CSS variable values are available in [`src/SxDesignProviderCSSVariables.js`](./src/SxDesignProviderCSSVariables.js) or in a documentation of each component (when they relate only to that component).

There is also an `useSxDesignContext` hook which allows you to access system theme and other global SX Design properties:

```js
export default function MyComponent() {
  // `theme` can be "light", "dark" or "system"
  const { theme } = useSxDesignContext();
}
```

# Development

The easiest way how to develop these components is to run a Storybook:

```bash
yarn workspace @adeira/sx-design storybook
```

Please, make sure that any changes still follow the core values of this project and the matrix of available components was updated accordingly.

## Changing language and dark mode in Storybook

Storybook is configured to ease switching between different languages and light/dark modes. You can change these settings in the top panel:

![Storybook top panel](./docs/storybook-top-panel.png)

There is no way how to manually switch between LTR and RTL layouts. RTL layout is applied automatically once you select some language that should be rendered in RTL context (for example Arabic).

## Working with SX Design colors

It's recommended to use [`pastel`](https://github.com/sharkdp/pastel) when working with the SX Design colors:

```bash
brew install pastel
```

SX Design commonly uses colors written as triplets of values from 0 to 255. Here is how you can convert these triplets back and forth:

```bash
pastel color "28, 30, 33"
pastel format hex "28, 30, 33"
```

To generate colors gradient run:

```bash
pastel gradient -n 9 '255, 255, 255' '28, 30, 33'
pastel gradient -s rgb -n 9 '255, 255, 255' '28, 30, 33' | pastel format rgb
```

Another interesting command for checking colors with simulated colorblindness:

```bash
pastel colorblind deuter "247,212,214" "255,26,26" "238,0,0" "197,0,0"
```

For more info run:

```bash
pastel --help
```

# Prior art

_sorted alphabetically_

- https://github.com/vercel/commerce
- https://material.io/components?platform=web
- https://seek-oss.github.io/braid-design-system/
- https://vercel.com/design
- https://www.radix-ui.com/
