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
  color: white;
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
const Links = styled.a`
  color: aquamarine;
  text-decoration: none;
  &:hover{
    color: #c7c7c7;
    text-decoration: none;
  }
`
const content = (
  <Container className='container' >
    <Title> 
      Calhas <span style={{fontSize: '24px'}}></span> 
    </Title> 
    <hr style={{border: '1px solid aquamarine'}}/>
    <div>
      <MessageText>
        As calhas de chuva são estruturas instaladas nas bordas de telhados, beirais e marquises para coletar e direcionar 
        a água da chuva para longe da estrutura do edifício. Existem vários tipos de calhas de chuva disponíveis, com 
        diferentes materiais, formatos e tamanhos. A seguir, alguns dos tipos mais comuns:
        <ul>
          <li>
            <span style={{color: 'aquamarine'}}>Calhas de alumínio:</span> São fabricadas em alumínio, um material leve, resistente à corrosão e durável. As calhas de alumínio 
            são populares devido à sua baixa manutenção e longa vida útil. Elas estão disponíveis em diferentes cores e podem
            ser pintadas para combinar com a estética da sua casa.
          </li>
          <li>
            <span style={{color: 'aquamarine'}}>Calhas de zinco:</span> As calhas de zinco são resistentes a solda, seguras, de baixa manutenção e custo acessível. São 
            comumente adotadas em cidades que não possuem mar, justamente em razão da maresia, pois esta afeta diretamente 
            na longevidade do material, criando corrosões e demais problemas.
          </li>
          <li>
            <span style={{color: 'aquamarine'}}>Calha galvalume nacional:</span> O tipo de aço galvalume é atualmente um dos melhores materiais para este segmento, 
            dito isto em razão de ser composto por aproximadamente 45% zinco, e os outros 55% sendo fabricados de alumínio e silício,
            ou seja, substâncias de estabilidade eminente, o que garante uma ampla longevidade para suas calhas.
            Enfim, material excelente contra corrosões.
          </li>
        </ul>
      </MessageText>
      <MessageText> 
        Esses são exemplos dos tipos de calhas de chuva disponíveis por Calhas Nobres. 
      </MessageText>
      <TittleTopic>Dicas</TittleTopic>
      <Wrapper>
        <Topics>
          <TittleTopic>Qual calha devo escolher</TittleTopic>
          <MessageText>
            A escolha da calha adequada depende de vários fatores, incluindo: clima da região, estilo do edifício,
            estética desejada, orçamento disponível, entre outros. Algumas considerações importantes ao escolher uma 
            calha, seriam:
            <ul>
              <li>
                <span style={{color: 'aquamarine'}}>Material:</span> Considere os diferentes materiais disponíveis,alumínio, zinco, galvalume e outros, avalie
                suas propriedades, durabilidade, resistência à corrosão e estética. Cada material tem suas 
                vantagens e desvantagens, por isso é importante pesquisar e determinar qual se adapta melhor às suas 
                necessidades.
              </li>
              <li>
                <span style={{color: 'aquamarine'}}>Clima:</span> Leve em consideração as condições climáticas da sua região. Se você mora em uma área com fortes
                chuvas, neve ou ventos intensos, pode ser necessário escolher um material resistente e durável, como 
                galvalume, comprovadamente melhor que o aço galvanizado. Além disso, certifique-se de que a
                calha escolhida tenha a capacidade de lidar com a quantidade de água esperada durante as chuvas.
              </li>
              <li>
                <span style={{color: 'aquamarine'}}>Estilo arquitetônico:</span> Considere o estilo do edifício. Algumas calhas são mais adequadas para edifícios 
                modernos, enquanto outras combinam melhor com construções mais tradicionais.
              </li>
              <li>
                <span style={{color: 'aquamarine'}}>Manutenção:</span> Avalie a quantidade de manutenção necessária para cada tipo de calha. Algumas calhas exigem
                limpeza regular e manutenção para garantir seu bom funcionamento, enquanto outras são mais autolimpantes
                e exigem menos cuidados.
              </li>
              <li>
                <span style={{color: 'aquamarine'}}>Orçamento:</span> Considere o seu orçamento disponível. Alguns materiais tendem a ser mais 
                caros do que outros. Pondere o custo em relação à durabilidade e à estética desejada.
              </li>
            </ul>
          </MessageText>
        </Topics>
        <Topics>
          <TittleTopic>O que posso fazer para escoar a água do telhado</TittleTopic>
          <MessageText>
            Além da utilização de calhas, uma boa opção seria investir em materiais como: <Links href='/rufos'>rufos</Links> e <Links href='/algerosas'>algerosas</Links>. 
            Normalmente, também são estruturas de metal, e servem para evitar que a água da chuva se infiltre na sua casa, 
            seja no telhado ou nas paredes. Instalá-los é importante porque evita problemas a longo prazo, como por exemplo 
            mofos e fungos. 
            Entretanto, o mais indicado é chamar um profissional para melhor avaliar o seu caso, e posteriormente instalar 
            as peças, que, a depender do modelo, precisam ter uma distância grande ou pequena entre si.
            Além disso, alguns  <Links href='/rufos'>rufos</Links> são mais adequados na parte interna 
            da sua casa, enquanto outros são específicos para o lado de fora. 
            Tenha a certeza de estar adquirindo o modelo certo antes de comprá-lo.
          </MessageText>
        </Topics>
      </Wrapper>
      <MessageText>
      É sempre recomendável consultar um profissional especializado em calhas para obter 
      orientações personalizadas. Sendo assim, podemos estar avaliando sua situação específica e fornecendo
      recomendações com base nas necessidades do seu projeto. contate-nos pelos números disponíveis no rodapé,
      ou clicando <Links href='https://api.whatsapp.com/message/P47VSLNIJS2YG1?autoload=1&app_absent=0'>aqui</Links>.
      </MessageText>
    </div> 
  </Container>)
  
const Calhas = () => {
  const flag = 'Calhas'
  return (
  <div style={{backgroundColor: '#211F20'}}>
    <Navbar /> 
    <Sidebar />
    {content}
    <Product data={data} flag={flag} />
    <br /><br />
    <Footer />
  </div>
  )
}

export default Calhas