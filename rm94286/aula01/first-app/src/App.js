import './App.css';
import ListaAluno from './components/ListaAluno';
import imagem from './img/imagem.png';

function App() {

  const aluno = 'Leonardo Ramos';
  const curso = 'ADS';
  return (
    <>
      <h1>TDS FIAP - RWD</h1>
      <img src={imagem} width="100px" alt="Logo React" />
      <p>Aluno: {aluno}</p>
      <p>Curso: {curso}</p>
      <ListaAluno />
    </>
  );
}

export default App;
