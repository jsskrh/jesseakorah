import React, { useEffect, useState } from "react";

function ListItem({ item, row, music }) {
  const [isHovering, setIsHovering] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (!music) return;

    // API Access Token
    const getAccessToken = async () => {
      const authParameters = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
      };
      await fetch("https://accounts.spotify.com/api/token", authParameters)
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          throw new Error("Something went wrong");
        })
        .then((data) => setAccessToken(data.access_token))
        .catch((error) => {
          console.log(error);
        });
    };
    getAccessToken();
  }, [music]);

  useEffect(() => {
    if (!music) return;

    const getArt = async () => {
      // get ID using serach
      const artistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + accessToken,
        },
      };
      const artistURL = await fetch(
        `https://api.spotify.com/v1/search?q=${item.title}&type=artist`,
        artistParameters
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Something went wrong");
        })
        .then((data) => {
          return {
            imageURL: data.artists.items[0].images[1].url,
            artistLink: data.artists.items[0].external_urls.spotify,
          };
        })
        .catch((error) => {
          console.log(item.title, error);
        });

      item.image = artistURL.imageURL;
      item.link = artistURL.artistLink;
    };
    getArt();
  }, [accessToken, item, music]);

  return (
    <li>
      {!row && (
        <div
          className={`${isHovering ? "list-image show" : "list-image"} ${
            music ? "music" : ""
          }`}
        >
          <img src={item.image} alt={item.title} />
        </div>
      )}

      <a
        href={item.link}
        className="list-item"
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={item.disabled === "false" ? false : true}
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
