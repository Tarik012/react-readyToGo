import "./App.css";
import Header from "./components/Header";
import ButtonStorage from "./components/ButtonStorage";
import Message from "./components/Message";
import MessageGo from "./components/MessageGo";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App-container">
      <Header />
      <div className="main">
        <div className="div-button">
          <ButtonStorage switchButton={switch1} setSwitch={setSwitch1} />
          <ButtonStorage switchButton={switch2} setSwitch={setSwitch2} />
          <ButtonStorage switchButton={switch3} setSwitch={setSwitch3} />
        </div>
        {switch1 === true && switch2 === true && switch3 === true ? (
          <MessageGo />
        ) : (
          <Message />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
