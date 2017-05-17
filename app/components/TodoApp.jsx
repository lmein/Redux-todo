const React = require('react');
const Uuid = require('node-uuid');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
      // todos: [
      //   {
      //     id: Uuid(),
      //     text: 'Wash car',
      //     completed: false
      //   }, {
      //     id: Uuid(),
      //     text: 'Mow grass',
      //     completed: true
      //   }, {
      //     id: Uuid(),
      //     text: 'Laundry',
      //     completed: false
      //   }, {
      //     id: Uuid(),
      //     text: 'Shopping',
      //     completed: true
      //   }
      // ]
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Uuid(),
          text: text,
          completed: false
        }
      ]
    });
    // alert('new todo: ' + text);
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
    //alert('Toggle: ' + id);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
