import React from 'react';

const Card = (props) => {
    return (
        <>
          <section>
            <div className="container">
                    <div className="box">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="content">
                            <h2 className="character-title">{props.name}</h2>
                            <img className="character-portrait" src={props.portrait} alt='character portrait'></img>
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}

export default Card;