import React, { useEffect, useRef, useState } from "react";
import "../style/inputform.css";
import { FcIphone, FcManager } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./Firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

function InputForm() {
  const userNameRef = useRef();
  const numberRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [count, setCount] = useState(() => {
    return 0;
  });
  useEffect(() => {
    async function updateCount() {
      const docRef = doc(db, "UserData", auth.currentUser.uid);
      const docSnap = getDoc(docRef);
      if ((await docSnap).exists()) {
        const demo = (await docSnap).data();
        setCount(Object.keys(demo).length + 1);
      } else {
        setCount(1);
      }
    }
    updateCount();
  });
  async function addUser(e) {
    e.preventDefault();
    try {
      setError("");
      let data = new Object();
      data[count] = [count, userNameRef.current.value, numberRef.current.value];
      const obj = doc(db, "UserData", auth.currentUser.uid);
      const docref = await setDoc(obj, data, { merge: true });
      navigate("/");
    } catch (e) {
      setError("Somthing Went Wrong");
    }
  }
  function clickCancle() {
    navigate("/");
  }

  return (
    <React.Fragment>
      {/* {error && <Alert varient="danger">{error}</Alert>} */}
      <div className="background">
        <div className="my-form1">
          <p id="login-text">Create New</p>

          <form onSubmit={addUser}>
            <div>
              <label htmlFor="name" className="form__label">
                Full Name
              </label>
              <br />
              <FcManager />
              <input
                placeholder="Enter Full Name"
                type="text"
                className="form__field"
                name="name"
                id="name"
                required
                ref={userNameRef}
              />
            </div>
            <br />
            <div>
              <label htmlFor="name" className="form__label">
                Mobile Number
              </label>
              <br />
              <FcIphone />
              <input
                placeholder="Enter Mobile Number"
                type="number"
                className="form__field"
                name="name"
                id="password"
                required
                ref={numberRef}
              />
            </div>
            <br />
            <div>
              <button className="login_button btn" onClick={clickCancle}>
                Cancle
              </button>
              <input
                type="submit"
                value="Add+"
                className="login_button button1 btn"
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
export default InputForm;
