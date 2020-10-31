import React, {useState} from 'react';

// Components
import Card from '../Components/card';

// Assets
import Paimon from '../Assets/characters/paimon.png';
import Amber from '../Assets/characters/amber.png';
import Barbara from '../Assets/characters/barbara.png';
import Beidou from '../Assets/characters/beidou.png';
import Bennett from '../Assets/characters/bennett.png';
import Chongyun from '../Assets/characters/chongyun.png';
import Diluc from '../Assets/characters/diluc.png';
import Fischl from '../Assets/characters/fischl.png';
import Jean from '../Assets/characters/jean.png';
import Kaeya from '../Assets/characters/kaeya.png';
import Keqing from '../Assets/characters/keqing.png';
import Klee from '../Assets/characters/klee.png';
import Lisa from '../Assets/characters/lisa.png';
import Mona from '../Assets/characters/mona.png';
import Ningguang from '../Assets/characters/ningguang.png';
import Noelle from '../Assets/characters/noelle.png';
import Qiqi from '../Assets/characters/qiqi.png';
import Razor from '../Assets/characters/razor.png';
import Sucrose from '../Assets/characters/sucrose.png';
import Traveler_female from '../Assets/characters/traveler_female.png';
import Traveler_male from '../Assets/characters/traveler_male.png';
import Venti from '../Assets/characters/venti.png';
import Xiangling from '../Assets/characters/xiangling.png';
import Xingqui from '../Assets/characters/xingqui.png';

const Randomizer = () => {

    const [random, setRandom] = useState(0);
    const [character, setCharacter] = useState(Paimon);
    const [characterName, setCharacterName] = useState("Paimon");
    
    const roll = () => {
        const number = Math.floor(Math.random() * 24)
        setRandom(number)
        console.log(random)
        switch(random) {
            case 0:
                setCharacter(Paimon)
                setCharacterName("Paimon")
                break;
            case 1:
                setCharacter(Amber)
                setCharacterName("Amber")
              break;
              case 2:
                setCharacter(Barbara)
                setCharacterName("Barbara")
              break;
              case 3:
                setCharacter(Beidou)
                setCharacterName("Beidou")
              break;
              case 4:
                setCharacter(Bennett)
                setCharacterName("Bennett")
              break;
              case 5:
                setCharacter(Chongyun)
                setCharacterName("Chongyun")
              break;
              case 6:
                setCharacter(Diluc)
                setCharacterName("Diluc")
              break;
              case 7:
                setCharacter(Fischl)
                setCharacterName("Fischl")
              break;
              case 8:
                setCharacter(Jean)
                setCharacterName("Jean")
              break;
              case 9:
                setCharacter(Kaeya)
                setCharacterName("Kaeya")
              break;
              case 10:
                setCharacter(Keqing)
                setCharacterName("Keqing")
              break;
              case 11:
                setCharacter(Klee)
                setCharacterName("Klee")
              break;
              case 12:
                setCharacter(Lisa)
                setCharacterName("Lisa")
              break;
              case 13:
                setCharacter(Mona)
                setCharacterName("Mona")
              break;
              case 14:
                setCharacter(Ningguang)
                setCharacterName("Ningguang")
              break;
              case 15:
                setCharacter(Noelle)
                setCharacterName("Noelle")
              break;
              case 16:
                setCharacter(Qiqi)
                setCharacterName("Qiqi")
              break;
              case 17:
                setCharacter(Razor)
                setCharacterName("Razor")
              break;
              case 18:
                setCharacter(Sucrose)
                setCharacterName("Sucrose")
              break;
              case 19:
                setCharacter(Traveler_female)
                setCharacterName("Female Traveler")
              break;
              case 20:
                setCharacter(Traveler_male)
                setCharacterName("Male Traveler")
              break;
              case 21:
                setCharacter(Venti)
                setCharacterName("Venti")
              break;
              case 22:
                setCharacter(Xiangling)
                setCharacterName("Xiangling")
              break;
              case 23:
                setCharacter(Xingqui)
                setCharacterName("Xingqui")
              break;

            default:
              console.log("your app is broken")
              console.log(random)
          }
    }

    return (
        <>
        <button onClick={() => roll()}>randomize</button>
            <Card name={characterName} portrait={character} />
        </>
    )
}

export default Randomizer;