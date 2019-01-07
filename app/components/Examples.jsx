import React from 'react';
import {Link} from 'react-router';

// stateless function 
const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Canoas'>Canoas, RS</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brasil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;