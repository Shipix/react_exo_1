import './App.css';

const name = prompt("votre nom ?");
const age = prompt("votre age ?");

function App() {
  

  return (


    <div className="App">
      <h1>Mon h1</h1>
      <h1>Notre composant</h1>
      <p>Votre nom: {name}</p>
      <p>Votre age: {age}</p>
    </div>
  );
}

export default App;
