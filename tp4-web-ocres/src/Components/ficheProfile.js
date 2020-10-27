import React from 'react';
import './ficheProfile.css';

class FicheProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {style: "blue"};
      }

      backgroundColors= ["blue",
                         "grey",
                         "red",];

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
                  <img src="CDG.jpg" fluid alt=''/>
                </div>
                <p>{this.props.profil.prenom}</p>
                <p>{this.props.profil.nom}</p>
                <p>{this.props.profil.date}</p>
                <button className="boutons" onClick={this.getStyle}>Change style</button>
            </div>
        );
    }
}

export default FicheProfile;
