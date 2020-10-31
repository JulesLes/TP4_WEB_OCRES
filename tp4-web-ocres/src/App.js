import React from 'react';
import './App.css';
import Boutons from './Components/boutons';
import FicheProfile from './Components/ficheProfile';
import Csuper from './Components/cSuper';
import CDG from './images/CDG.jpg';
import JD from './images/JD.jpg';
import NB from './images/NB.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
  }

  profils = [
        {
          prenom: 'Napoleon',
          nom: 'Bonaparte',
          date: '1804',
          image: NB
        },
        {
          prenom: 'Jeanne',
          nom: 'Darc',
          date: '1412',
          image: JD
        },
        {
          prenom: 'Charles',
          nom: 'De Gaulle',
          date:'1959',
          image: CDG
        }
        ];

  handleClick = (newNum) => {
    this.setState({
      num: newNum
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="Btn">
            {this.profils.map((profil,num) => <Boutons name= {profil.nom} i= {num} clickHandler={this.handleClick} />)}
          </div>
        </header>
        <FicheProfile profil={this.profils[this.state.num]} />
        <Csuper/>
    </div>
    );
  }
}

export default App;
