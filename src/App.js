import "./App.css";
import Header from "./components/Header";
import ButtonStorage from "./components/ButtonStorage";
import Message from "./components/Message";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const [state1, setColor1] = useState("off");
  const [state2, setColor2] = useState("off");
  const [state3, setColor3] = useState("off");

  return (
    <div className="App-container">
      <Header />
      <div className="main">
        <div className="div-button">
          <ButtonStorage
            switchButton={switch1}
            setSwitch={setSwitch1}
            state={state1}
            setColor={setColor1}
          />
          <ButtonStorage
            switchButton={switch2}
            setSwitch={setSwitch2}
            state={state2}
            setColor={setColor2}
          />
          <ButtonStorage
            switchButton={switch3}
            setSwitch={setSwitch3}
            state={state3}
            setColor={setColor3}
          />
        </div>
        <Message />
      </div>
      <Footer />
    </div>
  );
}

export default App;
