import React, { useRef } from 'react'
import { auth } from "../firebase";
import "./SignUpScreen.css"

function SignUpScreen() {
const emailRef=useRef(null);
const passwordRef=useRef(null);

const register = (e)=>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(

      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser)=>{
console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message);
    }
  );
};
const SignIn=(e)=>{
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message)
    })
}



  return (
    <div className='Signupscreen'>
        <form>
<h1>Sign In</h1>
<input ref={emailRef} type="email" placeholder='Email Address/Phone Number' />
<input ref={passwordRef} type="password"placeholder="Password"/>
<button type="submit" onClick={(SignIn)}>Sign in

</button>
<h4>
    <span className='Signupscreen_gray'>New to Netflix? </span>
    <span className='Signupscreen_link' onClick={(register)}>Sign up now</span>
</h4>

        </form>
    
    
    
    
    </div>
  )
}

export default SignUpScreen