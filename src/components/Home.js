import React, { useEffect, useState } from 'react';
import NavbarCompWithLogin from './NavBarCompWithLogin';
import NavbarCompWithoutLogin from './NavBarCompWithoutLogin';
import { useAuth } from '../contexts/AuthContext';
// import "../style/Home.css";
import Frame2 from './frame2';
import Frame3 from './frame3';
import Frame4 from './frame4';
import Frame5 from './frame5';
import { getDoc, doc, } from 'firebase/firestore';
import { db, auth } from './Firebase';
// {

//     // class HomeParent extends Component {
//     //     constructor(props) {
//     //         super(props);
//     //         this.state = {
//     //             list: "data"
//     //         }
//     //         console.log("Constructor");
//     //     }
//     //     // async addSubscriber(){
//     //     //     try {
//     //     //         const docRef = doc(db, "UserData", auth.currentUser.uid);

//     //     //         const docSnap = getDoc(docRef);
//     //     //         if ((await docSnap).exists()) {
//     //     //             const demo = (await docSnap).data();
//     //     //             // for (const key in demo) {
//     //     //             //     // console.log(`${demo[key][0]} ${demo[key][1]} ${demo[key][2]}`);
//     //     //             //     // showArray[key] = demo[key];

//     //     //             // // }
//     //     //             let subScriberList=this.state.subScriberList;

//     //     //                 subScriberList.push(demo);

//     //     //             this.setState({subScriberList: subScriberList});
//     //     //             console.log(subScriberList);
//     //     //         } else {
//     //     //             console.log("data not found");
//     //     //         }
//     //     //     } catch (e) {
//     //     //         console.log(e);
//     //     //     }
//     //     // }
//     //     componentDidMount() {
//     //         // console.log("inner ComponentDidMount");
//     //         function addSubscriber() {
//     //             const docRef = doc(db, "UserData", auth.currentUser.uid);

//     //             const docSnap = getDoc(docRef);

//     //             const demo = docSnap.data();
//     //             return "lucky";
//     //                             const allData = Object.values(demo);

//     //                 }
//     //                 const x=addSubscriber();
//     //                 this.setState(()=>({
//     //             list: x
//     //         }));
//     //         // console.log(this.state.list);
//     //     }

//     //     render() {
//     //         console.log("render")
//     //         return (
//     //             <React.Fragment>
//     //                 {/* {(!currentUser) ? <NavbarCompWithLogin /> : <NavbarCompWithoutLogin />}
//     //                 {(!currentUser) ? <div><Frame1 /> <Frame1 /> <Frame3 /></div> : <Frame4 />}
//     //             <ContactPage /> */}
//     //                 {/* {this.addSubscriber()}
//     //                 {(!auth.currentUser) ? <NavbarCompWithLogin /> : <NavbarCompWithoutLogin />}
//     //                 <Frame4/> */}
//     //                 <h1>{this.state.list}</h1>
//     //             </React.Fragment>
//     //         )
//     //     }
//     // }

// }
function HomeChild(props) {
    return (
        <React.Fragment>
            <Frame4 list={props.list} />
        </React.Fragment>
    )
}
function HomeParent(props) {
    const { currentUser } = useAuth();
    const [list, setList] = useState();

    useEffect(() => {
        async function addSubscriber() {
            try {
                const docRef = doc(db, "UserData", auth.currentUser.uid);

                const docSnap = getDoc(docRef);
                if ((await docSnap).exists()) {
                    const demo = (await docSnap).data();
                    const allData = Object.values(demo);
                    setList(allData);
                } else {
                    console.log("data not found");
                }
            } catch (e) {
                console.log(e);
            }
        }
        addSubscriber();

    }, [list])

    return (
        <React.Fragment>
            {
                (!currentUser) ?
                    <div>
                        <NavbarCompWithLogin />
                        <Frame2 />
                        <Frame3 />
                    </div>
                    :
                    <React.Fragment>
                        <NavbarCompWithoutLogin />
                        {(!list) ? <Frame5 /> : <HomeChild list={list} />}
                    </React.Fragment>
            }
        </React.Fragment>
    )
}

export default HomeParent;