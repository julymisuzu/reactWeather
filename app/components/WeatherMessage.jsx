import React from 'react';

const WeatherMessage = ({temperature, location}) => {
  return (
    <div>
      <h3 className="text-center">It's it {temperature}º in {location}.</h3>
    </div>
  )
};

module.exports = WeatherMessage;