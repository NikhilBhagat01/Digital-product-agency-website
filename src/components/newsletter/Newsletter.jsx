import styles from "./newsletter.module.css";
import yellow from "../../assets/newsletter/yellow.svg";
import dots from "../../assets/newsletter/dots.svg";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.bluebox} />
        <div className={styles.subscribe}>
          <h2>Subscribe Newsletter</h2>
          <p>I will update good news and promotion service not spam</p>
        </div>
        <div className={styles.contact_form}>
          <div className={styles.input_container}>
            <input type="text" placeholder="enter your email address" />
            <button>Contact Now</button>
          </div>
        </div>
      </div>
      <img src={yellow} alt="" className={styles.yellow} />
      <img src={dots} alt="" className={styles.dots} />
    </div>
  );
};

export default Newsletter;
