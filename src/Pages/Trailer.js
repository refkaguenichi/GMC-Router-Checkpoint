import React from "react";

const Trailer = ({ history, location: { state }, ...rest }) => {
  return (
    <div>
      <button onClick={() => history.goBack()}>Movie trailer</button>
      <iframe
        src={state.movie.trailer}
        alt={state.movie.id}
        title={state.movie.name}
      />
    </div>
  );
};

export default Trailer;
