# cel-js

> ⛔ This library is not yet ready for production usage. ⛔

`cel-js` is a powerful and efficient parser and evaluator for Google's [Common Expression Language](https://github.com/google/cel-spec) (CEL), built on the robust foundation of the [Chevrotain](https://chevrotain.io/docs/) parsing library. This library aims to provide a seamless and easy-to-use interface for working with CEL in JavaScript environments.

## Features ✨

- 🚀 Fast and Efficient Parsing: Leverages Chevrotain for high-performance parsing.
- 🌍 Isomorphic: Ready for server and browser.
- 📦 ESM and CommonJS support.
- 📚 Supported CEL Features:
  - [x] Comparison Operators (`==`, `!=`, `<`, `<=`, `>`, `>=`)
  - [ ] Logical Operators (`&&`, `||`, `!`)
  - [ ] Identifiers (Variables, `foo == bar`)
  - [ ] Selectors (`foo.bar[0].baz`)
  - [ ] Macros (`exists`, `has`, `size`, etc.)

## Installation

To install `cel-js`, use npm:

```bash
npm i cel-js
```

## Usage

```ts
import { parse } from 'cel-js'

parse('2 + 2') // => 4

parse('a > 4', { a: 5 }) // => true
```
