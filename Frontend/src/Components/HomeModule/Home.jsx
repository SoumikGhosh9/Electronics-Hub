import React from "react";
import styles from "./Home.module.css";
import Navbar from "../NavModule/Navbar";

const Home = () => {
    const images = [
      
    ];
    const images2 = [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",    
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    ];
  return (
    <>
      <Navbar />
      <div className={styles.homeContainer}>
        <div className={styles.heroSection}>
          <div className={styles.headline} ></div>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.scrollContainer}>
            <div className={styles.scrollContent}>
              {images.map((image, index) => (
                <div key={index} className={styles.imageContainer}>
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className={styles.scrollImage}
                  />
                </div>
              ))}
              {images.map((image, index) => (
                <div
                  key={`duplicate-${index}`}
                  className={styles.imageContainer}
                >
                  <img
                    src={image}
                    alt={`Image ${index}`}
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
                    alt={`Image ${index}`}
                    className={styles.scrollImage2}
                  />
                </div>
              ))}
              {images2.map((image, index) => (
                <div
                  key={`duplicate-${index}`}
                  className={styles.imageContainer}
                >
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className={styles.scrollImage2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
