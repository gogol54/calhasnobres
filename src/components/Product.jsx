import React, { useState } from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Container = styled.div`
  margin: 20px;
  background-color: #211F20;
  width: 100%;
  height: auto;
  background-size: cover;
  border-radius: 0px;
  margin-left: 230px;
  max-width: 80%;
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
const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  position:relative;
  @media (max-width: 540px) {
    margin-left: 10px;
    right: 10px;
    width: 80%;
    max-width: 80%;
    height: auto;
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
//selante PU

const TittleTopic = styled.h3`
  font-weight: 300;
  color: aquamarine;
  margin: 20px;
  margin-left: 30px;
  @media (max-width: 540px) {
        text-align: center;
        width: 70%;
        margin: 10px;
    }
`

const Product = (props) => {
  const [id, setIndexId] = useState(null)
  const tittle = String(props.flag)

  const list = props.data.filter((item, index) => {
    if((item.names).includes((props.flag).toLowerCase())){
        return item.images
    }
  })
  console.log(tittle)

  const handleClick = (index) => {
    setIndexId(index)
  }

  return (
    <Container>
      <TittleTopic>Confira nossos trabalhos</TittleTopic> 
      <Wrapper>
       {
        list[0].images.map((item, index) => (
            <BoxToutchable>
                <WidgetBox data-target="#kitchens-modal" data-toggle="modal" onClick={() => handleClick(index)}>
                    <BoxImage src={item[0]}/> 
                </WidgetBox>
            </BoxToutchable>
        ))
       }
        <div class="modal kitchens-modal fade" id="kitchens-modal" >
            <div class="modal-dialog modal-lg" >
                <div class="modal-content"
                    style={{
                        width: 'auto',
                        height: 'auto',
                        backgroundColor: '#3D3C3D',
                        color: '#E7E7E7'  
                    }}
                >
                    <div class="modal-header">
                        <h1>{tittle ? tittle : 'Trabalhos'}</h1>
                      
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                }}
                            >
                                <Carousel>  
                                {list[0].images[id]?.map((item, i) => (
                                    <img 
                                        src={item} 
                                    />
                                ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
            
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
                    </div>
                
                </div>

            </div>
        </div>

        <div class="modal" id="myModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title"></h3>
                    </div>

                    <div class="modal-body">
                        <div id="modalCarousel" class="carousel">
                            <div class="carousel-inner">

                            </div>

                            <a class="carousel-control left" href="#modalCarousel" data-slide="prev">
                                <i class="glyphicon glyphicon-chevron-left"></i>
                            </a>
                            <a class="carousel-control right" href="#modalCarousel" data-slide="next">
                                <i class="glyphicon glyphicon-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Product