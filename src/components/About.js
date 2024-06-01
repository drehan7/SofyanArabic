import React from 'react';
import '../App.css'

const InfoCard = (props) => {
    return (
        <>
            <div className="info_card_main">
                <h1 className="info_card_title">{props.title}</h1>
                <p className="info_card_text">{props.text}</p>
            </div>
        </>
    )
}

export default function About() {
    return (
        <>
        <div id="about"></div>
        <div className="about_header">
            <h1>About The Classes</h1>
        </div>
        <div className="about_section">
        <br/>
            <div className="about__grid__container">
                <InfoCard 
                    title="Scheduling"
                    text="The meetings are highly flexible and can be tailored to fit your daily schedule. I am available from 8 am to 5 pm EST every day. Please let me know the times that work best for you, and we can arrange a meeting accordingly."
                />
                <InfoCard 
                    title="Materials"
                    text="I utilize a variety of textbooks for classes, including Madinah books, Mastering Arabic books, Al-Kitaab, and others. Once we have selected the best type of lessons that suit your needs, I will provide you with all the necessary resources."
                />
                <InfoCard 
                    title="Lessons"
                    text="I utilize a variety of textbooks for classes, including Madinah books, Mastering Arabic books, Al-Kitaab, and others. Once we have selected the best type of lessons that suit your needs, I will provide you with all the necessary resources."
                />
                <InfoCard 
                    title="Payment"
                    text="Payments are processed through PayPal for convenience."
                />
            </div>
        </div>
        </>
    );
}
