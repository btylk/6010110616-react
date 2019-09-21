import CharacterCard from './CharacterCard';
import './App.css';
import React, { Component } from 'react';
import WordCard from './WordCard';
var vocab = ["react","chocolatey","yarn"]
let randomIndex = parseInt(Math.random() * 3)
class App extends Component {
  render(){
    return (
      <div className="App">
        <WordCard value={vocab[randomIndex]}/>
      </div>
    );
  }
}
export default App;