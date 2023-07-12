import React from "react";
import './Card.css'
import salad from './images/greek salad.jpg'
import lemon from './images/lemon dessert.jpg'
import bruchetta from './images/bruchetta.svg'


function Card({title}){
    return (
        <div className='card-display'>
            <div className="card-container">
            <img src={salad} alt="" height={150} width={250}/>
            <h2>Greek Salad   <span style={{color:'orange'}}>$12.99</span></h2>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        </div>
        <div className="card-container">
            <img src={bruchetta} alt=""height={150} width={250}/>
            <h2>Bruchetta    <span style={{color:'orange'}}>$5.99</span></h2>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.Bruschetta is healty menu</p>
        </div>
        <div className="card-container">
            <img src={lemon} alt=""height={150} width={250}/>
            <h2>Lemon dessert   <span style={{color:'orange'}}>$5.00</span></h2>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
        </div>
        </div>
        )
}
export default Card