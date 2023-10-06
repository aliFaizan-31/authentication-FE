import React from "react";
import Navbar from "./nav-bar/navBar";

function Application() {
    return (
        <>
            <Navbar />
            <div className="signup-container">
                <h2 className="text-center">Welcome to the Application</h2>
                <p className="text-center">This is the main application page.</p>
            </div>
        </>
    );
};

export default Application;
