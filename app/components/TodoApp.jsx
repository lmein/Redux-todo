const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Wash car'
        }, {
          id: 2,
          text: 'Mow grass'
        }, {
          id: 3,
          text: 'Laundry'
        }, {
          id: 4,
          text: 'Shopping'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
