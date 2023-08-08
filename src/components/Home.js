import React, { useEffect, useState } from "react";
import NavbarCompWithLogin from "./NavBarCompWithLogin";
import NavbarCompWithoutLogin from "./NavBarCompWithoutLogin";
import { useAuth } from "../contexts/AuthContext";
import Frame2 from "./frame2";
import Frame3 from "./frame3";
import Frame4 from "./frame4";
import Frame5 from "./frame5";
import { getDoc, doc } from "firebase/firestore";
import { db, auth } from "./Firebase";
function HomeChild(props) {
  return (
    <React.Fragment>
      <Frame4 list={props.list} />
    </React.Fragment>
  );
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
  }, [list]);

  return (
    <React.Fragment>
      {!currentUser ? (
        <div>
          <NavbarCompWithLogin />
          <Frame2 />
          <Frame3 />
        </div>
      ) : (
        <React.Fragment>
          <NavbarCompWithoutLogin />
          {!list ? <Frame5 /> : <HomeChild list={list} />}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default HomeParent;
