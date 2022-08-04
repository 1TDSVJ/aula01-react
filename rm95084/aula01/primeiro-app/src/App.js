import "./App.css";
import ListaAluno from "./components/ListaAlunos";

const App = () => {
  return (
    <div className="App">
      <h1>TDS FIAP - RWD</h1>
      <p>Alunos:</p>
      <p>Curso:</p>
      <ListaAluno />
    </div>
  );
};

export default App;
