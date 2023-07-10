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
const TittleTopic = styled.h4`
  font-weight: 300;
  color: aquamarine;
  margin: 20px;
  @media (max-width: 540px) {
        text-align: center;
    }
`
const MessageText = styled.span`
  font-size: 18px;
  margin: 20px;
  font-weight: 300;
  max-width: 100%;
`
const Topics = styled.div`
  margin: 10px;
  margin-left: 20px;
  flex: 1;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: inline;
  margin-top: 10px;
  @media (max-width: 920px) and (min-width: 550px)  {
    flex-direction: column;
  }
  @media (max-width: 540px) {
    flex-direction: column;
  }
`
const Links = styled.a`
  color: aquamarine;
  text-decoration: none;
  &:hover{
    color: #c7c7c7;
    text-decoration: none;
  }
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
  <Container>
    <Title> Algerosas </Title>
    <hr style={{border: '1px solid aquamarine'}}/>
    <Topics>
      <MessageText>
      As algerosas são elementos arquitetônicos e de proteção localizados na parte externa de um telhado, na área onde o telhado 
      se estende além das paredes do edifício. Eles têm diversas funcionalidades e características, incluindo:
      </MessageText>
    </Topics>
    <Wrapper>
      <Topics>
        <TittleTopic>Funcionalidades e características</TittleTopic>
        <MessageText>
          <ul>
            <li>
              <span style={{color: 'aquamarine'}}>Proteção contra intempéries: </span>As algerosas ajudam a proteger as paredes internas do edifício, evitando que a 
              água da chuva escorra diretamente sobre elas. Isso ajuda a prevenir a deterioração das paredes e a 
              infiltração de água no interior da estrutura.
            </li>
            <li>
              <span style={{color: 'aquamarine'}}>Direcionamento da água:</span> As algerosas também direcionam a água da chuva para longe da base do edifício. 
              Ajudando a evitar que a água se acumule próximo às fundações, o que pode levar a problemas de umidade
              e danos estruturais.
            </li>
            <li>
              <span style={{color: 'aquamarine'}}>Estética:</span> Além de suas funcionalidades práticas, as algerosas também têm um papel estético na arquitetura. 
            </li>
          </ul>
        </MessageText>
      </Topics>
    </Wrapper>
    <Topics>
      <MessageText>   
      As características das algerosas podem variar dependendo do estilo arquitetônico do edifício e do projeto específico. 
      Eles podem ter diferentes larguras, formas e materiais de construção.
      Em resumo, as algerosas desempenham funções importantes, como proteção contra intempéries, direcionamento da água, 
      infiltrações, entre outras. 
      Sua presença é fundamental para a manutenção e a durabilidade da estrutura, bem como para a aparência do edifício.
      </MessageText>
    </Topics>
  </Container>)
    
const Algerosas = () => {
  const flag = 'Algerosas'
  return (
    <div style={{backgroundColor: '#211F20'}}>
    <Navbar /> 
    <Sidebar />
    {content}
    <Product data={data} flag={flag}/>
    <br /><br />
    <Footer />
    </div>
  )
}

export default Algerosas