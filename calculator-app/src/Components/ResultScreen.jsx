/* eslint-disable react/prop-types */
export default function ResultScreen({ output }) {
  return (
    <section>
      <p>{output.currentValues}</p>
      <h3>{output.previousValues}</h3>
    </section>
  );
}
