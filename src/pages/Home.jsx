import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {
  SecurityUpdateGood,
  Toys,
  Gavel,
  Smartphone,
  Lens
} from '@mui/icons-material'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { images } from '../dataset'
import { useNavigate } from "react-router-dom"

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
    margin-left: 60px;
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
const ChatBot = styled.div`
  z-index:1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: inline;
`
const ShadowBox = styled.div`
  flex:1;
  -webkit-box-shadow: 0px 0px 11px -1px #c5c3c3; 
  box-shadow: 0px 0px 11px -1px #c5c3c3;
  padding: 10px;
  margin: 40px;
  background-image: linear-gradient(to right top, #24272a, #2a3335, #313f3d, #3e4b42, #505546);
  color: #cacaca;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }
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

const Legend = styled.h4`
  margin: '10px';
  margin-left: 40px;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 300;
`
const MessageText = styled.span`
  font-size: 18px;
  margin: 20px;
  font-weight: 300;
  max-width: 100%;
`
const ImageSlider = styled.img`
    object-fit: contain;
    margin: 10px;
    width: 1024px;
    height: 576px;
    margin-left: 25px;
    @media (max-width: 540px) {
      width: 376px;
      max-width: 85%;
      height: 400px;
      z-index: -1;
    }
`
const Btn = styled.button`
    position: absolute;
    float: relative;
    bottom: 20px;
    left: 452px;
    height: 40px;
    width: 120px;
    margin-top: 10px;
    @media (max-width: 540px) {
        z-index: 1000;
        bottom: 20px;
        left: 10%;
        height: 40px;
        width: 120px;
    }
`
const ImageTitle = styled.h2`
    position: absolute;
    z-index: 1000;
    top: 20px;
    align-items: center;
    justify-content: center;
    text-shadow: 0px 0px 5px white;
    font-family: 'Red Hat Display', sans-serif;
    float: relative;
    font-weight: bold;
    color: black;
    margin-left: 10%;
`
const Description = styled.p`
    position: absolute;
    z-index: 1000;
    bottom: 50px;
    align-items: center;
    justify-content: center;
    font-family: 'Red Hat Display', sans-serif;
    float: relative;
    font-weight: bold;
    color: black;
    text-shadow: 0px 0px 5px white;
    background-color: transparent;
    margin-left: 35%;
    max-width: 30%;
    @media (max-width: 540px) {
      position: absolute;
      z-index: 1000;
      bottom: 50px;
      align-items: center;
      justify-content: center;
      font-family: 'Red Hat Display', sans-serif;
      margin-left: 10%;
      max-width: 50%;
      font-size: 14px;
      text-shadow: 0px 0px 5px white;
    }
`
const Iframe = styled.iframe`
  margin: 20px;
  border: 2px solid black;
  width: 700px; 
  height: 500px;
    @media (max-width: 540px) {
      width: 376px;
      max-width: 85%;
      height: 400px;
    }
`
const Home = () => {
  const [pressed, onPressed] = useState(false) 
  const history = useNavigate()

  const sendRequest = (e) => {
    e.preventDefault()
    onPressed(!pressed)
}
const handleClick = (id) => {
    console.log(id.toLowerCase())
    if(('Chaminés').includes(id)){
        history('/chamines')
    } else{
        history(`/${id.toLowerCase()}`)
    }
    
}

  const Item = (props) => {
    return (
        <Paper style={{backgroundColor:'black'}} >
            <ImageTitle>{props.item.name}</ImageTitle>
            <Description>{props.item.description}</Description>
            <ImageSlider style={{objectFit: 'cover'}} src={props.item.image}/>
            <Btn className="btn btn-warning" onClick={() => handleClick(props.item.name)}>
                SAIBA MAIS
            </Btn>
        </Paper>
    )
  }
  const content = (<>
  <Container>
    <div>
        <Title>Calhas e Rufos, saiba sobre suas funcionalidades</Title>
        <MessageText>Entre todos os materias de construção civil que estão inclusos no telhado, Calhas e Rufos são os que mais 
            merecem sua atenção, sabendo que são componentes essenciais para a seguração do seu telhado. E portanto, se estiver 
            curioso sobre o que cada um significa, as definições resumidas seriam: Calhas são utilizadas como complemento do 
            telhado, embora podem ser encontradas em outras regiões da cobertura, sua finalidade é escoar a água da chuva; Os 
            Rufos são utilizados para encapamentos, vedação e como auxílio para escoar a água dos telhados.
        </MessageText>
        <center>
            <Iframe 
                src="https://www.youtube.com/embed/fYBy_6dD9Os" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>    
            </Iframe>
        </center>
        <br />
    </div>
    <Legend>Conheça nossos serviços</Legend>
        <Carousel style={{marginLeft: '200px'}}
          NextIcon={<img width='20px' height='20px'
            src="https://icons-for-free.com/iconfiles/png/512/next+right+icon-1320166862802397293.png"/>}
          PrevIcon={<img width='20px' height='20px' src="https://prod.gusto-assets.com/wp-content/uploads/chevron-left-icon.png"/>}
        >
            {
                images.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    <Legend>Solicitando nosso atendimento</Legend> 
    <Wrapper>
      <ShadowBox> 
        <center>
          <MiniAnimation>
            <SecurityUpdateGood 
              style={{
                fontSize:'60px',
                marginTop: '10px', 
                color: '#211F20'
            }} />
          </MiniAnimation> 
        </center> 
        <span style={{fontSize: '20px', color: 'white'}}>1° passo:</span> Agende uma visita através do chat/whatsapp ou entre em contato ligando nos telefones que se encontram no rodapé.
      </ShadowBox>
{/* 
      <IconPosition>
        <ArrowForward /> 
      </IconPosition>
       */}
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
        <span style={{fontSize: '20px', color: 'white'}}>2° passo: </span> Tenha alguém disponível para nos receber no horário combinado.
      </ShadowBox>
      
      {/* <IconPosition>
        <ArrowForward />
      </IconPosition>
     */}
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
        <span style={{fontSize: '20px', color: 'white'}}>3° passo: </span> Realizaremos todos os serviços solicitados que forem necessários na sua casa.
      </ShadowBox>
    </Wrapper>
  </Container>
  </>)
  return (
    <div style={{backgroundColor: '#211F20'}}>
    <Navbar /> 
      <Sidebar />
      {content}
      <div className='container' style={{backgroundColor: '#fafafa'}}>
        <ChatBot>
          <a href="https://api.whatsapp.com/message/P47VSLNIJS2YG1?autoload=1&app_absent=0" className="me-4 text-reset">
            <div className='btn btn-secondary' onChange={(e) => sendRequest(e)} style={{marginRight:'10px'}}>  <Lens fontSize='smaill' color='success'/> Contate-nos <Smartphone />
            </div>
          </a>
        </ChatBot>
      </div>
    <Footer />
    </div>
  )
}

export default Home

