/* eslint-disable react/prop-types */
export default function SpecialButton({ value, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}
