import React, { useState } from 'react';

const RandomQuoteGenerator = () => {
    const [quote, setQuote] = useState(0);
    const quotes = [
        "The only way to do great work is to love what you do.",
        "Believe you can and you're halfway there.",
        "Success is not final, failure is not fatal.",
        "Don't watch the clock; do what it does. Keep going.",
        "Great things never come from comfort zones.",
        "Dream big and dare to fail.",
        "It always seems impossible until it's done.",
        "Success is the sum of small efforts repeated day in and day out.",
        "Your limitation—it's only your imagination.",
        "Push yourself, because no one else is going to do it for you."
    ];
    const nextQuoteHandle = () => {
       const randomIndex = Math.floor(Math.random() * quotes.length);
       setQuote(randomIndex);
    };
    const copyQuoteHandle = () => {
        navigator.clipboard.writeText(quotes[quote]);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Random Quote Generator</h1>
            <div className="bw_container">
                <div className="bw_random_quote">
                    <div className="bw_quote_card_wrap">
                        <div className="bw_quote_card">
                            <p>{quotes[quote]}</p>
                        </div>
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={copyQuoteHandle}>Copy Quote</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={nextQuoteHandle}>Next Quote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomQuoteGenerator;