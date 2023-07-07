import React from 'react';
import './Main.css'
import logo from './images/Logo2.png';
function Main(){
    return <div className='mainpicture'>
        <main className='maincontent'>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>lorem tempor askkt riuajm qjj dsakldjm nwel ldsfkoas kd kaksdl kw dqkrk krq mas dl akzxk koas jirqj rm</p>
        <br></br><br></br><button className='button1'>mumu</button>
</main>;
        <img src={logo} alt="Little Lemon logo" 
        width={300}height={300} style={{borderRadius:'10%'}}/>
    </div>
}
export default Main