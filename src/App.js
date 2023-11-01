import logo from './logo.svg';
import './App.css';
import './components/Container';
import './ComponentStyles.css'
import Container from './components/Container';
import DisplayDetails from './components/DisplayDetail';
import SearchComponent from './components/SearchPokemon';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container></Container>}></Route>
        <Route path='pokemonDetails/:id' element={<DisplayDetails/>}></Route>
        <Route path='pokemonSearch/' element={<SearchComponent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
