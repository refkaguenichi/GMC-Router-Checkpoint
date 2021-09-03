import React from "react";

const Description = ({ history, location: { state }, ...rest }) => {
  return (
    <div>
      <button onClick={() => history.goBack()}>Description</button>
      <span>{state.movie.description}</span>
    </div>
  );
};

export default Description;
