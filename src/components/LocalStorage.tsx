import React, { useEffect } from "react";

const LocalStorage = () => {
  const [favs, addFavs] = React.useState<any[]>(
    JSON.parse(localStorage.getItem("favs") || "0")
      ? JSON.parse(localStorage.getItem("favs") || "0")
      : []
  );

  useEffect(() => {}, [favs]);

  const deleteFromStorage = (index: any) => {
    favs.splice(index, 1);
    addFavs([...favs]);
    localStorage.setItem("favs", JSON.stringify(favs) || "0");
  };
  const favStorage = favs.map((x: any, index: any) => {
    return (
      <div key={x} className="storageCats">
        <img src={x} alt={`img${index}`} />
        <span onClick={() => deleteFromStorage(index)} className="close"></span>
      </div>
    );
  });
  return (
    <div className="masonry masonry--h">
      {favStorage.length ? favStorage : "No storage Kitties yet ..."}
    </div>
  );
};

export default LocalStorage;
