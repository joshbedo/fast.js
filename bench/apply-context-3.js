var fast = require('../lib');

var input = [1,2,3];

var fn = function (a, b, c) {
  return a + b + c * Math.random() + this.foo;
};

exports['Function::apply()'] = function () {
  return fn.apply({foo: 1}, input);
};

exports['fast.apply()'] = function () {
  return fast.apply(fn, {foo: 1}, input);
};
