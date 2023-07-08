import styles from "./ourclient.module.css";
import google from "../../assets/googlelogo.svg";
import amazon from "../../assets/amazonlogo.svg";
import airbnb from "../../assets/airbnblogo.svg";
import uber from "../../assets/ubereatslogo.svg";

const Ourclient = () => {
  return (
    <div className={styles.ourclient}>
      <div className={styles.container}>
        <div className={styles.ourclient_text}>
          <h2>Our Client</h2>
          <p>Several selected clients, who already believe in our service.</p>
        </div>
        <div className={styles.companies_logo}>
          <img src={google} alt="google" />
          <img src={airbnb} alt="airbnb" style={{ width: "153px" }} />
          <img src={uber} alt="uber" />
          <img src={amazon} alt="amazon" style={{ marginTop: "14px" }} />
        </div>
      </div>
    </div>
  );
};

export default Ourclient;
