# javascript-string-format-polyfill

Logic-less polyfill to add {{mustache}} templates to String type

# How to use

Import this where you starts application: 

```ts
require('javascript-string-format-polyfill'); // with javascript
import 'javascript-string-format-polyfill';   // with typescript

// rest of app
```

When use typescript, you can add this in `tsconfig.json` file:

```json
{
  "compilerOptions": {
    ...
  },
  "ts-node": {
    "require": ["javascript-string-format-polyfill"]
  }
}
```

And no need import in app. That's it!