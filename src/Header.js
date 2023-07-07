import React from 'react';
import logo from './images/Logo2.png';

function Header(){
    return <header className='Header'>
        <img src={logo} alt="Little Lemon logo" width={200}height={100}/>
    </header>;
}
export default Header