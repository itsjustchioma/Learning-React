import React from "react";

function Joke(prop){
    return(
        <div>
            <h1>{prop.setup}</h1>
            <small>{prop.punchline}</small>
        </div>
    )
}

export default Joke;

