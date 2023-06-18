import React from "react";
import '../App.css';
import '../styles/coverpage.css';

function CoverPage(){
    return (
        <div className="coverpage-container">
            <video src="../public/images/CoverPage.mp4" autoPlay loop muted />
        </div>
    )
};

export default CoverPage;