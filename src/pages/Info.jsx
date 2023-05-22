import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import image from '../assets/piazada.jpeg'

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
const SubTitle = styled.h5`
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
const MapBox = styled.div`
    width: 100%;
    @media (max-width: 920px) and (min-width: 550px) {
        margin-left: 40px;
        width: 90%;
    }
    
`
const content = (
  <Container className='container container-fluid'>
    <Title> Calhas nobres, fabricação de estruturas metálicas </Title>
    <SubTitle>Buscando soluções com inovação, conforto e qualidade </SubTitle>
    <div>
      <Wrapper>
        <Topics>
          <TittleTopic>Inovação e conforto</TittleTopic>
          <MessageText>Considerando as distintas arquiteturas atuais no mercado, a Calhas Nobres Chapecó percebeu a necessidade de inovar no mercado da funelaria e incluiu no catálogo diversas opções de acabamentos, entregando um produto funcional e seguro para seus clientes, com toques requintados que garantem o diferencial entre as demais empresas. </MessageText>
        </Topics>
        <Topics>
          <TittleTopic>Qualidade</TittleTopic>
          <MessageText>Quando colocamos qualidade como um fator essencial no nosso produto, é em razão da busca do melhor material possível para nossos clientes. Sabendo que assim, reduz a chance de uma manutenção antes de um prazo comum ou até mesmo sem tal necessidade. </MessageText>
        </Topics>
      </Wrapper>
        <Wrapper>
          <ImageBox 
            src='https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/piazadacroped.jpeg?alt=media&token=c03f494f-2ed5-40ce-91d5-6ad7fcebae7f'
          />
          <Post>
          <TittleTopic>
            <MessageText >Idealizado pelos fundadores Elton Regis da Silva Medeiro e Michael Machado, a empresa Calhas Nobres, em seu ascendente primeiro ano, garante um serviço com foco na excelência, onde deve ser levado em consideração os mais de 10 anos de experiência dos funileiros, que buscam a entrega dos diversos produtos elaborados para atender aos clientes mais exigentes do oeste catarinense. Os projetos elaborados consistem no corte, dobra e montagem de estruras metálicas, limpeza e troca de telhados, além de garantir a manutenção das instalações buscando a segurança dos nossos clientes.</MessageText>
            <MiniBox>
                <Avatar 
                    src='https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png'
                    alt='icon founder'
                />
                <SpanClass> Elton Regis</SpanClass>
                <Avatar 
                   src='https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png'
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
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20das%20Bromelias,%20331%20E.%20Chapec%C3%B3,%20SC%20-%20Brasil.+(Calhas%20Nobres)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/distance-area-calculator.html">
              measure distance on map
            </a>
        </iframe>
    </MapBox>
  </Container>)

const Info = () => {
  return (
  <div style={{backgroundColor: '#211F20'}}>
    <Navbar /> 
    <Sidebar />
    {content}
    <Footer />
  </div>
  )
}

export default Info