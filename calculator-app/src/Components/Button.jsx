/* eslint-disable react/prop-types */
export default function Button({ value, onClick }) {
  return (
    <button
      className="rounded-md bg-[#eae3dc] border-b-4 hover:text-[#b4a597] border-b-[#b4a597] text-[#3a4764] p-2"
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
