import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Product from '../components/Product'
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
const TittleTopic = styled.h3`
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
const content = (
  <Container className='container' >
    <Title> 
      Calhas e Rufos<span style={{fontSize: '24px'}}></span> 
    </Title> 
    <div>
        <TittleTopic>Tipos de calhas</TittleTopic>
        
        <TittleTopic>Qual calha escolher para a minha casa</TittleTopic>
        <MessageText> 
          A calha é uma estrutura instalada no telhado que da sua casa que serve essencialmente para fazer o escoamento 
          da água da chuva. Por conta disso, é comum encontrarmos, no mercado, diferentes modelos de calhas disponíveis, 
          cada uma sendo mais adequada a um tipo específico de construção. De um modo geral, um profissional pode ajudá-lo 
          a definir que tipo de calha de chuva é mais ideal para a sua residência, porque a escolha depende de fatores como 
          o modelo de telha instalado, o tamanho do telhado e o encaixe da construção, além do tipo de escoamento esperado. 
          Um dos modelos de calha mais comum é a calha de PVC. Mais barata que as demais e mais fácil de ser pintada que as 
          calhas feitas de metal, esse modelo costuma resistir ao tempo de modo satisfatório e apresenta uma resistência contra
          intempéries da natureza. A parte mais legal dessa opção é que é que se trata de um material leve. Porém, também por
          isso, não suporta pesos muito grandes, então é necessário tomar bastante cuidado, tudo bem? Caso você more próximo 
          à praia e esteja preocupado com as ações da maresia, talvez seja uma boa ideia investir nas calhas de aço galvanizado.
          Resistentes como as de PVC, mas com uma força mais proeminente, essas peças suportam pesos maiores e não se quebram
          com facilidade. As calhas de alumínio, da mesma forma, não enferrujam com facilidade e apresentam igual resistência 
          ao acúmulo de peso, sem correrem o risco de deformarem. O importante é escolher o modelo que melhor atende às suas 
          necessidades e melhor combina com a estrutura da sua casa. Pense bastante no design final, 
          para que o projeto não destoe do que você tinha imaginado inicialmente. 
        </MessageText> 
        <TittleTopic>O que posso fazer para ajudar a escoar a água do meu telhado</TittleTopic>    
        <MessageText>     
            Uma boa dica é investir, além das calhas, em materiais chamados de rufos. A estrutura, que é feita geralmente 
            de metal, serve para evitar que a água da chuva se infiltre na sua casa, seja no telhado ou nas paredes. Instalá-los 
            é importante porque evita problemas estruturais a longo prazo, como mofo e fungos. Na Leroy Merlin, você encontra 
            rufos em diversos tamanhos e medidas, sendo possível adquirir o modelo que melhor se encaixa na sua casa e no seu 
            bolso. É possível escolher entre peças em branco, cinza ou marrom, o que permite que você compre aquelas que menos 
            ficam em evidência na sua casa. Mas fique atento: é importante que você faça as instalações da maneira adequada, 
            porque apenas um desvio pode afetar o resultado final e a funcionalidade do produto. O mais indicado é chamar um 
            profissional para encaixar as peças, que, a depender do modelo, precisam ter uma distância grande ou pequena entre si.
            Além disso, alguns rufos são mais adequados a serem instalados do lado de dentro da sua casa, enquanto outros são 
            específicos para o lado de fora. Tenha a certeza de estar adquirindo o modelo certo antes de comprá-lo.
        </MessageText> 
    </div> <br />
    
  </Container>)
  
const Calhas = () => {
  const flag = 'Calhas'
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

export default Calhas