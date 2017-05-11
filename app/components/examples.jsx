const React = require('react');
const {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function () {
//     return (
//         <h3>Examples</h3>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Miami'>Miami, FL</Link>
        </li>
        <li>
          <Link to='/?location=Anchorage'>Anchorage, AK</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
