import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>
      <Route path="examples" component={Examples}></Route>
      <IndexRoute component={Weather}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);