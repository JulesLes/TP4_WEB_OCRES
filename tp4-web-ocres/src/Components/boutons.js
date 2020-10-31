import React from 'react';
import './boutons.css';

class Boutons extends React.Component {
  render(){
    return (
      <div>
        <button className="boutons" onClick={() => this.props.clickHandler(this.props.i)}>
          <p>{this.props.name}</p>
        </button>
      </div>
    );
  }
}

export default Boutons;
