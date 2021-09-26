import axios from "axios";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

interface cat {
  id: number;
  url: string;
}
interface postCat {
  image_id: number;
  sub_id: string;
}

const Cats = () => {
  const [inHover, setHover] = React.useState(false);
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
    if (event.target.currentSrc === cat.url) {
      addToFavorites.mutate({
        image_id: cat.id,
        sub_id: "your-user-1234",
      });
    }
  };
  function MouseOver(event: any) {
    event.target.style.background = "red";
  }
  function MouseOut(event: any) {
    event.target.style.background = "";
  }
  const catsIMG = cats.map((cat: cat, index: number) => {
    return (
      <div
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        onClick={(event: any) => addActive(event, cat, index)}
        key={cat.id}
        className="wrapper"
        // onMouseEnter={(i) => setHover(true)}
        // onMouseLeave={() => setHover(false)}
      >
        <img
          alt={cat.url}
          className="masonry-brick masonry-brick--h"
          src={cat.url}
        ></img>
        {Object.values(favorites).map((x: any) => {
          if (x.image.url === cat.url) {
            return <div key={cat.id} className="heart-shape"></div>;
          }
        })}

        {/* {inHover && <div className="add">Add to favorites</div>} */}
        <div className="add">Hover over me!</div>
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
