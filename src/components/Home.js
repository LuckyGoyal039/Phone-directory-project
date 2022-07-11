import React, { useState } from 'react';
import NavbarCompWithLogin from './NavBarCompWithLogin';
import NavbarCompWithoutLogin from './NavBarCompWithoutLogin';
import {useAuth} from '../contexts/AuthContext';
import "../style/Home.css";
// import SearchComp from "./SerachComp"
// import {Link} from 'react-router-dom';
import ContactPage from './ContactPage';
import Frame1 from './frame1';
import Frame2 from './frame2';
import Frame3 from './frame3';
import Frame4 from './frame4';


function Home(){
    const {currentUser}=useAuth();
    // function fun1(){
    //     const mess="Are You shure you want to delete account";
    //     if(window.confirm(mess)===true){
            
    //     }
    // }
    return(

        <React.Fragment>
        {(!currentUser)? <NavbarCompWithLogin/> : <NavbarCompWithoutLogin/>}
        {(!currentUser)?<div><Frame1/> <Frame2/> <Frame3/></div>:<Frame4/>}
        <ContactPage/>
        </React.Fragment>
    )
}

export default Home;