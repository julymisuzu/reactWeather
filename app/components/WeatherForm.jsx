import React from 'react';

const WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="medium-12 cell">
                <input type="search" ref="location" placeholder="Search Weather by City" />
              </div>
              <div className="medium-12 cell">
                <button className="button hollow expanded">Get Weather</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;