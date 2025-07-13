import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/HomeModule/Home.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>

            <div className="header">
                <Home/>
            </div>

            {/* <div className="construction-header">
                <div className="logo-container">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </div>
                <h1 className="site-title">🔧 Electronics Hub 🔧</h1>
                <div className="construction-banner">
                    <h2>🚧 UNDER CONSTRUCTION 🚧</h2>
                    <p>
                        We're building something amazing for electronics
                        enthusiasts!
                    </p>
                </div>
            </div> */}

            {/* <div className="content-section"> */}
                {/* <div className="features-preview">
                    <h3>Coming Soon:</h3>
                    <ul className="feature-list">
                        <li>📱 Latest Electronics Reviews</li>
                        <li>🛠️ DIY Project Tutorials</li>
                        <li>🔌 Component Database</li>
                        <li>💡 Circuit Design Tools</li>
                        <li>🛒 Electronics Marketplace</li>
                    </ul>
                </div> */}

                {/* <div className="progress-section">
                    <h3>Development Progress</h3>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${(count * 2) % 100}%` }}></div>
                    </div>
                    <p>{(count * 2) % 100}% Complete</p>

                    <button
                        className="progress-btn"
                        onClick={() => setCount((count) => count + 1)}>
                        Simulate Progress ({count} updates)
                    </button>
                </div>

                <div className="newsletter-signup">
                    <h3>Stay Updated!</h3>
                    <p>Get notified when Electronics Hub launches</p>
                    <div className="email-form">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="email-input"
                        />
                        <button className="notify-btn">Notify Me</button>
                    </div>
                </div>

                <div className="contact-info">
                    <h3>Questions?</h3>
                    <p>
                        Contact us at: <strong>info@electronicshub.com</strong>
                    </p>
                    <p>
                        Expected Launch: <strong>Q3 2025</strong>
                    </p>
                </div>
            </div>

            <footer className="construction-footer">
                <p>Built with React + Vite | Electronics Hub Team 2025</p>
            </footer> */}
        </>
    );
}

export default App;
