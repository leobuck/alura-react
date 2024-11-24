import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";

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
      <Time nome="Programação" />
      <Time nome="Front-end" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
