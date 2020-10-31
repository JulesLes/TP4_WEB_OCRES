import React from 'react';

class Csuper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
        this.setState({
          count: this.state.count + 1
        });
  };

  render(){
      return (
        <div>
          <button className='inc' onClick={(e) => this.increment(e)}>C'est Super 👍</button>
            <h1>Nombre de Like : {this.state.count}</h1>
        </div>
      );
  }
};
export default Csuper;
