import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
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
const BoxFrame = styled.div`
  width: 100%;
  float: bottom;
  @media (max-width: 920px) and (min-width: 550px)  {
    float: none;
  }
  @media (max-width: 540px) {
    float: none;
  }
`
const Title = styled.h1`
  margin: '10px';
  margin-left: 20px;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 300;
  @media (max-width: 920px) and (min-width: 550px)  {
    margin-left: 20px;
  }
  @media (max-width: 540px) {
    margin-left: 10px;
  }
`
const SubTitle = styled.h4`
  margin: '10px';
  margin-left: 20px;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  @media (max-width: 920px) and (min-width: 550px)  {
    margin-left: 20px;
  }
  @media (max-width: 540px) {
    margin-left: 10px;
  }
`
const ImageBox = styled.img`
  flex: 2;
  max-width: 42%;
  height: 500px;
  object-fit: cover;
  margin-left: 20px;
  @media (max-width: 920px) and (min-width: 550px)  {
    flex-direction: column;
    max-width: 85%;
    height: 300px;
    border-radius: 10px;
    
  }
  @media (max-width: 540px) {
    flex-direction: column;
    max-width: 85%;
    height: 300px;
    border-radius: 10px;
    
  }
`
const Topics = styled.div`
  margin: 20px;
  flex: 2;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: inline;
  margin-top: 30px;
  margin-bottom: 50px;
  @media (max-width: 920px) and (min-width: 550px)  {
    flex-direction: column;
  }
  @media (max-width: 540px) {
    flex-direction: column;
  }
`
const Post = styled.div`
  flex: 2;
  margin-left: 40px;
  margin-right: 20px;
`
const TittleTopic = styled.h3`
  font-weight: 300;
`
const MessageText = styled.span`
  font-size: 16px;
  font-weight: 300;
`
const MiniBox = styled.div`
  flex: 2;
  margin: 20px;
  display: flex; 
  flex-direction: row;
  @media (max-width: 540px) {
    margin-bottom: 10px;
    flex-direction: column;
    margin: 10px;
  }

`
const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid aquamarine;
  object-fit: cover;
  margin-right: 10px;
  width: 150px;
  height: 150px;
  cursor: pointer;
`
const SpanClass = styled.span`
  font-weight: bold;
  font-size: 14px;
  font-family: 'Red Hat Dispaly', sans-serif;
  @media (max-width: 920px) and (min-width: 550px) {
    margin-bottom: 20px;
  }
  @media (max-width: 540px) {
    margin-bottom: 20px;
  }
`
const MapBox = styled.div`
  width: 100%;
  @media (max-width: 920px) and (min-width: 550px) {
    margin-left: 40px;
    width: 90%;
  }
`

const Info = () => {
  const [pressed, setPressed] = useState(false) 
  let [identify, setIdentify] = useState(null)
  const handleClick = (value) => {
    setPressed(true)
    setIdentify(value)
  }

  return (
  <div style={{backgroundColor: '#211F20'}}>
    <Navbar /> 
    <Sidebar />
      <Container className='container container-fluid'>
        <Title> Calhas nobres, corte dobra e instalação de calhas e algerosas </Title>
        <SubTitle>Buscando soluções com inovação, conforto e qualidade </SubTitle>
        <div>
          <Wrapper>
            <Topics>
              <TittleTopic>Inovação e conforto</TittleTopic>
              <MessageText>
              Considerando as distintas arquiteturas atuais no mercado, a Calhas Nobres Chapecó percebeu a necessidade
              de inovar no mercado da funelaria. Diante disso, incluiu no catálogo diversas opções de acabamentos, entregando 
              um produto funcional e seguro para seus clientes, com toques requintados que garantem o diferencial entre as 
              demais empresas.
              </MessageText>
            </Topics>
          <Topics>
          <TittleTopic>Qualidade</TittleTopic>
            <MessageText>Quando colocamos qualidade como um fator essencial no nosso produto, é em razão da busca do melhor material possível para nossos clientes. Sabendo que assim, reduz a chance de uma manutenção antes de um prazo comum ou até mesmo sem tal necessidade. </MessageText>
          </Topics>
        </Wrapper>
        <Wrapper>
          <ImageBox 
            src='https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/calhasnowimageinfo.jpeg?alt=media&token=5bc263bd-01c8-4957-84cd-461f582b862a'
          />
          <Post>
            <TittleTopic>
              <MessageText >
                Idealizado pelos fundadores Elton Regis da Silva Medeiro e Michael Machado, a empresa Calhas Nobres, 
                em seu ascendente primeiro ano, garante um serviço com foco na excelência, onde deve ser levado em 
                consideração os mais de 10 anos de experiência dos funileiros, que buscam a entrega dos diversos produtos 
                elaborados para atender aos clientes mais exigentes do oeste catarinense. Os projetos elaborados consistem
                no corte, dobra e montagem de estruras metálicas, limpeza e troca de telhados, além de garantir a 
                manutenção das instalações buscando a segurança dos nossos clientes.
              </MessageText>
              
              <MiniBox>
                <Avatar onClick={() => handleClick(1)}
                  src='https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/pussuca.jpeg?alt=media&token=37fcb0ff-e067-46b5-9f66-c74f59ba71f6'
                  alt='icon founder'
                />
                <SpanClass> Elton Regis</SpanClass>
                <Avatar onClick={()  => handleClick(2)}
                  src='https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/mixa.jpeg?alt=media&token=871dc7a4-809c-4aba-9c23-be960704b35d'
                  alt='icon founder'
                />
                <SpanClass> Michael Machado</SpanClass>
              </MiniBox>
            </TittleTopic>
          </Post>
        </Wrapper>
      </div>
      <MapBox>      
        <iframe 
          width="100%" 
          height="400" 
          class="gmap_iframe" 
          frameborder="0" 
          scrolling="no" 
          marginheight="0" 
          marginwidth="0" 
          src="https://maps.google.com/maps?width=771&amp;height=400&amp;hl=en&amp;q=R. Das Margaridas, 725 - Paraíso, Chapecó - SC, 89806-257&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
      </MapBox>
    </Container>
    <Footer />
  </div>
  )
}

export default Info