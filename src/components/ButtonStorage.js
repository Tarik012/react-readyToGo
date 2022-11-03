import { useState } from "react";

const ButtonStorage = ({ switchButton, setSwitch }) => {
  //console.log("switch ", switchButton);

  const handleClick = (etat) => {
    setSwitch(etat);
  };

  return (
    <div className="button-storage">
      <button
        className={switchButton === false ? "on" : "off"}
        onClick={() => {
          handleClick(true);
        }}
      >
        ON
      </button>
      <button
        className={switchButton === false ? "off" : "on"}
        onClick={() => {
          handleClick(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default ButtonStorage;
