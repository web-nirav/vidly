import React from "react";

const ListGroup = props => {
  const {
    items,
    textPropery,
    valueProperty,
    onItemSelect,
    selectedItem
  } = props;
  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li
            key={item[valueProperty]}
            className={
              selectedItem === item
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
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
