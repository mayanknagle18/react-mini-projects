import React, { useEffect, useRef, useState } from "react";

const ReactionTimer = () => {
    const [color, setColor] = useState("red");
    const [message, setMessage] = useState("Wait for green");
    const [reactionTime, setReactionTime] = useState(null);
    const startTime = useRef(null);
    const timerRef = useRef(null);

    const reactionFunc = () => {
        if (color === "red") {
            setMessage("Too early!");
            return;
        }
        if (color === "green") {
            const time = Date.now() - startTime.current;
            setReactionTime(time);
            setMessage("Reaction Time");
            setColor("blue");
        }
    }
    useEffect(() => {
        const randomTime = Math.floor(Math.random() * 3000) + 2000;
        timerRef.current = setTimeout(() => {
            setColor("green");
            setMessage("Click!");
            startTime.current = Date.now();
        }, randomTime);
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <div className="bw_wrap_sec">
            <div className="bw_container">
                <h1>Reaction Timer</h1>

                <div className="bw_reaction_timer">
                    <button
                        type="button"
                        className={`bw_reaction_btn bw_react_${color}`}
                        onClick={reactionFunc}
                    >
                        <h4>
                            {color === "red" && "Wait..."}
                            {color === "green" && "Click!"}
                            {color === "blue" && "Reaction Time"}
                        </h4>
                        <h2>
                            {color === "red" && "Wait for green"}
                            {color === "green" && "CLICK!"}
                            {color === "blue" && `${reactionTime}ms`}
                        </h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReactionTimer;