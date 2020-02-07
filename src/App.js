//import from npm
import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
    }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => {
              console.log("users   : ",users)
              this.setState({ monsters : users})
           })
  }

  render() {
    console.log("this.state.monsters   :  ",this.state.monsters)
    return (
      <div className="App">
          {this.state.monsters.map(monster => (
              <h1 key = {monster.id}>{ monster.name }</h1>
          ))}
      </div> 
    );
  }
}

export default App;
