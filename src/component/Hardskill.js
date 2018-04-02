import React from  'react';
const Hardskill = (props) =>{
    const {name,css} = props;

      return (
          <div className="single-chart">
              <h1>{name}</h1>
              <figure className={`${css} animate`}>
                  <svg role="img" xmlns="http://www.w3.org/2000/svg">
                      <title>[title here]</title>
                      <desc>[long description here]</desc>
                      <circle className="circle-background"/>
                      <circle className="circle-foreground"/>
                  </svg>
                  <figcaption>75% of all males like donuts.</figcaption>
              </figure>
          </div>
      )
    }

export default Hardskill;