import styles from "./footer.module.css";
import facebook from "../../assets/footer/facebook.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import twitter from "../../assets/footer/twitter.svg";

const Linkcard = ({ link }) => {
  return (
    <div className={styles.linkcard}>
      <h4>{link.title}</h4>
      {link.sublinks.map((s) => (
        <p key={s}>{s}</p>
      ))}
    </div>
  );
};

const Footer = () => {
  const links = [
    {
      title: "What We Do",
      sublinks: [
        "Web Design",
        "App Design",
        "Social Media",
        "Manage Market",
        "Analysis Project",
      ],
    },
    {
      title: "Company",

      sublinks: [" About Us", "Career", "Become Investor"],
    },
    {
      title: "Support",

      sublinks: ["FAQ", "Policy", "Business"],
    },
    {
      title: "Contact",

      sublinks: ["WhatsApp", "Support 24"],
    },
  ];
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.company_info}>
            <h2>
              <span>A+</span> Studio
            </h2>
            <p>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <div className={styles.social_icons}>
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          <div className={styles.links}>
            {links.map((link) => (
              <Linkcard link={link} key={link.title} />
            ))}
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Copyright © 2023 Nikhil Bhagat</p>
    </>
  );
};

export default Footer;
