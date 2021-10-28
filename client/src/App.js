import './App.css';
import { Route, Switch } from 'react-router';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Sort from './components/Sort/Sort';
import Filter from './components/Filter/Filter';
import Videogames from './components/Videogames/Videogames';
import Pages from './components/Pages/Pages';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import AddVideogame from './components/AddVideogame/AddVideogame';

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
          <Pages />
        </Route>
        <Route exact path="/videogames/:idVideogame">
          <NavBar />
          <VideogameDetail />
        </Route>
        <Route exact path="/videogame">
          <NavBar />
          <AddVideogame/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
