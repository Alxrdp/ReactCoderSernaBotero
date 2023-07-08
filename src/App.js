import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
  <header className="headerPatriota">
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
    </header>
  );
}

export default App;
