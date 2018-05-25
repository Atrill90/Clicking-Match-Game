import React, { Component } from 'react';
import "./CharacterCard.css";


class CharacterCard extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    count :0
  }
onClick = (event) => {
this.clickCheck();
this.props.shuffle();
}

  clickCheck = () => {
    this.setState({ count: this.state.count+ 1 });
    if (this.state.count ===1){
      this.props.endGame();
    }
  }

render() {
  return (
    <div className="card">
      <div className="img-container">
        <img  onClick={() => this.props.click(this.props.id)} className="clicked" alt={this.props.name} src={this.props.image} />
      </div>
    </div>
  );
}
}

  export default CharacterCard;