import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {
    SecurityUpdateGood,
    Toys,
    Gavel,
    ArrowForward
  } from '@mui/icons-material'

const Container = styled.div`
  margin: 20px;
  background-color: #211F20;
  width: 100%;
  height: auto;
  background-size: cover;
  border-radius: 10px;
  margin-left: 230px;
  max-width: 80%;
  color: white;
  @media (max-width: 920px) and (min-width: 550px)  {
    margin-left: 180px;
    width: 75%;
    max-width: 75%;
    height: auto;
  }
  @media (max-width: 540px) {
    margin-left: 40px;
    width: 85%;
    max-width: 85%;
    height: auto;
  }
`
const Title = styled.h2`
  margin: '10px';
  margin-left: 40px;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 300;
  @media (max-width: 540px) {
    margin: '10px';
    font-size: 24px;
    margin-left: 40px;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 300;
  } 
`
const ShadowBox = styled.div`
    flex:1;
    -webkit-box-shadow: 0px 0px 11px -1px #c5c3c3; 
    box-shadow: 0px 0px 11px -1px #c5c3c3;
    padding: 10px;
    margin: 40px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const MiniAnimation = styled.div`
    border: 10px solid teal;
    border-radius: 10px;
    background-color: #F2BC26;
    width: 100px;
    height: 100px;
    margin: 10px;
    bottom: 20px;
`
const IconPosition = styled.div`
    margin-top: 150px;
`
const content = (
  <Container className='container' >
    <Title> 
        Calhas e Rufos<span style={{fontSize: '24px'}}></span> 
    </Title> 
    Como receber nossa visita
    <Wrapper>
        <ShadowBox> 
            <center>
                <MiniAnimation>
                    <SecurityUpdateGood 
                        style={{
                            fontSize:'60px',
                            marginTop: '10px', 
                            color: '#211F20'
                        }}/>
                </MiniAnimation>
                
            </center>
            
           1. Entre em contato pelos números disponíveis, ou através do chat e agende um atendimento prévio.
        </ShadowBox>
        <IconPosition>
            <ArrowForward />
        </IconPosition>
        <ShadowBox> 
            <center>
                <MiniAnimation>
                    <Toys 
                        style={{
                            fontSize:'60px',
                            marginTop: '10px', 
                            color: '#211F20'
                        }}
                    />
                </MiniAnimation>
            </center>
           2. Tenha alguém disponível para nos receber no horário combinado.
        </ShadowBox>
        <IconPosition>
            <ArrowForward />
        </IconPosition>
        <ShadowBox> 
            <center>
                <MiniAnimation>
                    <Gavel 
                        style={{
                            fontSize:'60px',
                            marginTop: '10px', 
                            color: '#211F20'
                        }}
                    />
                </MiniAnimation>
               
            </center>
           3. Realizaremos todos os serviços solicitados que forem necessários na sua casa.
        </ShadowBox>
    </Wrapper>
  </Container>)
  
const Calhas = () => {
  return (
  <div style={{backgroundColor: '#211F20'}}>
    <Navbar /> 
    <Sidebar />
      {content}
    <Footer />
  </div>
  )
}

export default Calhas