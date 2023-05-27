import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
`
const ImageDrown = styled.img`
  width: 100%;
  height: 400px;
  background-size: cover; 
`

const Container = styled.div`
  position: absolute;
  margin: 30px;
  width: auto;
`
const Icons = styled.div`
  display: flex;
  position: absolute;
  top: 80px;
  right: 20px;
  color: pink;
  float: right;
`

const Navbar = () => {
  return (
    <Box>
       <Container>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderRadius: '10px'}}>
          <a className="navbar-brand" href="/">Calhas Nobres</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Página Inicial <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/information">Quem somos</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Serviços
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/calhas">Calhas</a>
                  <a className="dropdown-item" href="/algerosas">Algerosas</a>
                  <a className="dropdown-item" href="/coifas">Coifas</a>
                  <a className="dropdown-item" href="/colarinho">Colarinho</a>
                  <a className="dropdown-item" href="/chamines">Chaminés</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/coberturas">Troca de cobertura</a>
                  <a className="dropdown-item" href="/manutencao">Limpeza e manutenção</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/others">Saiba Mais</a>
              </li>
            </ul>
            
          </div>
        </nav>
      
      </Container>
     
      <ImageDrown 
        src="https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/calhasCard.jpg?alt=media&token=22b20c0b-4172-4c7b-854a-be30cb84e3bd"
        alt="image bg"
      />
    </Box>
  )
}

export default Navbar