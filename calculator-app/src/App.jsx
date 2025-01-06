import { useState } from "react";
import InputButtons from "./Components/InputButtons";
import Navigation from "./Components/Navigation";
import ResultScreen from "./Components/ResultScreen";

export default function App() {
  const [values, setValues] = useState({
    current: "",
    previous: "",
    operator: undefined,
  });
  function updateScreen({ current, previous, operator }) {
    if (operator)
      setValues((prev) => ({
        ...prev,
        current: current,
        previous: previous,
      }));
    else {
      setValues((prev) => ({
        ...prev,
        current: current,
        previous: "",
      }));
    }
  }
  return (
    <main className="rounded-lg px-5 py-8 bg-[#3a4764] flex flex-col gap-4 w-11/12 sm:w-[25rem]">
      <Navigation />
      <ResultScreen output={values} />
      <InputButtons handleUpdate={updateScreen} />
    </main>
  );
}
