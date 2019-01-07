import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    const location = this.refs.navSearch.value;
    const encodedLocation = encodeURIComponent(location);

    if(location && location.length > 0) {
      this.refs.navSearch.value = '';
      window.location.hash = '#/?location='+encodedLocation;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <IndexLink to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
            </li>
            <li>
              <IndexLink to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="navSearch" placeholder="Search Weather by City" /></li>
              <li><input type="submit" className="button" value="Get Weather" /></li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Nav;