const React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return (
//       <div>
//         It is {temp} in {location}.
//       </div>
//     );
//   }
// });

//var WeatherMessage = (props) => {
      //It is {props.temp} in {props.location}.
var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      It is {temp} in {location}.
    </div>
  );
};

module.exports = WeatherMessage;
