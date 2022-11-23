import React, { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";
import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const favouritesCtx = useContext(FavouritesContext);
  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  const toggleFavouriteHandler = () => {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavouriteHandler}>
            {itemIsFavourite ? "Remove from favourites" : "Add to favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
