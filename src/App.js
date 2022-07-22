import React, { } from 'react';
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeParent from './components/Home';
import Account from './components/Account';
import ForgetPassword from './components/ForgetPassword';
import AddNumber from './components/AddNumber';

// import { getDoc, doc, } from 'firebase/firestore';
// import { db, auth } from './components/Firebase';


// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       subScriberList :[]
//     }
//   }
//   render(){
//     return(
//       <BrowserRouter>

//         <AuthProvider>
//           <Routes basename={}>
//             <Route exact path='/' element={<Home />} />
//             <Route path='/signup' element={<Signup />} />
//             <Route path='/login' element={<Login />} />
//             <Route path='/account' element={<Account />} />
//             <Route path='/forgetPassword' element={<ForgetPassword />} />
//             <Route path='/addNumber' element={<AddNumber />} />
//           </Routes>
//         </AuthProvider>
//       </BrowserRouter>

//     )
//   }
// }
function App() {
  return (
    <BrowserRouter>

    <AuthProvider>
      <Routes>
      <Route exact path='/' element={<HomeParent/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/forgetPassword' element={<ForgetPassword/>}/>
      <Route path='/addNumber' element={<AddNumber/>}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
