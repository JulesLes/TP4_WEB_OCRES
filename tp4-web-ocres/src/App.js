import React from 'react';
import './App.css';
import Boutons from './Components/boutons';
import FicheProfile from './Components/ficheProfile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
  }

  profils = [
        {
          prenom: 'Napoleon',
          nom: 'Bonaparte',
          date: new Date('1804').toLocaleString(),
          image: 'NB.jpg'
        },
        {
          prenom: 'Jeanne',
          nom: 'Darc',
          date: new Date('1412').toLocaleString(),
          image: 'JD.jpg'
        },
        {
          prenom: 'Charles',
          nom: 'De Gaulle',
          date: new Date('1959').toLocaleString(),
          image: 'CDG.jpg'
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
    </div>
    );
  }
}

export default App;
