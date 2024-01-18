'use strict'
// var global = this
let a = 'Hi';
var b = 'Mom';
var c = '!';

this.greeting = a + ' ' + b + c;
console.log(this)
var bar = 'Hey'

function foo(x) {
    // console.dir(global)
    let bar = 'Sup';
    var baz = 'Hey';

    function greet() {
        console.log(bar)
    }

    greet();
}

foo();