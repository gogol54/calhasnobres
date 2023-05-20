import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const content = (
  <div className='container' style={{backgroundColor: 'green'}}>
    texto ue Sidebar que barbaro
  </div>)
    
const Algerosas = () => {
  return (
    <>
    <Navbar /> 
    {content}
    <Footer />
    </>
  )
}

export default Algerosas