# ngx-polish-number-to-words

Angular pipes and components for converting numbers to grammatically correct **Polish words**, powered by `[polish-number-to-words](https://www.npmjs.com/package/polish-number-to-words)`.

Supports:

- Polish pluralization (e.g., `"1 kot"`, `"2 koty"`, `"5 kotów"`)
- Integers (e.g., `123 → "sto dwadzieścia trzy"`)
- Decimal fractions (e.g., `2.5 → "dwa i jedna druga"` or `"dwa przecinek pięć"`)
- Currency amounts (e.g., `19.99 → "dziewiętnaście złotych dziewięćdziesiąt dziewięć groszy"`)
- Common fractions (e.g., `1/4 → "jedna czwarta"`)

---

## Features

- Angular **standalone pipes**
- Uses the tested logic from `polish-number-to-words`
- Strong TypeScript typing
- Declarative template syntax
- Drop-in support for currency, fractions, and plural forms

---

## Installation

```bash
npm install ngx-polish-number-to-words
```

---

## Usage in Angular Templates

Import the standalone pipes where needed:

```ts
import { NumberToWordsPLPipe, CurrencyToWordsPLPipe } from "ngx-polish-number-to-words";

@Component({
  standalone: true,
  imports: [NumberToWordsPLPipe, CurrencyToWordsPLPipe],
  template: `
    {{ 123.45 | numberToWordsPL }}
    {{ 19.99 | currencyToWordsPL }}
  `,
})
export class MyComponent {}
```

---

## Available Pipes

### `pluralizePL`

```html
{{ 1 | pluralizePL:'kot':'koty':'kotów' }}
<!-- kot -->
{{ 2 | pluralizePL:'kot':'koty':'kotów' }}
<!-- koty -->
{{ 5 | pluralizePL:'kot':'koty':'kotów' }}
<!-- kotów -->
{{ 5 | pluralizePL:'kot':'koty':'kotów':true }}
<!-- 5 kotów -->
{{ 22 | pluralizePL:'kot':'koty':'kotów':true }}
<!-- 22 koty -->
```

A default value for the `withNumber` parameter can be provided using the `PLURALIZE_PL_WITH_NUMBERS_DEFAULT` provider token.

```ts
export const appConfig: ApplicationConfig = {
  providers: [{ provide: PLURALIZE_PL_WITH_NUMBERS_DEFAULT, useValue: true }],
};
```

See also: [pl-plural component](#pl-plural)

### `numberToWordsPL`

```html
{{ 123.45 | numberToWordsPL }}
<!-- sto dwadzieścia trzy i czterdzieści pięć setnych -->
{{ 0.25 | numberToWordsPL:{ simplifyFraction: true } }}
<!-- jedna czwarta -->
```

### `integerToWordsPL`

```html
{{ 123 | integerToWordsPL }}
<!-- sto dwadzieścia trzy -->
{{ 1000 | integerToWordsPL }}
<!-- tysiąc -->
{{ 1000 | integerToWordsPL:{ explicitSingleThousand: true } }}
<!-- jeden tysiąc -->
```

### `decimalFractionToWordsPL`

```html
{{ 0.25 | decimalFractionToWordsPL }}
<!-- dwadzieścia pięć setnych -->
{{ 0.25 | decimalFractionToWordsPL:{ simplifyFraction: true } }}
<!-- jedna czwarta -->
{{ 0.25 | decimalFractionToWordsPL:{ informal: true }}}
<!-- "przecinek dwadzieścia pięć" -->
{{ 0.1247 | decimalFractionToWordsPL:{ informal: true, informalFormIndividualNumberThreshold: 4 }}}
<!-- "przecinek jeden dwa cztery siedem" -->
```

### `commonFractionToWordsPL`

```html
{{ 3 | commonFractionToWordsPL:4 }}
<!-- trzy czwarte -->
{{ 47 | commonFractionToWordsPL:123 }}
<!-- czterdzieści siedem sto dwudziestych trzecich -->
```

### `currencyToWordsPL`

```html
{{ 1.01 | currencyToWordsPL }}
<!-- "jeden złoty jeden grosz" -->
{{ 12.34 | currencyToWordsPL }}
<!-- "dwanaście złotych trzydzieści cztery grosze" -->

{{ 1.01 | currencyToWordsPL:['euro','euro','euro']:['cent','centy','centów'] }}
<!-- "jeden euro jeden cent" -->
```

## Available components

### `pl-plural`

Shortcut for using the `pluralizePl` pipe in HTML.

```html
<pl-plural [value]="5" forms="kot,koty,kotów" />
<!-- kotów -->

<pl-plural [value]="5" forms="kot,koty,kotów" withNumber />
<!-- 5 kotów -->
```

A default value for the `[withNumber]` input can be provided using the `PLURALIZE_PL_WITH_NUMBERS_DEFAULT` provider token.

```ts
export const appConfig: ApplicationConfig = {
  providers: [{ provide: PLURALIZE_PL_WITH_NUMBERS_DEFAULT, useValue: true }],
};
```

---

## Why Use This?

Polish plural and ordinal forms are complex. This package:

- Applies grammatical gender correctly
- Understands numeric context (e.g., 21, 122, 1001)
- Works for currency, informal speech, and compound fractions
- Saves time writing and maintaining manual logic

---

## TypeScript Support

All pipes and components are fully typed and ready for use in modern Angular and standalone components. All pipes are pure pipes.

---

## License

MIT

---

## Author

Created with 💚 for the Polish language. ~joker876

[GitHub Repository](https://github.com/joker876/polish-number-to-words)
