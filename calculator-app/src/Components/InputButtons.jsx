/* eslint-disable react/prop-types */
import SpecialButton from "./SpecialButton";
import Button from "./Button";

export default function InputButtons({ handleUpdate }) {
  const data = {}
  function handleOperand(operand) {
    console.log(operand);
    handleUpdate({ current: { ...(current) => current + operand } });
  }
  function handleOperator(operator) {
    console.log(operator);
  }
  function handleDelete() {}
  function handleReset() {}
  function handleEqual() {}
  return (
    <form className="text-3xl grid gap-3 grid-cols-4 bg-[#232c43] p-4 rounded-md">
      <Button value={7} onClick={() => handleOperand(7)} />
      <Button value={8} onClick={() => handleOperand(8)} />
      <Button value={9} onClick={() => handleOperand(9)} />
      <SpecialButton value="del" onClick={handleDelete} />

      <Button value={4} onClick={() => handleOperand(4)} />
      <Button value={5} onClick={() => handleOperand(5)} />
      <Button value={6} onClick={() => handleOperand(6)} />
      <Button value="+" onClick={() => handleOperator("+")} />

      <Button value={1} onClick={() => handleOperand(1)} />
      <Button value={2} onClick={() => handleOperand(2)} />
      <Button value={3} onClick={() => handleOperand(3)} />
      <Button value="-" onClick={() => handleOperator("-")} />

      <Button value="." onClick={() => handleOperand(".")} />
      <Button value={0} onClick={() => handleOperand(0)} />
      <Button value="/" onClick={() => handleOperator("/")} />
      <Button value="x" onClick={() => handleOperator("x")} />

      <SpecialButton value="reset" onClick={handleReset} more="col-span-2" />
      <button
        type="button"
        className="bg-[#d03f2f] text-[#eae3dc] border-b-[#93261a] border-b-4 col-span-2 rounded-md"
        onClick={() => handleEqual}
      >
        =
      </button>
    </form>
  );
}
