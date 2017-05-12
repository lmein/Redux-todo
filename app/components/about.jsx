const React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//         <h3>About</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This was done as part of training for learning react and is rather simplistic but has been a good way to learn the framework.</p>
    </div>
  );
};

module.exports = About;
