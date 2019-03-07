import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  const { movie, onLike } = props;
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
