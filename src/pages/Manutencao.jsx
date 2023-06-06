import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Product from '../components/Product'
import { data } from '../dataset'
import styled from 'styled-components'

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
    <Title>Limpeza e Manutenção</Title>
    <hr style={{border: '1px solid aquamarine'}}/>
    <Topics>
        <MessageText>
        Você também pode contar com Calhas Nobres para garantir a manutenção das suas edificações, reforma de coberturas, 
        selante para evitar vasamentos, limpeza de calhas, troca de componentes, enfim, todo e qualquer serviço qual disponibilizamos
        também a instalação. abaixo encontra-se uma lista de todos os nossos serviços para fins de manutenção:
        </MessageText>
    </Topics>
    <Wrapper>
        <Topics>
            <TittleTopic>Reformas</TittleTopic>
            <MessageText>
                <ul>
                    <li>
                        Coberturas: Selagem de buracos, troca de telhas, troca de coberturas, limpeza de telhados em geral.
                    </li>
                    <li>
                        Calhas: Selagem de goteiras, limpeza de filtros, remoção folhas e demais sujeiras causadas
                        pelos temporais.
                    </li>
                    <li>
                        Algerosas: Manutenção geral para evitar goteiras e umidade na sua casa.
                    </li>
                    <li>
                        Chaminés: Remoção de sujeiras que podem causar mais dano na atmosfera. 
                    </li>
                </ul>
            </MessageText>
        </Topics>
    </Wrapper>
    </Container>
 )
const Manutencao = () => {
  const flag='Manutencao'
  return (
  <div style={{backgroundColor: '#211F20'}}>
    <Navbar /> 
    <Sidebar />
    {content}
    <Product data={data} flag={flag} />
    <Footer />
  </div>
  )
}

export default Manutencao