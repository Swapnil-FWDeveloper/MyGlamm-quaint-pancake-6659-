import React from 'react'
import {Routes, Route} from "react-router-dom"
import Bath_Body from './Pages/Bath_Body'
import Cart from './Pages/Cart'
import Collection from './Pages/Collection'
import HairCare from './Pages/HairCare'
import Home from './Pages/Home'
import Loding from './Pages/Loding'
import Login from './Pages/Login'
import Makeup from './Pages/Makeup'
import MyglammStudio from './Pages/MyglammStudio'
import Offers from './Pages/Offers'
import Rewards from './Pages/Rewards'
import Sanitizing_Care from './Pages/Sanitizing_Care'
import SkinCare from './Pages/SkinCare'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Bath Body' element={<Bath_Body/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/Error' element={<Error/>} />
        <Route path='/HairCare' element={<HairCare/>} />
        <Route path='/Loding' element={<Loding/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Makeup' element={<Makeup/>} />
        <Route path='/MyglammStudio' element={<MyglammStudio/>} />
        <Route path='/Offers' element={<Offers/>} />
        <Route path='Rewards' element={<Rewards/>} />
        <Route path='/Sanitizing Care' element={<Sanitizing_Care/>} />
        <Route path='/SkinCare' element={<SkinCare/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
