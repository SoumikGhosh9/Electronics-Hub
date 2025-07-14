import styles from "./CompanySlider.module.css";
import haier from "../../../assets/haier.png";
import bluestar from "../../../assets/bluestar.png";
import daikin from "../../../assets/daikin.png";
import god from "../../../assets/god.png";
import whirlpool from "../../../assets/whirlpool.png";
import bajaj from "../../../assets/bajaj.png";
import havells from "../../../assets/havells.png";
import voltasll from "../../../assets/voltasll.png";
import hitachi from "../../../assets/hitachi.png";
import philips from "../../../assets/philips.png";
import boat from "../../../assets/boat.png";
const CompanySlider = () => {
    const images = [haier, bluestar, daikin, god, whirlpool, bajaj, havells];

    const images2 = [voltasll, hitachi, philips, boat, daikin, god, haier];

    return (
        <div className={styles.companySlider}>
            <div className={styles.mainContainer}>
                <div className={styles.scrollContainer}>
                    <div className={styles.scrollContent}>
                        {images.map((image, index) => (
                            <div key={index} className={styles.imageContainer}>
                                <img
                                    src={image}
                                    alt={`Partner ${index}`}
                                    className={styles.scrollImage}
                                />
                            </div>
                        ))}
                        {images.map((image, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className={styles.imageContainer}>
                                <img
                                    src={image}
                                    alt={`Partner ${index}`}
                                    className={styles.scrollImage}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.scrollContent2}>
                        {images2.map((image, index) => (
                            <div key={index} className={styles.imageContainer}>
                                <img
                                    src={image}
                                    alt={`Partner ${index}`}
                                    className={styles.scrollImage2}
                                />
                            </div>
                        ))}
                        {images2.map((image, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className={styles.imageContainer}>
                                <img
                                    src={image}
                                    alt={`Partner ${index}`}
                                    className={styles.scrollImage2}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanySlider;
