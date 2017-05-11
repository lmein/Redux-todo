const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
// const Route = require('react-router').Route;
// const Router = require('react-router').Router;
// const IndexRoute = require('react-router').IndexRoute;
// const hashHistory = require('react-router').hashHistory;
// weather api key: df7e3c98ca0017fe242189315a17b64e
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route exact path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
