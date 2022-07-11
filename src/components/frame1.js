
import React from 'react';
import "../style/SearchComp.css";
import {db, auth} from './Firebase';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
export default function Frame1(){
        async function handleSubmit(){
            try{
                const data={
                    allUser: {
                        User1: ["rahul", 123]
                    }
                };
                const docref=await setDoc(doc(db, "Demodata", auth.currentUser.uid),data,{capital:true}, {merge:true})
                console.log(docref.id);
            }catch(e){
                console.log(e);
            }
        }
        return(
            <button onClick={handleSubmit}>Add</button>
        )
}