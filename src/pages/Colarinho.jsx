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
    <Title> Colarinho </Title>
    <hr style={{border: '1px solid aquamarine'}}/>
    <Topics>
        <MessageText>
        Pode ser definico como sendo o acabamento utilizado no encontro entre o telhado e a chaminé de uma churrasqueira. 
        O colarinho é uma peça que tem a função de fazer o acabamento estético e garantir a vedação adequada nessa área.
        </MessageText>
    </Topics>
    <Wrapper>
        <Topics>
            <TittleTopic>Recomendações</TittleTopic>
            <MessageText>
            O colarinho é colocado em torno da chaminé para proteger a passagem de água/infiltração do telhado e  
            proporcionar uma aparência esteticamente agradável. Geralmente, é feito de materiais duráveis e resistentes às 
            intempéries, como metal ou plástico resistente ao UV.
            Ao instalar o colarinho no telhado, é importante garantir uma vedação adequada. 
            Isso pode ser feito utilizando selantes apropriados para telhados, como silicone ou mastique, criando assim, uma barreira
            contra a entrada de água.
            </MessageText>
            <br />
            <MessageText>
            Além de fornecer proteção contra vazamentos, o colarinho também ajuda a manter a estética do telhado e da chaminé 
            harmonizada. Ele pode ser projetado para se encaixar perfeitamente ao redor da chaminé, criando um acabamento limpo 
            e profissional.
            É importante observar que as especificidades do colarinho podem variar dependendo do tipo de churrasqueira, 
            do material do telhado e da chaminé, bem como das preferências individuais. Para garantir a escolha adequada do 
            colarinho e uma instalação correta, contate-nos.
            </MessageText>
        </Topics>
        
    </Wrapper>    
  </Container>)
const Colarinho = () => {
  const flag = 'Colarinho'
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

export default Colarinho