import React, { Component } from 'react';
import "./CharacterCard.css";
import shuffle from "shuffle-array";

const CharacterCard = (props) => {
  

  return (
    <div className="card">
      <div className="img-container">
        <img  onClick={() => props.userPick(props.id)} className="clicked" alt={props.name} src={props.image} />
      </div>
    </div>
  );


}

  export default CharacterCard;