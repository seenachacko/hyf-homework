import React, { useState, useEffect } from 'react'

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("calling use effect")
        const timerId = setTimeout(() => {
            setCount(prev => prev + 1);
        }, 1000);
        return () => { // called right before the next useEffect
            console.log("clean up function")
            clearTimeout(timerId);
        }
    });

    return (
        <div className="watchcount">
           You have Used  {count} seconds on this Website
        </div>
    )

}
export default Timer
