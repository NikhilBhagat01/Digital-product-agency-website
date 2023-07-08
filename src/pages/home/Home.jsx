import Client from "../../components/client/Client";
import Footer from "../../components/footer/Footer";
import Great from "../../components/great/Great";
import Help from "../../components/help/Help";
import Hero from "../../components/hero/Hero";
import Newsletter from "../../components/newsletter/Newsletter";
import Ourclient from "../../components/ourClient/Ourclient";
// import styles from "./home.module.css";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <Hero />
      {/* OUR CLIENT */}
      <Ourclient />
      {/* HOW CAN WE HELP */}
      <Help />
      {/* GREAT SINCE */}
      <Great />
      {/* HAPPY CLIENT */}
      <Client />
      {/* NEWSLETTER */}
      <Newsletter />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
