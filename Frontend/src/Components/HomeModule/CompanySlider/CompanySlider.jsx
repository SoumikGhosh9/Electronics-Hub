import styles from "./CompanySlider.module.css";

const CompanySlider = () => {
    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/2048px-LG_symbol.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/2048px-LG_symbol.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png",
    ];

    const images2 = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png",
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
