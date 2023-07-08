import styles from "./client.module.css";
import client from "../../assets/client/leftimage.svg";
import bluedark from "../../assets/client/Ellipse.svg";
import blue from "../../assets/client/Ellipse_light.svg";
import middle from "../../assets/client/middle.svg";
import one from "../../assets/client/1.svg";
import two from "../../assets/client/2.svg";
import three from "../../assets/client/3.svg";
import four from "../../assets/client/4.svg";
import five from "../../assets/client/5.svg";
import six from "../../assets/client/6.svg";
import seven from "../../assets/client/7.svg";
import dot from "../../assets/client/Dot.svg";
import pcircle from "../../assets/client/pinkcircle.svg";
import yellow from "../../assets/client/yellow.svg";

const Client = () => {
  return (
    <div className={styles.client}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>What our happy client say</h2>
          <p>Several selected clients, who already believe in our service.</p>
        </div>

        <div className={styles.client_container}>
          <img src={client} alt="client" />
          <div className={styles.text}>
            <h4>Matthew Paul</h4>
            <p>
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p>
            <div className={styles.dotscontainer}>
              <img src={bluedark} alt="" />
              <img src={blue} alt="" />
              <img src={blue} alt="" />
              <img src={blue} alt="" />
              <img src={blue} alt="" />
            </div>
          </div>
          <div className={styles.userimages}>
            <img src={middle} alt="" className={styles.middle} />
            <img src={one} alt="" className={styles.one} />
            <img src={two} alt="" className={styles.two} />
            <img src={three} alt="" className={styles.three} />
            <img src={four} alt="" className={styles.four} />
            <img src={five} alt="" className={styles.five} />
            <img src={six} alt="" className={styles.six} />
            <img src={seven} alt="" className={styles.seven} />
          </div>
        </div>
      </div>
      <img src={dot} alt="" className={styles.dotss} />
      <img src={pcircle} alt="" className={styles.pcircle} />
      <img src={yellow} alt="" className={styles.yellow} />
    </div>
  );
};

export default Client;
