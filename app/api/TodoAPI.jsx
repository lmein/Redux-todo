var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    //this uses jquery to check to see if todos is an array
    if ($.isArray(todos)) {
      //JSON.stringify will take object and convert as localstorage can only store strings.
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    //ternary version of the following if/else
    return $.isArray(todos) ? todos : [];

    // if ($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
  }
};
