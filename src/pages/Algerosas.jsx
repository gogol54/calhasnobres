import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Product from '../components/Product'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { data } from '../dataset'

const Container = styled.div`
  margin: 20px;
  background-color: #211F20;
  width: 100%;
  height: auto;
  background-size: cover;
  border-radius: 0px;
  margin-left: 230px;
  max-width: 80%;
  @media (max-width: 920px) and (min-width: 550px)  {
    margin-left: 180px;
    width: 75%;
    max-width: 75%;
    height: auto;
  }
  @media (max-width: 540px) {
    margin-left: 60px;
    width: 85%;
    max-width: 85%;
    height: auto;
  }
`
const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  position:relative;
`
const BoxToutchable = styled.div`
  background-color: #3d3c3d;
  flex: 3;
`
const WidgetBox = styled.div`
  width: 250px; 
  height: 180px;   
  background-color:rgba(0,0,0,0.03);
  cursor: pointer;
  margin: 20px;
  &:hover {
    opacity: 0.4;
  }
`
const BoxImage = styled.img`
  margin: 10px;
  width: 92%;
  height:90%;
  z-index:2;
  object-fit: cover;
`

const content = (
  <div className='container' style={{backgroundColor: 'green'}}>
    texto ue Sidebar que barbaro
  </div>)
    
const Algerosas = () => {
  const flag = 'algerosas'
  return (
    <>
    <Navbar /> 
    <Sidebar />
    {content}
    <Product data={data} flag={flag}/>
    <Footer />
    </>
  )
}

export default Algerosas