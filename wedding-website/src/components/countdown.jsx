import { useEffect, useState } from "react";

// this needs some work

function calculateTimeLeft() {
const weddingDate = new Date("May 5, 2025 18:00:00").getTime();
const daysToGo = weddingDate - new Date().getTime();
let timeLeft = {};

    if (daysToGo > 0) {
        timeLeft = {
            days: Math.floor(daysToGo / (1000 * 60 * 60 * 24)),
            hours: Math.floor((daysToGo / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((daysToGo / 1000 / 60) % 60),
            seconds: Math.floor((daysToGo / 1000) % 60)
        };
    }
    return timeLeft;
}

export default function Countdown() {
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
    const id = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => {
        clearTimeout(id);
    }
});

    const timerComponents = Object.keys(timeLeft).map(interval => {
        if (!timeLeft[interval]) {
            return;
        }
        return (
            <span>{timeLeft[interval]} {interval}{" "}</span>
        )
    });
    return (
        <div className="timer-countdown">
            {timerComponents.length ? timerComponents : <span>Today's the day!</span>}
        </div>
    );
}
