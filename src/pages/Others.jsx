import React from 'react'
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
const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  margin: 20px;
  padding: 20px;
  @media (max-width: 540px) {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    margin: 10px;
    padding: 10px;
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
const Tag = styled.span`
  font-size: 24px;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 500;
  color: aquamarine;
  @media (max-width: 540px) {
    font-size: 18px;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 500;
    color: aquamarine;
  } 
`
const MessageInner = styled.span`
  position: absolute;
  top: 960px;
  width: 60%;
  left: 300px;
  font-size: 18px;
  max-width: 80%;
  text-shadow: 0px 0px 5px black;
  float: relative;
  font-weight: bold;
  @media (max-width: 540px){
    left: 23px;
    margin-top: -90px;
    width: 100%;
    margin-left: 40px;
    font-weight: 300;
    font-size: 18px;
  }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: inline;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (max-width: 920px) and (min-width: 550px)  {
        flex-direction: column;
    }
    @media (max-width: 540px) {
        flex-direction: column;
    }
`
const Topics = styled.div`
  margin: 20px;
  flex: 2;
`
const TittleTopic = styled.h3`
  font-weight: 300;
  color: aquamarine;
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

const MessageTextAligned = styled.div`
    margin: 20px;
    max-width: 100%;
    @media (max-width: 540px) {
        margin-top: 640px;
        font-size: 25px;
        color: white;
    }
`
const content = (
  <Container>
    <Title>A importância da adoção de calhas nos dias de hoje:<Tag> vantagens na implementação de cisternas.</Tag></Title>
    <Image 
      src='https://www.guiadoconstrutor.com.br/assets/uploads/articles/modelos-de-calhas-para-coleta-de-aguas-de-chuva.jpg'
      alt='calha em dia de chuva'
    />
    <MessageInner >
      A ONU relata que até dois terços da população sofrerá com a falta de água até 2050, 
      e isso confirma a necessidade de pesquisas e propostas voltadas para resolução deste problema. 
      Ao considerarmos, implica em mais trabalho, dedicação e adoção de novos meios para garantir água potável e 
      também a segurança alimentar de diversas pessoas.
      Normalmente, as medidas que amenizam o consumo individual da água são: redução da lavagem de calçadas, 
      banhos com tempo reduzido, economia durante o dia-a-dia do condomínio, durante a lavagem das louças e ao lavar roupas. 
      Entretanto, uma alternativa interessante que tem ganhado popularidade, é a adoção de um sistema de cisternas 
      para o reaproveitamento da água da chuva.
    </MessageInner>
    <MessageTextAligned>
        <TittleTopic>O que é uma Cisterna</TittleTopic>
        <MessageText>
            A cisterna é um tipo de sistema que capta a água através das calhas de chuva e reserva para fins domésticos,
            de outra forma, um reservatório de água da chuva com baixo custo que serve para reuso. Atualmente, o uso destes 
            sistemas tem ganhado espaço, justamente por ser uma alternativa eficaz ao considerar a obrigatoriedade da caixa
            d'água em novas instalações (imóveis novos), uma cisterna garante de além de o reservatório a possibilidade de baixar
            o custo mensal do consumo de água tratada, se reutilizando a água reservada para fins específicos. As cisternas
            possuem diversos formatos e tamanhos e podem estar sendo instaladas em casas, apartamentos e condomínios.

        </MessageText><br />
        <MessageText>
            O funcionamento ocorre da seguinte forma: a água é levada através das calhas até um filtro, o filtro é responsável 
            por limpar as impurezas (folhas e galhos) e um freio d'água garante que a entrada da água agite o restante no 
            reservatório e levante partículas sólidas que estejam depositadas no fundo. Uma observação importante, se dá em razão de 
            a água não ser potável, ou seja, não serve para o consumo humano. Porém, pode ser utilizada para lavar calçadas, 
            carros, roupas e até na caixa sanitária, basta garantir uma instalação segura para evitar estar bebendo de uma água
            que pode conter demasiada acidez, poeira, fuligem, sulfato, amônio e nitrato. As cisternas podem estar sendo enterradas,
            principalmente, se forem de maior porte, evitando assim a luz solar e protegendo a proliferação de algas ou outros organismos.
            Enfim, é fundamental a existência de filtros, caso contrário existem mais riscos de contaminação.   
        </MessageText><br />
    
    </MessageTextAligned>
    <Wrapper>
        <Topics>
          <TittleTopic>Vantagens</TittleTopic>
          <MessageText> 
            <ul>
                <li>É ecologicamente correto, visa o aproveitamento da água da chuva ao invés de um recurso híbrido potável.</li>
                <li>Fácil instalação, podendo ser incluída em diferentes construções.</li>
                <li>Economia significante na conta de água, podendo reduzir o gasto em até 50%.</li>
                <li>Diversas dimensões de reservatório, podendo inclusive ser uma minicisterna para caber em cozinhas, 
                    ou áreas de serviço. Uma variação de 80 até 15000 litros.</li>
                <li>Ajuda na redução de enchentes, considerando que parte do que estará armazenado, iria para rios ou lagos.</li>
                <li>Auxilia em crises hídricas, até em áreas de difícil acesso no sertão nordestino, justamente para combater
                    as secas.</li>
                <li>Cultura de sustentabilidade nas construções, garantindo que todas as casas fizessem uso de cisternas.</li>
            </ul>
          </MessageText>
        </Topics>
        <Topics>
          <TittleTopic>Desvantagens</TittleTopic>
          <MessageText>
            <ul>
                <li>Manutenções frequentes: em razão da possível contaminação através dejetos de animais ou animais mortos.</li>
                <li>O interior do reservatório também deve ser limpado com certa frequência.</li>
                <li>Em caso de instalação com a rede de encanamentos, deve ser feita com certo cuidado e por profissionais,
                    evitando qualquer problema futuro. (obs: a água da chuva não é potável e não pode ser ingerida por seres 
                    humanos.)</li>
                <li>Cisternas de plástico podem se deformar com o tempo, indica-se cisternas com filtro anti-UV ou de alvenaria.</li>
                <li>Custos mais altos para cisternas enterradas ou subterrâneas.</li>
            </ul>
          </MessageText>
        </Topics>
      </Wrapper>
    <div>
        <TittleTopic>Cuidados extras</TittleTopic>
        <MessageText>  
            <ul >
                <li className="list-group-item-dark" style={{color: 'white', backgroundColor:'#211F20'}}>
                    Busque evitar a coleta das primeiras chuvas após a instalação, ou escolha a instalação da calha primeiro, garantindo
                    que esta tenha passado por algumas chuvas,e logo em seguida, faça a instalação da cisterna, de outra forma,
                    acople um dispositivo para desviar as primeiras águas. Enfim, previna a cisterna das
                    sujeiras do telhado.
                </li>
                <li className="list-group-item-dark" style={{color: 'white', backgroundColor:'#211F20'}}>
                    Também considera-se fundamental que o reservatório esteja vedado, longe do alcance do sol ou detrimentos animais, 
                    impedindo proliferação de algas.
                </li>
            </ul>
        </MessageText>
    </div>
  </Container>)
  
const Others = () => {
  return (
  <div style={{backgroundColor: '#221F20'}}>
    <Navbar /> 
    <Sidebar />
    {content}
    <Footer />
  </div>
  )
}

export default Others