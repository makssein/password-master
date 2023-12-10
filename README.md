## Installation

    $ npm install password-master -g

## Usage
#### `create([options])`

Create a password with options. The password string is returned.

```javascript
let PasswordMaster = require('generate-master');

let password = PasswordMaster.create({
   length: 20, //default: 10
   uppercase: true, //default: false
   numbers: true, //default: false
   symbols: true //default: false
});
//Creating without options will return a password with a length of 10 and only small characters.

// 'A/Xk_s3MR[Yr^#>V!BIe'
console.log(password);
```
