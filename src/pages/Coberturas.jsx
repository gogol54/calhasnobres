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
    <Title>Coberturas</Title>
    <hr style={{border: '1px solid aquamarine'}}/>
    <MessageText>
    Calhas Nobres também dispoe de instalação de coberturas, ou seja, se caso você esteja construindo ou queira substituir
    a cobertura da sua casa, contate-nos. Afinal, Existem vários motivos pelos quais alguém pode considerar a troca do telhado
    de uma casa ou edifício. Verifique se alguns destes que estão listados abaixo se adequam ao seu problema:
    </MessageText>
    <Wrapper>
        <Topics>
            <TittleTopic>Prováveis motivos</TittleTopic>
            <MessageText>
                <ul>
                    <li>
                    <span style={{color: 'aquamarine'}}>Idade e desgaste:</span> Com o tempo, os materiais do telhado podem se deteriorar devido à exposição aos 
                    elementos, como sol, chuva, vento e neve. Se o telhado estiver envelhecido e apresentar sinais 
                    visíveis de desgaste, como rachaduras, telhas quebradas, mossas ou perda de integridade estrutural, 
                    pode ser necessário substituí-lo.
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Vazamentos:</span> Se você estiver enfrentando problemas recorrentes de vazamento de água pelo teto, mesmo 
                    após consertos e reparos, pode ser um sinal de que o telhado está comprometido. Vazamentos persistentes
                    podem levar a danos estruturais mais graves, como mofo, deterioração da madeira e danos às paredes
                    internas.
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Eficiência energética:</span> O telhado desempenha um papel importante na eficiência energética de um edifício.
                    Se o seu telhado atual não for isolado adequadamente, permitindo a entrada de calor excessivo no verão ou 
                    a fuga de calor no inverno, você pode considerar a troca para um telhado mais eficiente energeticamente. 
                    Isso pode ajudar a reduzir os custos de aquecimento e resfriamento, além de tornar a casa mais confortável.
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Mudança de estilo:</span> Às vezes, as pessoas optam por trocar o telhado simplesmente para mudar a aparência da casa.
                    Se você está reformando ou atualizando a fachada, a troca do telhado pode ser uma parte importante desse processo. 
                    Existem diferentes estilos, materiais e cores de telhados disponíveis, permitindo que você transforme 
                    o visual da sua casa. 
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Preparação para venda:</span> Se você estiver pensando em vender sua casa, um telhado em más condições pode afetar 
                    negativamente o valor de mercado e o interesse dos compradores. Trocar o telhado antes de colocar a 
                    propriedade à venda pode ser uma estratégia inteligente para aumentar o apelo estético e a confiança dos
                    compradores na qualidade da estrutura.
                    </li>
                    <li>
                    <span style={{color: 'aquamarine'}}>Melhorias de segurança:</span> Em algumas situações, um telhado pode apresentar riscos à segurança. Por exemplo, 
                    se houver partes soltas ou instáveis que possam representar perigo de queda, é essencial substituir o 
                    telhado para garantir a segurança dos ocupantes.
                    </li>
                </ul>
            </MessageText>
        </Topics> 
    </Wrapper>
  </Container>)
const Coberturas = () => {
  const flag = 'Coberturas'
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

export default Coberturas