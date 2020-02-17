//import from npm
import React from 'react';

import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField : ''
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
    const { monsters, searchField } = this.state;
    const filteredMonseters =  monsters.filter(monster => 
                              monster.name.toLowerCase().includes(searchField.toLowerCase())); 
    
    return (
      <div className="App">
          {/* <input
              type = "search"
              placeholder = "search monster" 
              onChange = {(e) => {this.setState({ seachField : e.target.value });
              console.log(e.target)}}
            
          /> */}

        <SearchBox 
            placeholder = 'search monster'
            handleChange = {(e) => {this.setState({ searchField : e.target.value })}}
        />
        <CardList
            monsters = {filteredMonseters}
        />  
      </div> 
    );
  }
}

export default App;
