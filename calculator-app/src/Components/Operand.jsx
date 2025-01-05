/* eslint-disable react/prop-types */
export default function Operand({ value, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}
