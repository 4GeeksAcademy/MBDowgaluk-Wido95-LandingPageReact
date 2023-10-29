import React from "react";

export const Footer = () => {
    return (
        <footer className="footer py-4 bg-dark" style={{bottom: "0", position: "absolute", width: "100%"}}>
            <div className="container text-center py-3">
                <span className="text-muted">
                    © Copyright. Your website 2023
                    <span className="text-danger">❤</span> 
                </span>
            </div>
        </footer>
    )
}