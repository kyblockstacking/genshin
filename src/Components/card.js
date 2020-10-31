import React from 'react';

import Amber from '../Assets/characters/amber.png';

const Card = () => {
    return (
        <>
        <section>
  <div class="container">
    <div class="background-img">
      <div class="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
          <h2>Amber</h2>
          <img src={Amber} alt='character portrait' style={{width: '80px', height: '160px'}}></img>
        </div>
        
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Card;