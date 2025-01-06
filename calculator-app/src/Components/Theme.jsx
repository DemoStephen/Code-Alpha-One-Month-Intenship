/* eslint-disable react/prop-types */
export default function Theme({ label }) {
  return (
    <label htmlFor={`theme-${label}`} className="cursor-pointer">
      <input
        type="radio"
        name="theme"
        id={`theme-${label}`}
        className="hidden peer"
        defaultChecked={label === 1}
      />
      <span className="w-3 h-3 peer-checked:bg-[#d03f2f] rounded-full flex text-[0.55rem] items-center content-center justify-center group">
        <span className="hidden group-hover:block">{label}</span>
      </span>
    </label>
  );
}
