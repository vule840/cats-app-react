import axios from "axios";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface favorite {
  id: number;
  url: string;
  image: {
    url: string;
  };
}

const Favorites = () => {
  const queryCache = useQueryClient();

  const { data: favorites = [] } = useQuery("favorites", () =>
    fetch("https://api.thecatapi.com/v1/favourites", {
      method: "GET",
      headers: {
        "x-api-key": "e07dc2cf-e773-4076-84bb-b9dfce38b8a1",
      },
    }).then((response) => response.json())
  );

  const deleteFromFavorites = useMutation(
    async (favorite: any) => {
      return axios.delete(
        `https://api.thecatapi.com/v1/favourites/${favorite.id}`,
        {
          headers: {
            "x-api-key": "e07dc2cf-e773-4076-84bb-b9dfce38b8a1",
          },
        }
      );
    },
    {
      onSuccess: () => {
        queryCache.invalidateQueries("favorites");
      },
    }
  );

  const favoritesIMG = favorites.map((favorite: favorite) => {
    return (
      <div key={favorite.id} className="wrapper col">
        <img
          alt={favorite.url}
          className="masonry-brick masonry-brick--h"
          src={favorite.image.url}
        ></img>

        <span
          onClick={() => deleteFromFavorites.mutate(favorite)}
          className="close"
        ></span>
      </div>
    );
  });
  return (
    <div>
      <div className="masonry masonry--h">
        {favoritesIMG.length ? favoritesIMG : "No Favorite cat yet ..."}
      </div>
    </div>
  );
};

export default Favorites;
