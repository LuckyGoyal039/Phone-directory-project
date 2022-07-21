import React from 'react';
import "../style/SearchComp.css";
// import { db, auth } from './Firebase';
// import {updateDoc, deleteField, doc, deleteDoc} from "firebase/firestore";
// import { ListGroup } from 'react-bootstrap';  
import '../style/frame4.css';
// import {FaTrash} from 'react-icons/fa'

function Frame4(props) {
    // async function deleteitem(docNumber){
    //     const userRef=doc(db, 'UserData', auth.currentUser.uid);
    //     // await updateDoc( userRef,
    //     //     {
    //     //         docNumber: deleteField()
    //     //     }
    //     // )
    //     await deleteDoc(userRef);
    // }
    // let showArray;
    // useEffect(() => {?

    /*async function handleSubmit() {
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
//         handleSubmit();*/

    return (
        <div className='background4'>
            <table className=' table1 table table-striped table-hover '>
                <thead>

                    <tr>
                        <th scope='col'>S.NO</th>
                        <th scope='col'>Full Name</th>
                        <th scope='col'>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.list.map((val) => (
                            <tr >
                                <th scope='row'>{val[0]}</th>
                                <td>{val[1]}</td>
                                <td>{val[2]}</td>
                                {/* <td><FaTrash style={{color:"red"}} /></td> */}
                            </tr>
                        )
                        )}
                </tbody>
            </table>
        </div>
    )
}
export default Frame4;