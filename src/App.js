import React, { useReducer } from "react";
import "./style.css";

let containerStyle = {
  width: "90%",
  height: "70vh",
  border: "2px solid grey",
  margin: "2% auto",
  borderRadius: "20px",
  display: "grid",
  placeItems: "center",
  backgroundColor: "#fcfcfc"
}
let backgroundColor="#fcfcfc";

const colors = ["#fcfcfc","#F5F4F5","#f5f7f6","#d2d4d2","#909190","#727372","#474747"]

const reducer = (state, action) => {
  switch (action.type)
  {
    case "increase":
      if (state < colors.length-1)
      {
        state = state + 1;
        backgroundColor = colors[state];
      }
      else{
        alert("darkest mode");
      }
      return state;
    case "decrease":
      if(state>0)
      {
        
        state = state - 1;
    
        backgroundColor = colors[state];
        
      }
      else{
      
        alert("lightest mode")
      }  
      return state;
    default:
      return state;
  }
}
function App() {
  
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <div className="container" style={{...containerStyle,backgroundColor}}>
      <div id="controls">
        <i class="fa-solid fa-minus" onClick={() => dispatch({ type: "decrease" })}></i>
        <i class="fa-solid fa-plus" onClick={() => dispatch({ type: "increase" })}></i>

      </div>
    </div>
  )
}

export default App;
