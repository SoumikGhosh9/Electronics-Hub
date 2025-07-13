import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "./NavAssets/EHLogo.png"; // Adjust the path as necessary

const Navbar = () => {
    const [active, setActive] = useState("Home");

    const navItems = ["Home", "Products", "Services", "Contact", "About"];

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <ul className={styles.navItems}>
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className={`${styles.navItem} ${
                                    active === item ? styles.active : ""
                                }`}
                                onClick={() => setActive(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;

