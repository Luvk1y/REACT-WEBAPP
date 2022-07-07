import React from 'react'
import { DynamicTable } from '../shared/Table/Table'
import { NavBar } from '../components/Navbar'
import { MainTitle } from '../components/MainTitle'

export const Schedule = () => {
  return (
    <div>
    <MainTitle></MainTitle>
    <DynamicTable></DynamicTable>
    </div>
  )
}
