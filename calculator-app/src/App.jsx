import { useState } from "react";
import InputButtons from "./Components/InputButtons";
import Navigation from "./Components/Navigation";
import ResultScreen from "./Components/ResultScreen";

export default function App() {
  const [values, setValues] = useState({
    currentValues: "0",
    previousValues: "0",
  });

  return (
    <main className="rounded-lg px-5 py-8 bg-[#3a4764] flex flex-col gap-4 w-11/12 md:w-[25rem]">
      <Navigation />
      <ResultScreen output={values} />
      <InputButtons />
    </main>
  );
}
