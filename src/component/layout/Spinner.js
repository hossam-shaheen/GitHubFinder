import React from 'react';
import spinner from "./spinner.gif"

function Spinner() {
    return (
        <div>
            <img src={spinner}
                alt="loading..."
                style={{
                    width: "150px",
                    display: "block",
                    margin: "0 auto"
                }} />
        </div>
    )
}

export default Spinner
