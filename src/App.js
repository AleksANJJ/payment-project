import React, { useState } from "react";
import StripeContainer from "./Stripe/StripeContainer";
import dress from "./dress.jpg";
const App = () => {
  const [showMyImage, setShowMyImage] = useState(false);
  return (
    <div className="App">
      {showMyImage ? <StripeContainer /> :
      <div>
        <h4>DressShop</h4>
        <h6>$120.50</h6>
        <img src={dress} width="250px" alt="foto"/>
        <div>
          <button onClick={() => setShowMyImage(true)}>Buy some dress</button>
        </div>
      </div> }
     
    </div>
  );
};

export default App;