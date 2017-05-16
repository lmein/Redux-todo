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
  it('Should properly run tests.', () => {
    expect(TodoApp).toExist();
  });
});
