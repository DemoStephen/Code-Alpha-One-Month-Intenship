import { useState } from "react";
import InputButtons from "./Components/InputButtons";
import Navigation from "./Components/Navigation";
import ResultScreen from "./Components/ResultScreen";

export default function App() {
  const [values, setValues] = useState({
    currentValues: "0",
    previousValues: "0",
  });
  function handleValues(newValue) {
    setValues(newValue);
  }
  return (
    <main>
      <Navigation />
      <ResultScreen output={values} />
      <InputButtons handleValues={handleValues} />
    </main>
  );
}
