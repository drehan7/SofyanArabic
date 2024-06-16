import React from 'react';
import '../App.css'

const tmp = () => {
    return (

            <div className="contact_container">
                <div className="contact_pfp">
                    <img src="images/sofyan_pfp.jpeg" alt="Soufiane El-Mouaffaq" />
                </div>
                <article className="contact_autobio">
                    <p>
                        Hello, I'm Soufiane, a passionate Arabic educator hailing from Morocco. Three years ago, amidst the onset of the COVID-19 pandemic, I found myself in quarantine, seeking online opportunities. Driven by my deep love for the Arabic language, I ventured into teaching it virtually. The journey began with looking for students online, and their enthusiasm became my cornerstone, fueling my dedication to teaching Arabic earnestly. Working with my initial students was not just teaching; it was a reciprocal learning experience—I learned as much from them as they did from my lessons. I'm committed to continuing this journey, aiming to assist individuals worldwide in embracing and comprehending the beauty of this language.
                    </p>
                </article>
            </div>
    )
}

export default function Contact() {
    return (
        <>
        <br/>
        <div id="contact"></div>
        <div className="contact_main_container">
            <div className="contact_header">
                <h1>Contact Me</h1>
            </div>
            {tmp()}
            <div className="contact_email_socials">
                <p>Send me an email at <a href="mailto:soufianeelmouaffaq@gmail.com">soufianeelmouaffaq@gmail.com</a> or check out my socials below! Looking forward to hearing from you!</p>
            </div>
        </div>
        </>
    );
}

