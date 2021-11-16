import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="nav">
        <h1>
          San Diego
        </h1>
        <ul>
          <Link to="/areas">
          <li>Areas</li>
          </Link>
          <li>Restaurants</li>
        </ul>
      </div>
    )
  }

}

export default Nav;