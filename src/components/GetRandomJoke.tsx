import React, { useState } from "react";

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
        <div>
            <span>{joke?.setup}</span>
            {showPunchline && <span>{joke?.punchline}</span>}
            <input type="button" value="Get Joke" onClick={handleClick}/>
        </div>
    )
}

export default GetRandomJoke;