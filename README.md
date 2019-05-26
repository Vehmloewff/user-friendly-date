# user-friendly-date
Shows the amount of time between two dates in a user-fiendly way.

## Usage
Install the package...
```shell
$ npm i user-friendly-date --save
```
...then...
```js
const userFriendlyDate = require('user-friendly-date'); // or import userFriendlyDate from 'user-friendly-date

userFriendlyDate(new Date().getTime())
// -> Just now

userFriendlyDate(new Date().getTime() - 5000) // five seconds ago
// -> Five seconds ago

userFriendlyDate(new Date().getTime() - 1000 * 60 * 60 * 24) // the day before yesterday
// -> About 2 days ago
```

Hope this package helps you!

Found a bug?  [Open an issue](https://github.com/Vehmloewff/user-friendly-date/issues/new), or ping me on Discord: Vehmloewff#0714.