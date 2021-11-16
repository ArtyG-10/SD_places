import React from 'react';
import LaJolla from './assets/lajolla.jpg';
import starlite from './assets/starlite.jpg';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
    }
  }

  render() {
    return (
      <div className="hero">
        <h1>Explore All There Is...</h1>
        <div className="heroImages">
        <img src={LaJolla}></img>
        <img src={starlite}></img>
        </div>
      </div>
    )
  }
}

export default Hero;