import React from 'react';
import './boutons.css';

class Boutons extends React.Component {
  render(){
    return (
      <button className="boutons" onClick={() => this.props.clickHandler(this.props.i)}>
        <p>{this.props.name}</p>
      </button>
    );
  }
}

export default Boutons;
