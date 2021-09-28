import React from "react";

const Home = () => {
  return (
    <div className="flexwrapper">
      <br />
      <br />
      <p>
        This is a simple App. Clicking on the favored cat in{" "}
        <strong>the Cats </strong> section <br /> section you add the cat to
        your favorites list which can be viewed on
        <strong> the Favorites</strong> page.
      </p>
      <p>
        In this App, localStorage <del>wasn't</del> was used and{" "}
        <a href="https://thecatapi.com/">
          <strong> Cats API</strong>
        </a>
        <br />
        service as it has all the routes for favorites list.{" "}
        <del> but will add localStorage variation branch also.</del>
      </p>
    </div>
  );
};

export default Home;
