/* eslint-disable react/prop-types */
import { useState } from "react";
import Operand from "./Operand";
import Operator from "./Operator";
import SpecialButton from "./SpecialButton";

export default function InputButtons({ handleValues }) {
  const [newValue, setNewValue] = useState();

  function handleOperand(operand) {
    setNewValue((prev) => ({
      ...prev,
      currentValues: `${newValue.currentValues}${operand} `,
    }));
    console.log(operand);
    handleValues(newValue);
  }
  function handleOperator(operator) {
    console.log(operator);
  }
  function handleDelete() {}
  function handleReset() {}
  function handleEqual() {}
  return (
    <form>
      <Operand value={7} onClick={() => handleOperand(7)} />
      <Operand value={8} onClick={() => handleOperand(8)} />
      <Operand value={9} onClick={() => handleOperand(9)} />
      <SpecialButton value="del" onClick={handleDelete} />

      <Operand value={4} onClick={() => handleOperand(4)} />
      <Operand value={5} onClick={() => handleOperand(5)} />
      <Operand value={6} onClick={() => handleOperand(6)} />
      <Operator value="+" onClick={() => handleOperator("+")} />

      <Operand value={1} onClick={() => handleOperand(1)} />
      <Operand value={2} onClick={() => handleOperand(2)} />
      <Operand value={3} onClick={() => handleOperand(3)} />
      <Operator value="-" onClick={() => handleOperator("-")} />

      <Operand value="." onClick={() => handleOperand(".")} />
      <Operand value={0} onClick={() => handleOperand(0)} />
      <Operator value="/" onClick={() => handleOperator("/")} />
      <Operator value="X" onClick={() => handleOperator("X")} />

      <SpecialButton value="reset" onClick={handleReset} />
      <button onClick={() => handleEqual}>=</button>
    </form>
  );
}
