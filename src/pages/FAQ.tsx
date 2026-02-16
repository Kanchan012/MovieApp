import React from "react";
import "./FAQ.css";

const FAQ: React.FC = () => {
    const faqs = [
        {
            q: "Where does the movie information come from?",
            a: "All data, including posters, ratings, and descriptions, is provided by The Movie Database (TMDB) API."
        },
        {
            q: "Is MovieApp free to use?",
            a: "Yes! MovieApp is a free platform for exploring entertainment content. We do not charge any subscription fees."
        },
        {
            q: "How often are the movies updated?",
            a: "The movies are updated in real-time. As soon as a movie is added or updated on TMDB, it appears here."
        },
        {
            q: "Can I watch movies directly here?",
            a: "No, MovieApp is an exploration and discovery platform. We provide information, trailers, and reviews, but we do not host the movies themselves."
        },
        {
            q: "How can I save movies I want to watch?",
            a: "You can use the 'Add to Watchlist' feature on any movie page. You must be logged in to save your watchlist across devices."
        }
    ];

    return (
        <div className="faq-page">
            <div className="faq-container">
                <h1 className="page-title">Frequently Asked Questions</h1>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <h3>{faq.q}</h3>
                            <p>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
