var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });

// // Am I using an anonymous function? Then use arrow function.

// names.forEach((name) => {
//   console.log('arrowFunction', name);
// });

// names.forEach((name) => console.log('simpleArrowFunc', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Juliana'));

var person = {
  name: 'Juliana',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}
person.greet();

// Challenge Area

function add (a, b) {
  return a + b;
}
console.log(add(1, 3));
console.log(add(9, 0));

// addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(1, 3));
console.log(addStatement(9, 0));

// addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(1, 3));
console.log(addExpression(9, 0));
