import React, { useEffect, useState } from 'react';

function IntervalHookCounter({ someProp }) {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
        function doSomething() {
            console.log(someProp);
        }

        doSomething();
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval); // Clear the interval using the stored reference
        };
    }, [someProp]);

    return (
        <div>
            {count}
        </div>
    );
}

export default IntervalHookCounter;
