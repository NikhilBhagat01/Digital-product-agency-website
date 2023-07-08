import styles from "./help.module.css";
import boxblue from "../../assets/help/card/boxblue.svg";
import pink from "../../assets/help/card/pink.svg";
import wallet from "../../assets/help/card/emptywallet.svg";
import green from "../../assets/help/card/green.svg";

import yellowreactangle from "../../assets/help/Rectangle25.svg";
import bluerect from "../../assets/help/Rectangle_blue.svg";
import pinkcircle from "../../assets/help/pinkcircle.svg";
import dots from "../../assets/help/dots.svg";

const Card = ({ title, subtitle, logo, bgcolor }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_wrapper}>
        <div className={styles.box} style={{ backgroundColor: `${bgcolor}` }}>
          <img src={logo} alt="" />
        </div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

const Help = () => {
  const data = [
    {
      title: "Business Idea Planning",
      subtitle: "We present you a proposal and discuss niffty-gritty like",
      logo: boxblue,
      bgcolor: "#f1f7ff",
    },
    {
      title: "Development Website and App",
      subtitle: "Communication protocols apart from engagement models",
      logo: pink,
      bgcolor: "#FFF2F8",
    },
    {
      title: "Financial Planning System",
      subtitle: "Protocols apart from aengage models, pricing billing",
      logo: wallet,
      bgcolor: "#FFF7E3",
    },
    {
      title: "Market Analysis Project",
      subtitle: "Protocols apart from aengage models, pricing billing",
      logo: green,
      bgcolor: "#DEFFEE",
    },
  ];

  return (
    <div className={styles.help}>
      <div className={styles.container}>
        <div className={styles.helpcontent}>
          <div className={styles.helpcontent_wrapper}>
            <h2>How can we help your Business ?</h2>
            <p>
              We build readymade websites, mobile applications, and elaborate
              online business services.
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.vertical_cards} style={{ marginTop: "100px" }}>
            {data.slice(0, 2).map(({ title, subtitle, logo, bgcolor }) => (
              <Card
                title={title}
                subtitle={subtitle}
                logo={logo}
                bgcolor={bgcolor}
                key={title}
              />
            ))}
          </div>
          <div className={styles.vertical_cards} style={{ marginTop: "39px" }}>
            {data.slice(2, 4).map(({ title, subtitle, logo, bgcolor }) => (
              <Card
                title={title}
                subtitle={subtitle}
                logo={logo}
                bgcolor={bgcolor}
                key={title}
              />
            ))}
          </div>
        </div>
      </div>

      <img
        src={yellowreactangle}
        alt="yelloreactangle"
        className={styles.yellowrect}
      />

      <img src={bluerect} alt="bluerectangle" className={styles.bluerect} />
      <img src={pinkcircle} alt="pinkcircle" className={styles.pinkcircle} />
      <img src={dots} alt="dots" className={styles.dots} />
    </div>
  );
};

export default Help;
