import React from 'react';

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
          <li>Areas</li>
          <li>Restaurants</li>
        </ul>
      </div>
    )
  }

}

export default Nav;