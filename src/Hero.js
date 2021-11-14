import React from 'react';
import LaJolla from './lajolla.jpg';
import starlite from './starlite.jpg';

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
        <img src={LaJolla}></img>
        <img src={starlite}></img>
      </div>
    )
  }
}

export default Hero;