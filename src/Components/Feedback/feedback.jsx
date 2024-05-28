import styles from "./feedback.module.css";
import feedbacklogo from "../../Assests/feedbacklogo.png";
import { MdCancel } from "react-icons/md";
import Button from "../Button/button";
import { useState } from "react";

export default function Feedback({ closefeedback, onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    onSubmit(input);
  };

  return (
    <div className={styles.feedbackbackground}>
      <div className={styles.conatinerdiv}>
        <div className={styles.title}>
          <img src={feedbacklogo} alt="Feedback Logo" />
          <p> Provide Additional Feedback</p>
          <Button style="cancelbtn" onClick={() => closefeedback(false)}>
            <MdCancel style={{ fontSize: "30px" }} />
          </Button>
        </div>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="enter your feedback..."
        />
        <Button style="feedbackbtn" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
