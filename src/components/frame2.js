import React from 'react';
import '../style/frame2.css';
export default function Frame2() {
    return (
        <div className='outer_layer'>

            <div className='background1'>

                <h1 className='heading_h1'>Welcome to the Site😃</h1>

                <img src={require("../image3.png")} id="image1" alt="WaitForImage"/>
                <h2 id='heading_h2'>Create A New Account</h2>
                <div className='button_container'>

                    <button className='button1 btn'>SignUp</button>
                    <button className='button1 btn'>LogIn</button>

                </div>
            </div>
        </div>


    )
}