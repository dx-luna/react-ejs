# react-ejs

## Usage

```js
import { EjsRender } from './react-ejs'

<EjsRender path="src/sample/**" data={{ data }}>

```

### vite.config.js

```js
import pluginEjs from "./plugin-ejs";

export default defineConfig({
  plugins: [
    ...,
    pluginEjs()
  ],
});

// output -> public/src/*.ejs
```
