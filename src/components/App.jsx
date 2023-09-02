import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia"

function createCard(emojipedia){
  return(
    <Card 
      name = {emojipedia.name}
      emoji ={emojipedia.emoji}
      meaning ={emojipedia.meaning}
    />
  );
};


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
