//the following are the libraries needed for testing.
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

//the following is the component we want to test.
const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  //the following cleans out localStorage prior to each test.
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exist.', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('Should set valid todos array.', () => {
      var todos = [{
        id: 1,
        text: 'Dummy test item 1',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      //use toEqual with objects and arrays and toBe for others
      expect(actualTodos).toEqual(todos);
    });

    it('Should not set invalid todos array.', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', () => {
    it('Should return an empty array for bad localStorage data.', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('Should return todo if a valid array is in localStorage.', () => {
      var todos = [{
        id: 1,
        text: 'Dummy test item 1',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
});
