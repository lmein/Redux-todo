const React = require('react');
const Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        //key= is needed for react to render multiple todos so it can uniquely id each one.
        //... = spread opeator.  ...todo makes each property in todo into an individual prop.
        return (
          <Todo key={todo.id} {...todo}/>
        )
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
