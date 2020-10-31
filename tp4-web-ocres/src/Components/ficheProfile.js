import React from 'react';
import './ficheProfile.css';
import Moment from 'moment';

class FicheProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {style: "#ffde75"};
      }

      backgroundColors= ["#ffde75",
                         "#40826d",
                         "#ffe4c4",];

      getStyle = () => {
        var newStyle = "";
        do{
            newStyle = this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)];
        }while(newStyle === this.state.style)
        this.setState({
            style : newStyle
        });
      }

      render(){
        return (
            <div className="texte" style={{backgroundColor: this.state.style}}>
                <div>
                  <img className="affichage" src={this.props.profil.image}/>
                </div>
                <div className="identite">
                  <p>Prénom : {this.props.profil.prenom}</p>
                  <p>Nom : {this.props.profil.nom}</p>
                </div>
                <p className="date">Date de naissance : {this.props.profil.date}</p>
                <button className="boutons" onClick={this.getStyle}>Change style</button>
            </div>
          );
      }
    }

export default FicheProfile;
