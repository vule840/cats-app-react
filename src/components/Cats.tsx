import axios from "axios";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Header from "./Header";

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
        console.log("Sucess");
        queryCache.invalidateQueries("favorites");
      },
    }
  );

  const catsIMG = cats.map((cat: cat) => {
    return (
      <div key={cat.id} className="wrapper">
        <img className="masonry-brick masonry-brick--h" src={cat.url}></img>
        <div
          onClick={() => {
            addToFavorites.mutate({
              image_id: cat.id,
              sub_id: "your-user-1234",
            });
          }}
          className="heart-shape"
        ></div>
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
