import React from "react";

function Card(emojipedia){
    return(
      <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label={emojipedia.name}>
                {emojipedia.emoji}
              </span>
              <span>{emojipedia.name}</span>
            </dt>
            <dd>
              {emojipedia.meaning}
            </dd>
      </div>
    );
  };


export default Card;