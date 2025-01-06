/* eslint-disable react/prop-types */
export default function SpecialButton({ value, more, onClick }) {
  const theme = [
    "bg-[#637097] border-b-[#404e72] hover:text-[#404e72] text-[#eae3dc]",
  ];
  return (
    <button
      className={`${theme[0]} border-b-4 transition-all rounded-md p-2 ${
        more && more
      }`}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
