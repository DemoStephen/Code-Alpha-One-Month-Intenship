/* eslint-disable react/prop-types */
export default function ResultScreen({ output }) {
  return (
    <section className="text-end bg-[#182034] text-white p-4 rounded-md">
      <p className="text-xl">{output.previous}</p>
      <h3 className="text-5xl flex justify-between">
        <sup className="text-xs">{output.current && "Ans"}</sup>
        <span>{output.current}</span>
      </h3>
    </section>
  );
}
