import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsCont from './components/ItemDetailsCont/ItemDetailsCont';

function App() {
  return (

  <header className="headerPatriota">
    <div className="App">    
      <NavBar />
     <ItemListContainer greeting="Bienvenidos" />
      <ItemDetailsCont />
    </div>
    </header>
  );
}

export default App;
