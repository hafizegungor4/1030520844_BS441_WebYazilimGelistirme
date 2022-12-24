import React, { useState, useEffect } from 'react';

function CountdownTimer({ seconds }) {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    useEffect(() => {
        if (timeLeft === 0) {
            window.location = '/';
        }
    }, [timeLeft]);

    return (
        <div>
            Time left: {timeLeft} seconds
        </div>
    );
}

export default CountdownTimer;
