# ngx-polish-number-to-words

Angular pipes for converting numbers to grammatically correct **Polish words**, powered by `[polish-number-to-words](https://www.npmjs.com/package/polish-number-to-words)`.

Supports:
- Integers (e.g., `123 → "sto dwadzieścia trzy"`)
- Decimal fractions (e.g., `2.5 → "dwa i jedna druga"` or `"dwa przecinek pięć"`)
- Currency amounts (e.g., `19.99 → "dziewiętnaście złotych dziewięćdziesiąt dziewięć groszy"`)
- Common fractions (e.g., `1/4 → "jedna czwarta"`)
- Polish pluralization (e.g., `"1 kot"`, `"2 koty"`, `"5 kotów"`)

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
import { NumberToWordsPLPipe, CurrencyToWordsPLPipe } from 'ngx-polish-number-to-words';

@Component({
  standalone: true,
  imports: [NumberToWordsPLPipe, CurrencyToWordsPLPipe],
  template: `
    {{ 123.45 | numberToWordsPL }}
    {{ 19.99 | currencyToWordsPL }}
  `
})
export class MyComponent {}
```

---

## Available Pipes

### `numberToWordsPL`

```html
{{ 123.45 | numberToWordsPL }}
{{ 0.25 | numberToWordsPL:{ simplifyFraction: true } }}
```

### `integerToWordsPL`

```html
{{ 1000 | integerToWordsPL:{ explicitSingleThousand: true } }}
```

### `decimalFractionToWordsPL`

```html
{{ 0.25 | decimalFractionToWordsPL }}                  <!-- formal -->
{{ 0.25 | decimalFractionToWordsPL:{ informal: true }}} <!-- "przecinek dwadzieścia pięć" -->
```

### `commonFractionToWordsPL`

```html
{{ commonNumerator | commonFractionToWordsPL:commonDenominator }}
<!-- Example: 3 and 4 → "trzy czwarte" -->
```

### `currencyToWordsPL`

```html
{{ 1.01 | currencyToWordsPL }} <!-- "jeden złoty jeden grosz" -->

{{ 1.01 | currencyToWordsPL:['euro','euro','euro']:['cent','centy','centów'] }}
<!-- "jeden euro jeden cent" -->
```

### `pluralizePL`

```html
{{ 1 | pluralizePL:'kot':'koty':'kotów' }} <!-- kot -->
{{ 2 | pluralizePL:'kot':'koty':'kotów' }} <!-- koty -->
{{ 5 | pluralizePL:'kot':'koty':'kotów' }} <!-- kotów -->
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

All pipes are fully typed and ready for use in modern Angular and standalone components.

---

## License

MIT

---

## Author

Created with 💚 for the Polish language. ~joker876

[GitHub Repository](https://github.com/joker876/polish-number-to-words)
