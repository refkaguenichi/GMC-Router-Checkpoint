import React from "react";
import { Link } from "react-router-dom";
import "./TrailerAndDescription.css";

const TrailerAndDescription = ({ movie }) => {
  return (
    <ul className="links">
      <li>
        <Link
          to={{
            pathname: "/description",
            state: { movie: { description: movie.description } },
          }}
        >
          Description
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/trailer",
            state: { movie: { trailer: movie.trailer } },
          }}
        >
          Trailer
        </Link>
      </li>
    </ul>
  );
};

export default TrailerAndDescription;
