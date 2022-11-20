import React, { useRef } from "react";
import styles from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" required ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Image</label>
          <input id="image" type="url" required ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input id="address" type="text" required ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button>Add New Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
