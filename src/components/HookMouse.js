import React, { useState, useEffect } from 'react';

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX); // Fix typo here: e.clientX instead of e,clintX
        setY(e.clientY); // Fix typo here: e.clientY instead of e.clintY
    };

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Component unmounted');
            window.removeEventListener('mousemove', logMousePosition);
        };
    }, []); // Empty dependency array to run the effect only once (on mount)

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
}

export default HookMouse;
