import './App.css';
import { Route, Switch } from 'react-router';
import LandingPage from './containers/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Sort from './components/Sort/Sort';
import Filter from './components/Filter/Filter';
import Videogames from './containers/Videogames/Videogames';
import VideogameDetail from './containers/VideogameDetail/VideogameDetail';
import AddVideogame from './containers/AddVideogame/AddVideogame';
import About from './containers/About/About';

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
