import { useState } from "react";
import { Tela1 } from "./pages/Tela1";
import { Tela2 } from "./pages/Tela2";
import "./styles.css";

export default function App() {
  const [tela, setTela] = useState(1);

  const trocarDeTela = (tela) => setTela(tela);

  switch (tela) {
    case 1:
      return (
        <div className="App">
          <Tela1 />
          <button onClick={() => trocarDeTela(2)}>Ir para tela 2</button>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <Tela2 />
          <button onClick={() => trocarDeTela(1)}>Ir para tela 1</button>
        </div>
      );
    default:
      return "Página não encontrada";
  }
}
