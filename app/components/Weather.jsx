import React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';

import openWeatherMap from 'openWeatherMap';

const Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      errorMessage: undefined
    };
  },
  handleSearch: function(location) {

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    
    openWeatherMap.getTemp(location).then((tempData) => {
      console.log('promise ok');
      this.setState({
        location: location,
        temp: tempData,
        isLoading: false
      })
    }, (e) => {
      console.log('promise error');
      this.setState({
        isLoading: false,
        errorMessage: e.message
      })
    });
  },
  componentDidMount: function() {
    const location = this.props.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  // built-in function
  // it will be called everytime a component props is updated
  componentWillReceiveProps: function(newProps) {
    const location = newProps.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function() {
    const {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage location={location} temperature={temp} />
      }
    }

    function renderError () {
      console.log('renderError');
      if(typeof errorMessage === 'string') {
        console.log('renderError com string');
        return (<ErrorModal message={errorMessage} />)
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;