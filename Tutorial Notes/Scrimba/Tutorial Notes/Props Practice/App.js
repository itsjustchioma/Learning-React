import React from "react";
import Joke from "./Joke"


function App(){
    return(
        <div>
            <Joke 
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
            />
            <Joke 
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
            />
            <Joke 
                punchline="I can't wait to see her face light up when she opens it."
            />
           
        </div>
    )
}
export default App;



// Setup: What's the best thing about Switzerland?
// Punchline: I don't know, but the flag is a big plus!
