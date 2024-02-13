import { useState } from "react";
import Hero from "./components/Hero";
import Place from "./components/Place";

export default function App() {
  const [yes, setYes] = useState(false);

  const handleYes = () => {
    setYes(true);
  };

  return (
    <div className={`${yes ? "overflow-auto" : "overflow-hidden"}`}>
      <Hero yes={yes} handleYes={handleYes} />
      <Place />
    </div>
  );
}
