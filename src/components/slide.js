
import jbf from '../Images/jbf.png';
import ana from '../Images/reii.png';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { render } from '@testing-library/react';

// asdf
const Slideshow = () => {
    return (
      <div>
        <div class="hero_text_container">
  
  <p class="hero_text">TAKE A LOOK INSIDE MY MIND</p>
  <p class="hero_text_paragraph">Junior Developer with experience working with Front-end and Back-End technologies, working with and managing teams, as well as a sharp vision on creativity.</p>
  <a class="button_text" href="/ProductsPage"> <button class="button_text"> LET'S GO </button> </a>
</div>
      <div className="slide-container">
      <Slide>
          <div style={{height: "70vh",}} className="each-slide">
              {" "}
              <div className="slide-image" style={{backgroundImage: `url(${jbf})`,}}>
              </div>
          </div>
          <div style={{ height: "70vh",}} className="each-slide">
              <div className="slide-image" style={{backgroundImage: `url(${ana})`,}}>   
              </div>
          </div>
      </Slide>
  </div>
</div>
    )
}



export default Slideshow;