import styles from "./Home.module.css";
import Navbar from "../CommonModule/NavModule/Navbar";
import Footer from "../CommonModule/FooterModule/Footer";
import CompanySlider from "./CompanySlider/CompanySlider";
import sideImage from "../../Assets/sideImage.png";
import ContentCard from "./ContentCard/Card.jsx"; 

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.homeContainer}>
        <div className={styles.heroSection}>
          <div className={styles.headline}></div>
          <div className={styles.heroHeading}>
            <h1>
              Your One-Stop <br /> Electronics <br /> Solution!
            </h1>
            <h3>Secure. Smart. Customized.</h3>
            <h3>📦 Free Shipping | 💸 Starting ₹199</h3>
          </div>
          <div className={styles.heroImage}>
            <img src={sideImage} alt="Image"/>
          </div>
        </div>
        <div className={styles.middleSection}>
          <h1>TRY OUT OUR</h1> 
          <hr className={styles.line} />
          <div className={styles.buttons}>
            <button className={styles.button1}>Product</button>
            <button className={styles.button2}>Service</button>
          </div>
        </div>
        <CompanySlider />
        <ContentCard />
      </div>
      <Footer />
    </>
  );
};  
export default Home;
