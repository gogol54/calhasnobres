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
  flex: 2;
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
const content = (
  <Container>
    <Title> 
        Rufos <span style={{fontSize: '24px'}}></span> 
    </Title> 
    <hr style={{border: '1px solid aquamarine'}}/>
   <MessageText>
    Os rufos são elementos essenciais na construção civil, especialmente em coberturas e paredes, que desempenham várias funções
    importantes. Aqui estão algumas informações sobre as funcionalidades, características e razões para a adoção dos rufos.
    </MessageText>
    <Wrapper>
        <Topics>
            <TittleTopic>Funcionalidades </TittleTopic>
            <MessageText>
            <ul>
                <li>
                Proteção contra infiltrações: Os rufos são instalados em locais onde há encontros de elementos construtivos, como telhados, paredes e chaminés.
                Sua principal função é evitar a entrada de água da chuva e prevenir infiltrações, direcionando a água para fora 
                da construção.
                </li>
                <li>
                Direcionamento da água: Os rufos atuam como condutores de água, coletando e direcionando-a para calhas,
                condutores pluviais ou sistemas de drenagem, evitando que a água escorra pelas paredes e cause danos estruturais.
                </li>
                <li>
                Proteção contra umidade: Ao evitar que a água penetre nas estruturas, os rufos contribuem para a prevenção de 
                problemas de umidade, como mofo, fungos e deterioração da estrutura.
                </li>
                <li>
                Estética e acabamento: Além de sua função prática, os rufos também têm um papel estético na construção,
                proporcionando um acabamento visualmente agradável nas áreas de encontro entre diferentes elementos.
                </li>
            </ul>
            </MessageText>
           
        </Topics>
        <Topics>
            <TittleTopic>Características </TittleTopic>
            <MessageText>
            <ul>
                <li>
                Materiais: Os rufos podem ser fabricados em diversos materiais, como alumínio, aço galvanizado, zinco, PVC e galvalume. 
                A escolha do material depende das necessidades específicas do projeto, considerando fatores como durabilidade,
                resistência à corrosão e estética desejada.
                </li>
                <li>
                Formatos e tamanhos: Os rufos podem ter diferentes formatos e tamanhos, adaptando-se às características do 
                local de instalação. Por exemplo, existem rufos retos, curvos e em forma de L, cada um adequado para uma aplicação específica.
                </li>
            </ul>
                
            </MessageText>
        </Topics>
    </Wrapper>
    <TittleTopic>Razões para a adoção dos rufos</TittleTopic>
    <MessageText>
        Prevenção de danos: A instalação adequada de rufos é crucial para prevenir danos causados pela água da chuva, 
        como infiltrações, umidade excessiva e deterioração das estruturas. Portanto, sua adoção é essencial para 
        garantir a durabilidade e integridade da construção.

        Manutenção da estética: Os rufos contribuem para o acabamento estético da construção, proporcionando uma 
        transição suave entre diferentes elementos e evitando problemas visuais causados por manchas de água ou sujeira
        nas paredes.

        Cumprimento de normas e regulamentos: Em muitas regiões, a instalação de rufos é exigida por códigos de
        construção e regulamentos para garantir a segurança e a qualidade das edificações.

        Em resumo, os rufos desempenham um papel fundamental na proteção contra infiltrações, direcionamento adequado 
        da água, prevenção de umidade e proporcionam acabamento estético nas construções. Sua adoção é crucial para 
        garantir a durabilidade, segurança e integridade das estruturas. Recomenda-se sempre contar com profissionais 
        especializados para a instalação correta dos rufos, levando em consideração as necessidades específicas
        </MessageText>
  </Container>)
const Rufos = () => {
    const flag = 'Rufos'
	return (
	<div style={{backgroundColor: '#211F20'}}>
    <Navbar /> 
    <Sidebar />
    {content}
    <Product data={data} flag={flag} />
    <br /> <br />
    <Footer />
	</div>
	)
}

export default Rufos