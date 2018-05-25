import React, { Component } from 'react';
import "./CharacterCard.css";
import shuffle from "shuffle-array";

class CharacterCard extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    count: 1
  } 
onClick = (event) => {
this.setState({ count: this.state.count + 1 });
this.clickCheck();
shuffle(this.props.characters);

}

  clickCheck = () => {
    
    if (this.state.count > 1){
      this.props.endGame();
    }else {
      this.props.incrementScore();
    }

  }

render() {
  return (
    <div className="card">
      <div className="img-container">
        <img  onClick={() => this.onClick(this.props.id)} className="clicked" alt={this.props.name} src={this.props.image} />
      </div>
    </div>
  );
}
}

  export default CharacterCard;