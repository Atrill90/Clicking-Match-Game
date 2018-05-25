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
    score: 0
  };
 incrementScore = () => {
   console.log("Score:,",this.state.score);
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };
  endGame =() => {
    console.log("game over");
  }
  

  click = () => {
    console.log("a click happened");
    this.incrementScore();
    shuffle(this.state.characters);
  }
  

  render() {
    return (
      
      <div>
        <Navbar/>
        <Wrapper>
        <Title>League Character List</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            image={character.image}
            key = {character.name}
            click = {this.click}
            endGame = {this.endGame}
            incrementScore = {this.incrementScore}
          />
        ))}
        </Wrapper> 
        </div>
      // 
    );
  }
}

export default App;
