import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

const FavouritesPage = () => {
  const favouritesCtx = useContext(FavouritesContext);

  let content;
  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You have no favourites meetups yet.</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default FavouritesPage;
