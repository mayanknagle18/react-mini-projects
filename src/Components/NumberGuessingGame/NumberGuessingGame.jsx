import React, { useState } from 'react';

const NumberGuessingGame = () => {
    const [randomVal, setRandomVal] = useState(null);
    const [selected, setSelected] = useState(null);
    const [status, setStatus] = useState('idle');
 
    const handleSelect = (num) => {
        setSelected(num);
    };
    const guessRandomVal = () => {
        if (selected === null) return;
        const random = Math.floor(Math.random() * 10) + 1;
        setRandomVal(random);
        if (selected === random) {
            setStatus('correct');
        } else if (random < selected) {
            setStatus('smaller');
        } else {
            setStatus('greater');
        }
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Number Guessing Game</h1>
            <div className="bw_container">
                <div className="bw_number_guessing_game">
                    <h2>{randomVal !== null ? randomVal : '--'}</h2>
                    <h4 className={status === 'correct' ? 'bw_active_correct' : ''}>
                        The number is correct.
                    </h4>
                    <h4 className={status === 'greater' ? 'bw_active_greater' : ''}>
                        The number is greater.
                    </h4>
                    <h4 className={status === 'smaller' ? 'bw_active_smaller' : ''}>
                        The number is smaller.
                    </h4>
                    <div className="bw_guess_number_wrap">
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                            <button
                                key={num}
                                type="button"
                                className={`bw_guess_num${selected === num ? ' bw_selected' : ''}`}
                                onClick={() => handleSelect(num)}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                    <div className="bw_btn_guess">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={guessRandomVal}>Guess</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NumberGuessingGame;