# parse-query-string
A lightweight and opinionated query string parser that automatically coerces query parameter values to their appropriate JavaScript types (Number, Boolean, or null).
## Features
 * Automatic Type Coercion: Converts query string values like '123', 'true', 'false', and '' into Number, Boolean, or null.
 * Array Support: Handles repeated query keys by converting the value into an Array.
 * Robust Parsing: Leverages the built-in Node.js/browser URL and URLSearchParams for reliable path parsing.

## Installation
`npm install parse-query-string`
# or
`yarn add parse-query-string`

## Usage
The function is designed to take a path (or just a query string) and return an object with the parsed and coerced key-value pairs.

### Import
You can use either the CommonJS require syntax (for Node.js) or the ES Module import syntax (for modern projects).

### CommonJS
```javascript 
const parseQuery = require('parse-query-string');
```

### ES Module
```javascript
import parseQuery from 'parse-query-string';
```

### Basic Example
``` javascript 
// Using the imported function
const path = '/api/data?id=100&is_active=true&sort=desc';
const result = parseQuery(path);

console.log(result);
/*
{
  id: 100,      // Coerced from "100" to Number
  is_active: true,  // Coerced from "true" to Boolean
  sort: 'desc'  // Remains String
}
*/
```

## Type Coercion Examples
| Query Value | Resulting Type | Coerced Value |
|---|---|---|
| 'true' | boolean | true |
| 'false' | boolean | false |
| '123' | number | 123 |
| '' (empty value, e.g., key=) | null | null |
| 'hello' | string | 'hello' |
Array Example (Repeated Keys)
If a key appears more than once, its value is automatically converted into an array.

```javascript 
const pathWithArrays = '/products?tag=new&tag=sale&tag=featured';
const resultWithArrays = parseQuery(pathWithArrays);

console.log(resultWithArrays);
/*
{
  tag: ['new', 'sale', 'featured']
}
*/
```

## Contributing & License
Feel free to open issues or submit pull requests if you find bugs or have suggestions for improvements.
License: MIT
