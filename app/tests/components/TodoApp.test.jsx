//the following are the libraries needed for testing.
const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

//the following is the component we want to test.
const TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('Should exist.', () => {
    expect(TodoApp).toExist();
  });

  it('Should add todo to the todos state on handleAddTodo.', () => {
    var todoText = 'Dummy test item 1';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('Should toggle completed value when handleToggle called.', () => {
    var todoData = {
      id: 1,
      text: 'Dummy test item 1',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
