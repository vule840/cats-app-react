import axios from "axios";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { HeartIcon } from "./HeartIcon";

interface cat {
  id: number;
  url: string;
}
interface postCat {
  image_id: number;
  sub_id: string;
}

const Cats = () => {
  const queryCache = useQueryClient();

  const { data: cats = [] } = useQuery("cats", () =>
    fetch("https://api.thecatapi.com/v1/images/search?limit=10").then((res) =>
      res.json()
    )
  );
  const { data: favorites = [] } = useQuery("favorites", () =>
    fetch("https://api.thecatapi.com/v1/favourites", {
      method: "GET",
      headers: {
        "x-api-key": "e07dc2cf-e773-4076-84bb-b9dfce38b8a1",
      },
    }).then((res) => res.json())
  );

  const addToFavorites = useMutation(
    (data: postCat) => {
      return axios.post("https://api.thecatapi.com/v1/favourites", data, {
        headers: {
          "x-api-key": "e07dc2cf-e773-4076-84bb-b9dfce38b8a1",
        },
      });
    },
    {
      onSuccess: () => {
        console.log("Success");
        queryCache.invalidateQueries("favorites");
      },
      onError: (err: any) => {},
    }
  );

  const addActive = (event: any, cat: any, index: any) => {
    console.log(event.target);
    if (event.target.currentSrc === cat.url) {
      addToFavorites.mutate({
        image_id: cat.id,
        sub_id: "your-user-1234",
      });

      event.target.nextSibling.firstChild.classList.add("active");
    }
  };

  const catsIMG = cats.map((cat: cat, index: number) => {
    return (
      <div
        onClick={(event: any) => addActive(event, cat, index)}
        key={cat.id}
        className="wrapper"
      >
        <img
          alt={cat.url}
          className="masonry-brick masonry-brick--h"
          src={cat.url}
        ></img>

        {favorites.length > 0 ? (
          Object.values(favorites).map((x: any) => {
            return x.image.url === cat.url ? (
              <HeartIcon active={"active"} />
            ) : (
              <HeartIcon />
            );
          })
        ) : (
          <HeartIcon />
        )}
      </div>
    );
  });

  return (
    <div className="masonry masonry--h">
      {catsIMG.length ? catsIMG : "Loading ..."}
    </div>
  );
};

export default Cats;
