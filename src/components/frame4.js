import React, { useEffect } from 'react';
import "../style/SearchComp.css";
import { db, auth } from './Firebase';
import { setDoc, doc, getDoc } from "firebase/firestore";
export default function Frame4() {
    let showArray;
    useEffect(() => {

        async function handleSubmit() {
            try {
                const docRef = doc(db, "UserData", auth.currentUser.uid);
                const docSnap = getDoc(docRef);
                if ((await docSnap).exists()) {
                    const demo = (await docSnap).data();
                    for (const key in demo) {
                        console.log(`${demo[key][0]} ${demo[key][1]} ${demo[key][2]}`);
                        showArray[key] = demo[key];
                    }

                } else {

                    console.log("data not found");
                }

            } catch (e) {
                console.log(e);
            }
        }
        handleSubmit();
    })
    // async function handleSubmit() {
    //             try {
    //                 const docRef = doc(db, "UserData", auth.currentUser.uid);
    //                 const docSnap = getDoc(docRef);
    //                 if ((await docSnap).exists()) {
    //                     const demo = (await docSnap).data();
    //                     for (const key in demo) {
    //                         console.log(`${demo[key][0]} ${demo[key][1]} ${demo[key][2]}`);
    //                         showArray[key]=demo[key];
    //                     }

    //                 } else {

    //                     console.log("data not found");
    //                 }

    //             } catch (e) {
    //                 console.log(e);
    //             }
    //         }
    //         handleSubmit();
    const arr = ["lucky", "keshav", "ashish"];
    return (
        <React.Fragment>
            {
                // arr.map(x => <h1>{x}</h1>)
                // showArray.map(ele => <p>{ele}</p>)
            }
        </React.Fragment>
    )
}