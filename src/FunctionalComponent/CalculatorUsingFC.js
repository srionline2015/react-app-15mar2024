// App.js
import React, { useState } from "react";

function CalculatorUsingFC() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumberOneChange = (event) => {
    setNumberOne(event.target.value);
  };

  const handleNumberTwoChange = (event) => {
    setNumberTwo(event.target.value);
  };

  const handleCalculate = () => {
    setResult(eval(numberOne + numberTwo));
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={numberOne}
        onChange={handleNumberOneChange}
      />
      <input
        type="number"
        value={numberTwo}
        onChange={handleNumberTwoChange}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default CalculatorUsingFC;