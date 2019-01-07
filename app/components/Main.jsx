import React from 'react';

import Nav from 'Nav';

// stateless function 
const Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  )
};

module.exports = Main;