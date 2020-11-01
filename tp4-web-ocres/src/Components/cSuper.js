import React from 'react';
import './cSuper.css';

class Csuper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countNb: 0,
      countCdg:0,
      countJd:0
    };
  }

  increment() {
    let profil = this.props.profil;
    if (profil == 0) {
      this.setState({
        countNb: this.state.countNb + 1
      });
    }
    else if (profil == 1) {
      this.setState({
        countCdg: this.state.countCdg+ 1
      });
    }
    else if (profil == 2) {
      this.setState({
        countJd: this.state.countJd + 1
      });
    }
  };

  afficher(profil){
    if (profil == 0) {
      return <p> {this.state.countNb} </p>;
    }

    else if (profil == 1) {
      return <p> {this.state.countCdg} </p>;
    }
    else if (profil == 2) {
      return <p> {this.state.countJd} </p>;
    }
    else {
      return <h1>erreure</h1>
    }
  };

  render(){
      return (
        <div className='fond'>
          <button className='inc1' onClick={() => this.increment()}>C'est Super 👍</button>
            <h1 className='inc'>Like :{this.afficher(this.props.profil)}</h1>
        </div>
      );
  }
};
export default Csuper;
