const React = require('react');
const Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do.</p>
        );
      }
      return todos.map((todo) => {
        //key= is needed for react to render multiple todos so it can uniquely id each one.
        //... = spread opeator.  ...todo makes each property in todo into an individual prop.
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
