import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Product from '../components/Product'
import { data } from '../dataset'

const content = (
  <div className='container' style={{backgroundColor: 'green'}}>
    importância de manter calhas limpas, limpeza do telhado, etc... selante PU para tankar vazamentos
  </div>)
const Manutencao = () => {
  const flag='Manutencao'
  return (
  <>
    <Navbar /> 
    <Sidebar />
    {content}
    <Product data={data} flag={flag} />
    <Footer />
  </>
  )
}

export default Manutencao