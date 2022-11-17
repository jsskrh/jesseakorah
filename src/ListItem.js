import React, { useState } from "react";

function ListItem({ item, row }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <li>
      {!row && (
        <div className={isHovering ? "list-image show" : "list-image"}>
          <img src={item.image} alt={item.title} />
        </div>
      )}

      <a
        href={item.link}
        className="list-item"
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={item.disabled}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <span className="list-info">{item.info}</span>
        <span className="list-title">{item.title}</span>
      </a>
    </li>
  );
}

export default ListItem;
