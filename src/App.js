import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, selectuser } from './features/counter/userSlice';
import { logout } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  

//   const user= {name:"sunny",
// }//for homescreen
const user=useSelector(selectuser); // for login screen
const dispatch=useDispatch();

//for knowing wheather the state changed or not
useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged((UserAuth)=>{
    if(UserAuth)
      {//logged in
        
        dispatch(login({
          uid: UserAuth.uid,
          email: UserAuth.email,
        })
      );
      }
      else{
        //logged out
        dispatch(logout());
      }
  });
  return unsubscribe;
}, [dispatch]);


  return (
    <div className="app">
    <Router>
  {!user?(
    <LoginScreen/>
  ):(

        

     

      <Routes>
         <Route exact path="/profile" element={<ProfileScreen />} />

        <Route exact path="/" element={<HomeScreen />} />

      </Routes>


)}
    </Router>
  </div>
);

}
export default App;
