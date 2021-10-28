import './App.css';
import { Route, Switch } from 'react-router';
import LandingPage from './components/LandingPage/LandingPage';
import SearchBar from './components/SearchBar/SearchBar';
import Sort from './components/Sort/Sort';
import Videogames from './components/Videogames/Videogames';
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
          <SearchBar />
          <Sort />
          <Videogames />
        </Route>
        <Route exact path="/videogames/:idVideogame">
          <VideogameDetail />
        </Route>
        <Route exact path="/videogame">
          <AddVideogame/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
