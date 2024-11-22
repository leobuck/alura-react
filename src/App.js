import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionarColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoCadastrar={(colaborador) => aoAdicionarColaborador(colaborador)}
      />
    </div>
  );
}

export default App;
