import React,{useRef} from 'react'
import { signInWithGoogle } from '../../utilities/firebase_config';
import { signOut } from '../../utilities/firebase_config'

export const SignOutButton = () => (
    <button className="btn btn-secondary btn-sm"
        onClick={() => signOut()}>
      Sign Out
    </button>
  )


export const SignInButton = () => (
    <button className="btn btn-secondary btn-sm"
        onClick={() => signInWithGoogle()}>
      Sign with Google
    </button>
  );


export const ButtonRight = () => {
  const ref = useRef(null);
  return (
    <button onClick={()=>
        ref.current.scrollBy({
            left: -(ref.current),
            behavior: "smooth",
        })    
    }>
      <h1>Next</h1>
    </button>
  )
}


export const ButtonLeft = () => {
  const ref = useRef(null);
  return (
    <button onClick={()=>
        ref.current.scrollBy({
            left: (ref.current),
            behavior: "smooth",
        })    
    }>
      <h1>Previous</h1>
    </button>
  )
}

