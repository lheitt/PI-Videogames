import './App.css';
import { Route, Switch } from 'react-router';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Sort from './components/Sort/Sort';
import Filter from './components/Filter/Filter';
import Videogames from './components/Videogames/Videogames';
import Pagination from './components/Pagination/Pagination';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import AddVideogame from './components/AddVideogame/AddVideogame';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">    
          <LandingPage />
        </Route>
        <Route exact path="/videogames">
          <NavBar />
          <SearchBar />
          <Sort />
          <Filter />
          <Videogames />
          <Pagination />
        </Route>
        <Route exact path="/videogames/:idVideogame">
          <NavBar />
          <VideogameDetail />
        </Route>
        <Route exact path="/videogame">
          <NavBar />
          <AddVideogame/>
        </Route>
        <Route exact path="/about">
          <NavBar />
          <About/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
