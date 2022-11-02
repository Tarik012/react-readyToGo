import { useState } from "react";

const ButtonStorage = ({ switchButton, setSwitch }) => {
  //console.log("switch ", switchButton);

  const handleClickOn = () => {
    setSwitch(true);
  };

  const handleClickOff = () => {
    setSwitch(false);
  };
  return (
    <div className="button-storage">
      <button className={!switchButton ? "on" : "off"} onClick={handleClickOn}>
        ON
      </button>
      <button className={switchButton ? "on" : "off"} onClick={handleClickOff}>
        OFF
      </button>
    </div>
  );
};

export default ButtonStorage;
