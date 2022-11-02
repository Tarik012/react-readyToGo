const ResetButton = ({ resetBtn1, resetBtn2, resetBtn3 }) => {
  const handleClick = () => {
    resetBtn1(false);
    resetBtn2(false);
    resetBtn3(false);
  };
  return (
    <button className="btn-reset" onClick={handleClick}>
      Reset
    </button>
  );
};

export default ResetButton;
