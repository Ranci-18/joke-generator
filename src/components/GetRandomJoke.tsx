import React, { useState } from "react";
import '../sass/getRandomJoke.sass';

const GetRandomJoke: React.FC = () => {
    const [joke, setJoke] = useState<Joke | null>(null);
    const [showPunchline, setShowPunchline] = useState(false)
    
    interface Joke {
        "type": string,
        "setup": string,
        "punchline": string,
        "id": number
    }

    const getJoke = async (): Promise<Joke | undefined> => {
        try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data: Joke  = await response.json();
        return data;
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = async () => {
        setShowPunchline(false);
        setJoke(null);
        const newJoke = await getJoke();
        if (newJoke) { 
            setJoke(newJoke);
            setTimeout(() => setShowPunchline(true), 3000);
        }
    }

    return (
        <div id="joke-container">
            <input id="get-joke-button" type="button" value="Tell me a joke" onClick={handleClick}/>
            <div id="joke-text1">
                <span>{joke?.setup}</span>
            </div>
            <div id="joke-text2">
                {showPunchline && <strong>{joke?.punchline}</strong>}
            </div>
            
        </div>
    )
}

export default GetRandomJoke;