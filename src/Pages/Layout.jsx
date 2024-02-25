import React from 'react'
import { Outlet } from 'react-router'
import { Header } from './Header/Header'
import Footer from './Footer'
import CountDown from './CountDown/CountDown'

function Layout() {
  return (
    <>
        
       
        <Header />
        <CountDown/>
        <br />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout