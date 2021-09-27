import React from "react";

const Footer = () => {
  const [favs, setFavs] = React.useState<any[]>([])
  let favorites = JSON.parse(localStorage.getItem('favs') || '0')
  // if(favorites) {
  //   setFavs([...favorites]) 

  // }
  return (
    <footer>
      <p>Tomislav Vukušić / Top Digital Agency</p>
      {/* {favs ? favs.map(x => console.log(x)) : ''} */}
    </footer>
  );
};

export default Footer;
