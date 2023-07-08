import styles from "./great.module.css";
import great from "../../assets/great/greatsince.svg";
import rect from "../../assets/great/Rectangle.svg";
import ellipse from "../../assets/great/Ellipse.svg";

const Great = () => {
  return (
    <div className={styles.great}>
      <div className={styles.container}>
        <img src={great} alt="" />
        <div className={styles.great_text}>
          <h2>Great Digital Product Agency since 2016</h2>
          <p>
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </p>
        </div>
      </div>
      <img src={rect} alt="" className={styles.rect} />
      <img src={ellipse} alt="" className={styles.ellipse} />
    </div>
  );
};

export default Great;
