import React, { useState, useEffect } from 'react';

function ResizeComponent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        console.log("Event listener addedd");

        window.addEventListener("resize", handleResize);

        return () => {
            console.log("Event listener removed");
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    //it will wun only on 1st render

    return (
        <div>
            <h1>Window width: {windowWidth}px</h1>
        </div>
    );
}

export default ResizeComponent