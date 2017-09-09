
// https://www.npmjs.com/package/tape
// https://medium.com/@andy.neale/unit-testing-javascript-applications-with-tape-1d4f5d5fc825
var test = require('tape');

test('timing test', function (t) {
    t.plan(2);

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

    setTimeout(function () {
        t.equal(Date.now() - start, 100);
    }, 100);
});
