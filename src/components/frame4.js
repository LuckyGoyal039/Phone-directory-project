import React from "react";
import "../style/SearchComp.css";
import "../style/frame4.css";

function Frame4(props) {
  return (
    <div className="background4">
      <table className=" table1 table table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Full Name</th>
            <th scope="col">Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((val) => (
            <tr>
              <th scope="row">{val[0]}</th>
              <td>{val[1]}</td>
              <td>{val[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Frame4;
