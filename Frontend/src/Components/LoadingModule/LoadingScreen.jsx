import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingContent}>
                <div className={styles.loadingBar}>
                    <div className={styles.loadingProgress}></div>
                </div>

                <div className={styles.loadingText}>
                    <span>Loading</span>
                    <div className={styles.dots}>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
