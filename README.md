# function-parameters
[![Build Status](https://travis-ci.org/inf3rno/function-parameters.svg?branch=master)](https://travis-ci.org/inf3rno/function-parameters)
Parsing function parameter list even for ES6 syntax.

```sh
npm install function-parameters
```

implemented in v0.1.0
```js
var parameters = require("function-parameters");
parameters(function (a, b){}); // ["a","b"]
parameters((a,b) => {}); // ["a","b"]
parameters((a,b) => null); // ["a","b"]
parameters((class A{x(a,b){}}).prototype.x); // ["a","b"]
```

todo
```js
var parameters = require("function-parameters");
parameters(([a,b]) => {}); // ["[a,b]"]
parameters(({a,b}) => {}); // ["{a,b}"]
parameters((a, ...b) => {}); // ["a","...b"]
parameters(class A{constructor(a,b){}}); // ["a","b"]
parameters(function (a, b /*, c*/) {}); // ["a","b"]
```

