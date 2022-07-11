import React from 'react';
import '../style/demo.css';

function DropDown(){
    return(
    <div className="dropdown">
    <button className="btn btn-secondary " type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
      <li><button className="dropdown-item" type="button">Action</button></li>
      <li><button className="dropdown-item" type="button">Another action</button></li>
      <li><button className="dropdown-item" type="button">Something else here</button></li>
    </ul>
  </div>
  
    )
}

export default DropDown