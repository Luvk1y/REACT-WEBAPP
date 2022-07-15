import React from 'react'
import { NavBar } from '../components/Navbar'
import { MainTitle } from '../components/MainTitle'
import { Cards } from '../shared/Cards/Cards'

export const Home = () => {
  return (
        <div>
        <MainTitle></MainTitle>
        <Cards></Cards>
        </div>
  )
}
