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
    <Title>Chaminés</Title>
    <hr style={{border: '1px solid aquamarine'}}/>
    <Topics>
        <MessageText>
        A chaminé é uma estrutura vertical projetada para a exaustão de gases de combustão, fumaça, vapores ou outros subprodutos 
        resultantes da queima de materiais. Elas são comumente encontradas em casas, edifícios comerciais e industriais para 
        fornecer uma saída segura para os produtos da combustão. A chaminé possui várias funcionalidades importantes,
        e abaixo, uma lista para melhor entendimento:
        </MessageText>
    </Topics>
    <Wrapper>
        <Topics>
            <TittleTopic>Principais definições</TittleTopic>
            <MessageText>
                <ul>
                    <li>
                    <span style={{color: 'aquamarine'}}>Exaustão de gases de combustão:</span> A função primordial de uma chaminé é proporcionar uma saída segura 
                    e eficiente para os gases de combustão resultantes da queima de materiais, como lenha, carvão, gás 
                    ou óleo. Ela permite que os gases sejam liberados para fora da estrutura, evitando sua acumulação no 
                    ambiente interno.
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Ventilação:</span> Além de exaurir os gases de combustão, a chaminé também promove a ventilação adequada do 
                    ambiente. Ela ajuda a eliminar fumaça, vapores, odores e outros poluentes gerados durante o processo 
                    de queima, mantendo o ar interno limpo e saudável.
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Prevenção de incêndios:</span> Uma chaminé adequadamente projetada ajuda a prevenir incêndios. 
                    Ela direciona os gases quentes para fora do ambiente, reduzindo o risco de ignição de materiais 
                    inflamáveis próximos à fonte de calor.
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Proteção da estrutura:</span> A chaminé desempenha um papel importante na proteção da estrutura da edificação.
                    Ela permite a liberação de calor e gases tóxicos gerados pela queima de combustíveis, evitando o acúmulo 
                    e a corrosão desses elementos nas estruturas internas, como paredes e telhados.
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Controle de temperatura:</span> A chaminé auxilia no controle da temperatura do ambiente. Ela permite a 
                    saída de ar quente, ajudando a regular a temperatura interna e proporcionando conforto térmico.
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Eficiência energética:</span> Uma chaminé bem projetada e construída contribui para a eficiência energética. 
                    Ela permite a retirada adequada dos gases de combustão, aumentando a eficiência da queima e reduzindo o 
                    desperdício de energia.
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Segurança: </span>A presença de uma chaminé segura e em bom estado de conservação é essencial para garantir a 
                    segurança das pessoas e das estruturas. Ela evita a entrada de gases tóxicos no ambiente interno, 
                    minimizando os riscos à saúde e promovendo a segurança geral do local.
                    </li>
                </ul>
            </MessageText>
        </Topics>
    </Wrapper>
    

  </Container>)
const Chamines = () => {
  const flag = 'Chamines'
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

export default Chamines