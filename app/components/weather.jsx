const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');
const ErrorModal = require('ErrorModal');

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

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
      // alert(errorMessage);
    })
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, location, temp, errorMessage} = this.state;

    //debugger;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    // debugger;

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
