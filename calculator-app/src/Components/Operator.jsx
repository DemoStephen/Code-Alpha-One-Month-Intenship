/* eslint-disable react/prop-types */
export default function Operator({ value, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}
