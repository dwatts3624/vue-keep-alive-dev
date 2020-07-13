# VueKeepAliveDev
This plugin resolves an issue where webpack's Hot Module Replacement (MHR) doesn't work for `keep-alive` components (e.g. `router-view`, etc).

I was struggling to deal with the suggested workarounds that just disable `keep-alive` in development with exclude patterns or a dynamic component.  I quickly noticed that this creates a completely different hook flow where the created/activated/deactived/destroyed hooks would have be tuned based on local vs production and it was getting ugly!  Hoping this solution helps others avoid having to create confusing patterns between dev & production.

## Credit
Full credit to nailfar & ericwu-wish in https://github.com/vuejs/vue-loader/issues/1332 for this *entire* solution.  I just packaged it up to make this easier.

## Installation

### 1. Install
```sh
yarn add vue-keep-alive-dev
# or
npm i vue-keep-alive-dev --save
```

### 2. Activate
```js
import VueKeepAliveDev from 'vue-keep-alive-dev'

Vue.use(VueKeepAliveDev, {
  environment: 'development' // Your environment when HMR is in use
});
```

### 3. Run

In your package.json ensure that the `NODE_ENV` lines up with whatever you're setting when compiling Vue.

Example:
```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --inline --hot --config=webpack.config.js"
  }
}
```

## Configuration

* `environment` - The `NODE_ENV` when HMR is in use.  Defaults to `development`.

## License
MIT