import React from "react";

const Like = ({ movie, onLike }) => {
  let classes = "fa fa-heart";
  if (!movie.liked) classes += "-o";
  return (
    <i
      onClick={() => onLike(movie)}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
