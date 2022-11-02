import { useState } from "react";

const ButtonStorage = ({ switchButton, setSwitch, state, setColor }) => {
  //console.log("switch ", switchButton);

  const handleClickOn = () => {
    setSwitch(true);
    setColor("on");
  };

  const handleClickOff = () => {
    setSwitch(false);
    setColor("off");
  };
  return (
    <div className="button-storage">
      <button className={state} onClick={handleClickOn}>
        ON
      </button>
      <button className={state} onClick={handleClickOff}>
        OFF
      </button>
    </div>
  );
};

export default ButtonStorage;
