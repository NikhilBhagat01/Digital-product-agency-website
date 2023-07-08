import styles from "./hero.module.css";
import hero from "../../assets/hero.png";
import dots from "../../assets/dot.svg";
import elipse from "../../assets/ellipse.svg";
import rectangle from "../../assets/reactangle.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.herotext}>
          <h2>A Digital Product Agency</h2>
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <button>Contact Now</button>
          <img src={dots} alt="dots" className={styles.dots} />
        </div>
        <div className={styles.heroimage}>
          <img src={hero} alt="hero" />
          <img src={elipse} alt="elipse" className={styles.elipse} />
          <img src={rectangle} alt="rectangle" className={styles.rectangle} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
