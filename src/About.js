import React from "react"
import './About.css'
import About1 from './images/About1.jpg'
import About2 from './images/About2.jpg'
function About(){
    return(<div className="display1">
        <div className="mumu1"> 
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>During the Middle Ages, Europe saw the rise of guilds and trade associations, which laid the groundwork for more structured culinary establishments. The French word "restaurer," meaning "to restore," gave birth to the term "restaurant." In this period, the first true restaurants appeared in France, serving soups and broths believed to have medicinal properties. These establishments provided a place for travelers, intellectuals, and the emerging middle class to gather and enjoy nourishing meals. </p>
            </div>
        <div className="images">
            <img className="imagefront" src={About1} alt="About restaurant" height={300} width={250} style={{zIndex:1}}  />
            <img className="imageback" src={About2} alt="About restaurant2" height={300} width={250} style={{zIndex:2}}/>
        </div>
        </div>
    )
};
export default About