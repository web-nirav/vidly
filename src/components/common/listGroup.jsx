import React from "react";

const ListGroup = props => {
  const { items, textPropery, valueProperty, onSelectGenre } = props;
  return (
    <ul className="list-group">
      <li className="list-group-item active">All Genre</li>
      {items.map(item => {
        return (
          <li
            key={item[valueProperty]}
            className="list-group-item"
            onClick={() => onSelectGenre(item)}
          >
            {item[textPropery]}
          </li>
        );
      })}
    </ul>
  );
};

// here we have defined the default props value so we don't need to pass it from parent component every time
ListGroup.defaultProps = {
  textPropery: "name",
  valueProperty: "_id"
};

export default ListGroup;
