import React from 'react'
import Navbar from './../Navbar/Navbar';
import {Outlet}  from 'react-router-dom'
import { Helmet } from 'react-helmet';
export default function Main({curruser,remove}) {
  return <div>
       <Helmet>
      <title>Home</title>
      </Helmet>
  <Navbar curruser={curruser} remove={remove}/>
   <Outlet />
  </div >
}
