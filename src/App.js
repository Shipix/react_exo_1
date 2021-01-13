import './App.css';
import Test from './Test.js'
import Testa from './Test2.js'

const name = prompt("votre nom ?");
const age = prompt("votre age ?");
const lorem = <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.</p>

function App() {
  

  return (


    <div className="App">
      <h1>Mon h1</h1>
      <h1>Notre composant</h1>
      <p>Votre nom: {name}</p>
      <p>Votre age: {age}</p>
      {lorem}
      <Test />
      <Testa />
    </div>
  );
}

export default App;
