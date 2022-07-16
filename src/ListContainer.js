import React from "react";
import ListItem from "./ListItem";

function ListContainer({ listArr, projects, music, row }) {
  return (
    <ul className={row ? "list-container row" : "list-container"}>
      {listArr.map((item) => {
        projects && (item.info = item.year + " / " + item.type);
        music &&
          (item.title = item.name) &&
          (item.info = Math.round(item.time / 3600) + " hours");
        return <ListItem item={item} row={row} />;
      })}
    </ul>
  );
}

export default ListContainer;
