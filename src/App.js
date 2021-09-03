import "./App.css";
import FooterC from "./Components/Footer/Footer";
import { moviesData } from "./Constantes/MoviesData";
import MovieList from "./Components/Movies/MovieList";
import NavbarC from "./Components/Navbar/Navbar";
import { useState } from "react";
import Add from "./Components/Add/Add";
import { Route, Switch } from "react-router-dom";
import Description from "./Pages/Description";

function App() {
  //declare a state to add a new movie by the user
  const [movie, setMovie] = useState(moviesData);
  //Add new movie function
  const addMovie = (newMovie) => {
    setMovie([newMovie, ...movie]);
  };
  //declare a state to search a movie by the user
  const [text, setText] = useState("");
  const [newRating, setRating] = useState(0);
  //search by title function
  const handleSearch = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  //search by rating function
  const handleRating = (e, newRating) => {
    setRating(newRating);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Add addMovie={addMovie} />
          <NavbarC
            handleSearch={handleSearch}
            handleRating={handleRating}
            text={text}
            newRating={newRating}
          />
          <MovieList items={movie} text={text} newRating={newRating} />
          <FooterC />
        </Route>
        <Route
          path="/description"
          component={Description}
          // path="/description/:movie.id"
          // render={(props) => <Description {...props} movie={movie} />}
        />
      </Switch>
    </div>
  );
}

export default App;
