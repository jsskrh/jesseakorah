import React from "react";

function ListContainer({ listArr, projects, music }) {
  return (
    <ul className="list-container">
      {listArr.map((item) => {
        projects && (item.info = item.year + " / " + item.type);
        music &&
          (item.title = item.name) &&
          (item.info = Math.round(item.time / 3600) + " hours");
        console.log(item);
        return (
          <li>
            <a
              href={item.link}
              className="list-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="list-info">{item.info}</span>
              <span className="list-title">{item.title}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default ListContainer;
