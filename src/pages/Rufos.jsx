import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const content = (
  <div className='container' style={{backgroundColor: 'green'}}>
    
  </div>)
const Rufos = () => {
	return (
	<>
    <Navbar /> 
    <Sidebar />
    {content}
    <Footer />
	</>
	)
}

export default Rufos