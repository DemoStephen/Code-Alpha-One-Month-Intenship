/* eslint-disable react/prop-types */
export default function Theme({ label }) {
  return (
    <label htmlFor={`theme-${label}`}>
      <input type="radio" name="theme" id={`theme-${label}`} />
      <span>{label}</span>
    </label>
  );
}
