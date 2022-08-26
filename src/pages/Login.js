import React from 'react'
import { MainTitle } from '../components/MainTitle'
import { Registro } from '../shared/registro/Registro'
import { SignInButton,SignOutButton } from "../shared/Buttons/Buttons";

export const Login = () => {
  return (
    <div>
    <MainTitle/>
    <Registro/>
    <SignInButton/>
    <SignOutButton/>
    </div>
  )
}
