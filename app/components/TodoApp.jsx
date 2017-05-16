const React = require('react');
const TodoList = require('TodoList');

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
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
