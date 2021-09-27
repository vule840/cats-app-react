import React from "react";

const Home = () => {
  return (
    <div className="flexwrapper">
      <br />
      <br />
      <p>
        This is simple App. Clicking on the favored cat in <strong>Cats</strong>{" "}
        section
        <br /> you add the cat to your favorites list which can be views on
        <strong> Favorites</strong> page.
      </p>
      <p>
        In this App localStorage wasnt used but{" "}
        <a href="https://thecatapi.com/">
          <strong> Cats API</strong>
        </a>
        <br />
        service as it has all the routes for favorites list, but will add
        localStorage variation branch also.
      </p>
    </div>
  );
};

export default Home;
