import React from "react";
import sprintsCardData from "../../Data/SprintsCardData";
import "./SprintsCard.css";
import "../../index.css"

const SprintsCard = () => {
  return (
    <div className="sprints_card_container">
      {sprintsCardData.map((card, i) => {
        return (
          <div key={i} className="sprints_card">
            <h2 className="card_text">{card.sprint_name}</h2>
            <h2 className="card_value">{card.sprint_value}</h2>
            <p className="card_note">{card.note}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SprintsCard;
