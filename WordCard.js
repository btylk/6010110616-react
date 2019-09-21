import CharacterCard from './CharacterCard';
import './App.css';
import React, { Component } from 'react';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}
export default class WordCard extends
Component {
    constructor(props) {
        super(props)
        this.state = prepareStateFromWord(this.props.value)
        }
    activationHandler = c => {
        console.log(`${this.state.word}`)
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                let chars = _.shuffle(Array.from(this.state.word))
                this.setState({guess: [],chars : chars, attempt: this.state.attempt + 1})
            }
        }
    }
    render(){
        return(
            <div>
                { Array.from(this.state.chars).map((c,i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} attempt={this.state.attempt}/>)}
                <p>
                <div class="dropdown">
                <span><img src="https://cdn1.iconfinder.com/data/icons/business-487/48/2-512.png" height="142" width="142"></img></span>
                <div class="dropdown-content">
                <p>The word about title of this lab</p>
                </div>
                </div>
                </p>
                
            </div>

        );
    }
}