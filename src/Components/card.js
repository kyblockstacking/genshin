import React from 'react';

const Card = (props) => {
    return (
        <>
          <section>
            <div class="container">
                    <div class="box">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div class="content">
                            <h2 className="character-title">{props.name}</h2>
                            <img src={props.portrait} alt='character portrait' style={{width: '100px', height: '180px'}}></img>
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}

export default Card;