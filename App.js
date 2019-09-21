import CharacterCard from './CharacterCard';
import './App.css';
import React, { Component } from 'react';
import WordCard from './WordCard';
const word = "Hello";
class App extends Component {
  render(){
    return (
      <div>
        <WordCard value="react"/>
      </div>

    );
  }
}
export default App;