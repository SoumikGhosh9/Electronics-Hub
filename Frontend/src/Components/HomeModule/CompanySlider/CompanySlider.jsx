import styles from "./CompanySlider.module.css";
import haier from "../../../assets/haier.png";
import bluestar from "../../../Assets/bluestar.png";
import daikin from "../../../Assets/daikin.png";
import god from "../../../Assets/god.png";
import whirlpool from "../../../Assets/whirlpool.png";
import bajaj from "../../../Assets/bajaj.png";
import havells from "../../../Assets/havells.png";
import voltasll from "../../../Assets/voltasll.png";
import hitachi from "../../../Assets/hitachi.png";
import philips from "../../../Assets/philips.png";
import boat from "../../../Assets/boat.png";
const CompanySlider = () => {
    const images = [haier, bluestar, daikin, god, whirlpool, bajaj, havells];

    const images2 = [
      voltasll,
      hitachi,
      philips,
      boat,
    ];

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
