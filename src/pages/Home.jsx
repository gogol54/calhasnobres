import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const content = (
  <div className='container' style={{backgroundColor: 'green'}}>
    teste
    testete
    teste 
    teste 
    testebrbr
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>)

const Home = () => {
  return (
    <>
      <Navbar /> 
      <Sidebar />
        {content}
      <Footer />
    </>
  )
}

export default Home