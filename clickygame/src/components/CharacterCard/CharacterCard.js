import React from "react";
import "./CharacterCard.css";
import shuffle from "shuffle-array";

const CharacterCard = props => (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.click(props.id)} className="clicked">
      </span>
    </div>
  );
  
  export default CharacterCard;