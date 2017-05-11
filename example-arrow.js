var names = ['Tom', 'Dick', 'Harry'];

names.forEach(function (name) {
  console.log('forEach: ', name);
});

//to use arrow functions, need to be using anonymous functions.
//anonymous functions are declared at run time and do not have a name.
names.forEach((name) => {
  console.log('Arrow: ', name);
});

//for single lines, you can eliminate the curly braces.
names.forEach((name) => console.log('Arrow 2: ', name));

var returnMe = (name) => name + '!';

console.log(returnMe('Joe'));

//anonymous functions have a this binding.  Arrow functions take on their parent binding.

var person = {
  name: 'Jane',
  greet: function () {
    //names.forEach(function (name) {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();
