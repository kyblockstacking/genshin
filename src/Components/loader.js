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
                <div className="element fade-in-0">
                    <img src={Anemo} alt='elemental symbol'/>
                </div>
                <div className="element fade-in-1">
                    <img src={Cryo} alt='elemental symbol'/>    
                </div>
                <div className="element fade-in-2">
                    <img src={Dendro} alt='elemental symbol'/>
                </div>
                <div className="element fade-in-3">
                    <img src={Electro} alt='elemental symbol'/>
                </div>
                <div className="element fade-in-4">
                    <img src={Geo} alt='elemental symbol'/>
                </div>
                <div className="element fade-in-5">
                    <img src={Hydro} alt='elemental symbol'/>
                </div>
                <div className="element fade-in-6">
                    <img src={Pyro} alt='elemental symbol'/>
                </div>
            </div>
            <button className="button"><Link to='/randomizer'>Go to randomizer</Link></button>
        </div>
    )
}

export default Loader;