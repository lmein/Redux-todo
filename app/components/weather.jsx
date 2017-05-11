const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    // return {
    //   location: 'Houston',
    //   temp: 95
    // }
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    // this.setState({
    //   location: location,
    //   temp: 68
    // });
    //this is unusable in getTemp, so set to that prior to calling it to have access to it.
    var that = this;

    //forces a pause when dev tools are open.
    //debugger;

    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    })
  },
  render: function () {
    var {isLoading, location, temp} = this.state;

    //debugger;
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
