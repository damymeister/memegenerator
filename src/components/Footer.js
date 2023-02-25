import React from "react"
export default function Footer (){
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
        <div className="footer-text">DamyMeister ©</div>
        <div className="footer-date">{currentYear}</div>
        </footer>
    )
    }