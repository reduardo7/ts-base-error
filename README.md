# TypeScript Base Extendible Error

NPM:
[https://www.npmjs.com/package/ts-base-error](https://www.npmjs.com/package/ts-base-error)

## Usage Example

### index.ts

```node
import BaseError from 'ts-base-error';

class Err1 extends BaseError {}
const e1 = new Err1();
console.log(e1 instanceof Err1); // true
console.log(e1 instanceof Error); // true

class Err2 extends Err1 {}
const e2 = new Err2();
console.log(e2 instanceof Err1); // true
console.log(e2 instanceof Err2); // true
console.log(e2 instanceof Error); // true

class NoBaseErr extends Error {}
const x = new NoBaseErr();
console.log(x instanceof Error); // true
console.log(x instanceof NoBaseErr); // false !!!
```

### Test

```bash
npx ts-node test.ts
```

## Problems

### Class constructor error

- **Error message**: `Class constructor BaseError cannot be invoked without 'new'`.
- **Solution**: Set target to `ES6`. Ref: [https://stackoverflow.com/a/50203532/717267](https://stackoverflow.com/a/50203532/717267)
