import React from 'react';
import '../style/frame3.css';
import { MdDoubleArrow } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
export default function Frame3() {
    const navigate = useNavigate();
    function gotoLogin() {
        navigate('/login');
    }
    return (
        <div className='outer_layer'>
            <div className='background1'>

                <img src={require("../addContact_image.png")} className="image1" alt="ContectImage"/>
                <MdDoubleArrow className='arrow' />
                <img src={require("../Database_image.png")} className="image2" alt="DatabaseImage"/>
                <div id="addButton">

                    <button onClick={gotoLogin}>ADD Contect</button>
                </div>
            </div>
        </div>

    )
}