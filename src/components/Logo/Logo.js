import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css'; 

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <div className='Tilt br2 shadow-2' style={{ height: '150px', width: '150px'}}>
                    <div className='pa3'>
                        <img style={{paddingTop: '10px'}} alt='logo' src={brain} width='100' height='100'/></div>
                </div>
            </Tilt>
        </div> 
    );
}

export default Logo;