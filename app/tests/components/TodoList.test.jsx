//the following are the libraries needed for testing.
const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

//the following is the component we want to test.
const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
  it('Should exist.', () => {
    expect(TodoList).toExist();
  });

  it('Should render one Todo component for each todo item.', () =>{
    var todos = [{
      id: 1,
      text: 'Dummy test item 1'
    }, {
      id: 2,
      text: 'Dummy test item 2'
    }, {
      id: 3,
      text: 'Dummy test item 3'
    }];
    //the following will pass the test data into the component.
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    //the following checks to see how many components were rendered (todo items)
    //the scry.. checks to see how many components are rendered under a component.
    //the first arguement is what you want to check, the second is the class to check for.
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
