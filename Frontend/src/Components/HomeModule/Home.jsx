import styles from "./Home.module.css";
import Navbar from "../CommonModule/NavModule/Navbar";
import Footer from "../CommonModule/FooterModule/Footer";
import CompanySlider from "./CompanySlider/CompanySlider";
import CardContainer from "./ContentCard/Card";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className={styles.homeContainer}>
                <div className={styles.heroSection}>
                    <div className={styles.headline}></div>
                </div>
                <CompanySlider />
                <CardContainer />
            </div>
            <Footer />
        </>
    );
};

export default Home;
