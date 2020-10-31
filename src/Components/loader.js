import React from 'react';
import { Link } from "react-router-dom";

// Elements
import Anemo from '../Assets/elements/anemo.png';
import Cryo from '../Assets/elements/cryo.png';
import Dendro from '../Assets/elements/dendro.png';
import Electro from '../Assets/elements/electro.png';
import Geo from '../Assets/elements/geo.png';
import Hydro from '../Assets/elements/hydro.png';
import Pyro from '../Assets/elements/pyro.png';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="row">
                <img src={Anemo} alt='elemental symbol' className="fade-in-0"/>
                <img src={Cryo} alt='elemental symbol' className="fade-in-1"/>
                <img src={Dendro} alt='elemental symbol' className="fade-in-2"/>
                <img src={Electro} alt='elemental symbol' className="fade-in-3"/>
                <img src={Geo} alt='elemental symbol' className="fade-in-4"/>
                <img src={Hydro} alt='elemental symbol' className="fade-in-5"/>
                <img src={Pyro} alt='elemental symbol' className="fade-in-6"/>
            </div>
            <button className="button"><Link to='/randomizer'>Go to randomizer</Link></button>
        </div>
    )
}

export default Loader;