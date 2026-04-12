import React, { useState, useEffect } from 'react';

function TimerComponent() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
            console.log("setInterval executed");
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("Time to stop");
            clearInterval(intervalid);
        };
    }, []);
    //it will run only on first render

    return (
        <div>
            <h2>Seconds: {seconds}</h2>
        </div>
    );
}

export default TimerComponent