import styles from "./Card.module.css";

const Card = () => {
    const cardData = [
        {
            title: "Security System",
            description:
                "Advanced security solutions with state-of-the-art technology. Our comprehensive security systems provide 24/7 monitoring and protection.",
        },
        {
            title: "Smart Home",
            description:
                "Transform your home into a smart ecosystem with our cutting-edge automation solutions. Control lighting and temperature systems.",
        },
        {
            title: "Electronics Hub",
            description:
                "Your one-stop destination for all electronic needs. From consumer electronics to professional equipment with top brands.",
        },
        {
            title: "IoT Solutions",
            description:
                "Connect your world with our Internet of Things solutions. Smart sensors, automated systems, and real-time data analytics.",
        },
    ];

    return (
        <div className={styles.cardContainer}>
            {cardData.map((card, index) => (
                <div key={index} className={styles.card}>
                    <h2 className={styles.cardTitle}>{card.title}</h2>
                    <p className={styles.cardDescription}>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;
