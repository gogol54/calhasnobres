import React, { useState } from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-carousel-minimal';

const images = [
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/rufos%2FR4.jpeg?alt=media&token=5ff85b81-c32b-40e2-a45b-3ca693094235',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/rufos%2FR4.jpeg?alt=media&token=5ff85b81-c32b-40e2-a45b-3ca693094235',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/rufos%2FR5.jpeg?alt=media&token=0b89b68a-b74a-43c3-91d0-6aa6fe8460b8',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/rufos%2FR5.jpeg?alt=media&token=0b89b68a-b74a-43c3-91d0-6aa6fe8460b8'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/rufos%2FR6.jpeg?alt=media&token=d711fd60-2cb9-42b8-a371-f84ee15260ce',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/rufos%2FR6.jpeg?alt=media&token=d711fd60-2cb9-42b8-a371-f84ee15260ce'
    }
  ]

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
const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
}

const Product = (props) => {
  const [id, setIndexId] = useState(null)
  const list = props.data.filter((item, index) => {
    if((item.names).includes(props.flag)){
        return item.images
    }
  })
  console.log(list)
  console.log(id)
  const handleClick = (index) => {
    setIndexId(index)
  }

  return (
    <Container>
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
        <div class="modal-content" style={{width: '1024px', height: 'auto', backgroundColor: '#3D3C3D', color: '#E7E7E7'}}>
            <div class="modal-header">
                <h1>Calhas</h1>
                <h3>Confira...</h3>
            </div>

            <div class="modal-body">
                <div class="row">
                    <Carousel
                        data={images}
                        time={5000}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="30px"
                        
                        style={{
                            textAlign: "center",
                            width: "850px",
                            maxHeight: "auto",
                            margin: "40px auto",
                            objectFit: 'cover',
                        }}
                    />
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