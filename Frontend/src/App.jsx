import { useState, useEffect } from "react";
import Home from "./Components/HomeModule/Home.jsx";
import LoadingScreen from "./Components/LoadingModule/LoadingScreen.jsx";
import "./App.css";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000); // 4 seconds loading time

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <div className="header">
                <Home />
            </div>
        </>
    );
}

export default App;
