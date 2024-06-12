import { useState } from "react";
import { MultipleFileComponent } from "./components/MultipleFileComponent";
import { FileDroperComponent } from "./components/FileDroperComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 id="titulo-principal">Corrector de Tramas</h1>
      </div>
      <MultipleFileComponent />
      {/* <FileDroperComponent /> */}
    </>
  );
}

export default App;
