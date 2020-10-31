import React, {useState} from 'react';

import Card from '../Components/card';
import Amber from '../Assets/characters/amber.png';
import Barbra from '../Assets/characters/barbra.png';

const Randomizer = () => {

    const [random, setRandom] = useState(0);
    const [character, setCharacter] = useState({});
    const [characterName, setCharacterName] = useState("");

    const number = () => {
        setRandom(Math.floor(Math.random() * 11))
        console.log(random)
        if (random > 5) {
            setCharacter(Amber)
            setCharacterName("Amber")
        }
        if (random === 5 || random < 5) {
            setCharacter(Barbra)
            setCharacterName("Barbra")
        }
    }

    return (
        <>
        <button onClick={() => number()}>randomize</button>
            <Card name={characterName} portrait={character} />
        </>
    )
}

export default Randomizer;