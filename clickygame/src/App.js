import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';
import characters from "./characters.json";
import Navbar from "./components/Navbar";
import shuffle from "shuffle-array";

class App extends Component {
  // Setting this.state.characters to the friends json array
  state = {
    characters,
    score: 0,
    highScore: 0,
    feedback: "",
    userPicks: []
    
  };
 
 userPick = pick => {
   const tempUserPicks = [...this.state.userPicks]

   const isTwin = this.twinCheck(tempUserPicks, pick);

   if(!isTwin) {
     tempUserPicks.push(pick);
     this.setState({
       userPicks: tempUserPicks,
       score:this.state.score + 1,
       feedback: "Correct!"
     });
   } else {
     this.setState({
       userPicks: [],
       score: 0,
       feedback:"Game Over",
       highScore: 
        this.state.highScore >= this.state.score
        ? this.state.highScore
        : this.state.score
     })
   }
   shuffle(this.state.characters);
 };

twinCheck = (arr, item) => {
  //  Return true if there is a twin
  return arr.indexOf(item) !== -1 ? true : false;
};


  render() {
    return (
      
      <div>
        <Navbar
        score = {this.state.score }
        highScore = {this.state.highScore}
        feedback = {this.state.feedback}
        />
        <Wrapper>
        <Title>Don't click me twice</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            image={character.image}
            key = {character.name}
            // click = {this.click}
            // endGame = {this.endGame}
            // incrementScore = {this.incrementScore}
            name = {character.name}
            userPick = {this.userPick}
            
          />
        ))}
        </Wrapper> 
        </div>
      // 
    );
  }
}

export default App;
