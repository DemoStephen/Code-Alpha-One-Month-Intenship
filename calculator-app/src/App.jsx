import { useState } from "react";
import InputButtons from "./Components/InputButtons";
import Navigation from "./Components/Navigation";
import ResultScreen from "./Components/ResultScreen";

export default function App() {
  const [values, setValues] = useState({
    current: "0",
    previous: "0",
    operator: undefined,
  });
  function updateScreen(data) {
    if (data.operator)
      setValues((prev) => ({
        ...prev,
        current: data.current,
        previous: data.previous,
      }));
    else {
      setValues((prev) => ({
        ...prev,
        current: data.current,
        previous: "",
      }));
    }
  }
  return (
    <main className="rounded-lg px-5 py-8 bg-[#3a4764] flex flex-col gap-4 w-11/12 sm:w-[25rem]">
      <Navigation />
      <ResultScreen output={values} />
      <InputButtons handleUpdate={updateScreen} values={values} />
    </main>
  );
}
