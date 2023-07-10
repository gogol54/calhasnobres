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

const content = (
  <Container>
    <Title>Coifas</Title>
    <hr style={{border: '1px solid aquamarine'}}/>
    <Topics>
        <MessageText>
        As coifas são dispositivos de ventilação instalados acima de fogões ou cooktops para extrair fumaça, odores e vapores
        gerados durante o cozimento. Aqui estão algumas informações relevantes:
        </MessageText>
    </Topics>
    <Wrapper>
      <Topics>
        <TittleTopic>Utilidades que você precisa saber</TittleTopic>
        <MessageText>
          <ul>
            <li>
              <span style={{color: 'aquamarine'}}>Funcionalidade:</span> As coifas são projetadas para capturar e filtrar efetivamente a fumaça, gordura, odores 
              e vapores gerados durante o cozimento. Elas contêm um sistema de exaustão que 
              remove esses elementos do ar, mantendo o ambiente da cozinha mais limpo e livre de odores indesejados.
            </li>
            <li>
              <span style={{color: 'aquamarine'}}>Tipos de coifas:</span> Existem diferentes tipos de coifas disponíveis, incluindo coifas de parede, coifas de ilha 
              (suspensas do teto), coifas embutidas e coifas de bancada. Cada tipo é adequado para diferentes
              configurações de cozinha e necessidades específicas.
            </li>
            <li>
              <span style={{color: 'aquamarine'}}>Componentes:</span> As coifas geralmente incluem um duto de exaustão para transportar os vapores para fora da 
              cozinha, um ventilador para aspirar o ar, filtros (como filtros de gordura e filtros de carvão ativado) 
              para remover impurezas e um sistema de controle para ajustar a velocidade do ventilador e a iluminação.
            </li>
            <li>
              <span style={{color: 'aquamarine'}}>Vantagens:</span> O uso de uma coifa traz várias vantagens, como a melhoria da qualidade do ar na cozinha,
              a remoção eficiente de odores de alimentos, a prevenção do acúmulo de gordura nas superfícies da 
              cozinha e a redução da condensação e do mofo nas paredes e móveis próximos ao fogão.
            </li>
            <li>
              <span style={{color: 'aquamarine'}}>Considerações de instalação:</span> A instalação adequada da coifa é crucial para garantir seu desempenho eficiente. É importante 
              seguir as instruções do fabricante e, contratar nossos serviços para garantir que o 
              sistema seja instalado corretamente.
            </li>
          </ul>
        </MessageText>
      </Topics>
    </Wrapper>
  </Container>)

const Coifas = () => {
    const flag = 'Coifas'
	return (
	<div style={{backgroundColor: '#211F20'}}>
    <Navbar /> 
    <Sidebar />
    {content}
    <Product data={data} flag={flag}/>
    <Footer />
	</div>
	)
}

export default Coifas