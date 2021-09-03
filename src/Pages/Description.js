import { Button } from "@material-ui/core";
import React from "react";
import MovieCard from "../Components/Movies/MovieCard";

const Description = ({
  location: {
    state: { movie },
  },
  // match,
  history,
  // movie,
}) => {
  // const movieMatch = movie.find((e) => match.params.id == e.id);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <MovieCard movie={movie} />
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
      <iframe
        style={{ marginTop: "3%" }}
        width="500"
        height="640"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        alt="cover"
      ></iframe>
      {/* <h1>{movieMatch.name}</h1> */}
      {/* <button onClick={() => history.goBack()}>Go Back</button> */}
    </div>
  );
};

export default Description;
