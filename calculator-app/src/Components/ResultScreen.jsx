/* eslint-disable react/prop-types */
export default function ResultScreen({ output }) {
  return (
    <section className="text-end bg-[#182034] text-white p-4 rounded-md">
      <p className="text-xl">{output.currentValues}</p>
      <h3 className="text-5xl">{output.previousValues}</h3>
    </section>
  );
}
