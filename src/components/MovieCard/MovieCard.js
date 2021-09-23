import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const { movie } = props;

  return (
    <div data-testid="MovieCard" className="moviecard">
      <div className="moviecard_img">
        <img src={movie.poster} alt="" />
      </div>
      <div className="moviecard_wrap">
        <div className="moviecard_content">
          <h2>{movie.title}</h2>
          <p className="movidecard_year">{movie.year}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard;
