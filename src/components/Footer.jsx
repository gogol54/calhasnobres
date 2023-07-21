import { useCallback } from "react"
import styled from 'styled-components'
import {
  Room, 
  LocationCity, 
} from '@mui/icons-material'

const ContactItem = styled.div`
  display:flex;
  margin-bottom: 0px;
  flex-direction: column;
`
const SocialIcon = styled.div`
  margin:10px;
  margin-left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color:white;
  background-color: #${props =>props.color};
  display: inline;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  padding: 5px;
`
const Logo = styled.img`
    margin-left: 35px;
    width: 200px;
    margin-right: 10px;
    color: gray;
    @media (max-width: 920px) and (min-width: 550px) {
        margin: 0px;
        width: 0px;
        height: 0px;
    }

`
const Footer = () => {

  const content = (<>
    <footer className="text-center text-lg-start text-muted" style={{backgroundColor:'#221F20'}}>
      <section className="d-flex justify-content-center justify-content-lg-between p-2" style={{backgroundColor:'white', marginBottom:'0px'}}>
        <div className="me-5 d-none d-lg-block" style={{color:'black'}}>
          <center>
          <span style={{marginLeft: '200px'}}>Nós também estamos nas redes sociais, siga-nos:</span>
          </center>
          
        </div>

        
        <div style={{color:'black'}}>
      
          <a href="https://www.tiktok.com/@calhasnobrres?_t=8cQy9VXUeer&_r=1" className="me-4 text-reset">
            <i>
              <SocialIcon>
                <img 
                  src='https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png'
                  alt='tiktok'
                  style={{
                    width: '30px', 
                    height: '30px',
                    borderRadius: '10px'
                  }}
                />
              </SocialIcon>
            </i>                        
          </a>
   
          <a href="https://www.instagram.com/calhasnobrres/?igshid=MmJiY2I4NDBkZg%3D%3D" className="me-4 text-reset">
            <i>
              <SocialIcon>
                <img 
                  src='https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/instagram-icone-icon-1.png?alt=media&token=93ae4251-5ea2-4cf0-9987-52f1dc571b9c'
                  alt='instagram'
                  style={{
                    width: '30px', 
                    height: '30px',
                    borderRadius: '10px'
                  }}
                />
              </SocialIcon>
            </i>        
          </a>
          <a href="https://api.whatsapp.com/message/P47VSLNIJS2YG1?autoload=1&app_absent=0" className="me-4 text-reset">
            <i>
              <SocialIcon>
                <img 
                  src='https://cdn-icons-png.flaticon.com/512/733/733585.png'
                  alt='whatsapp'
                  style={{
                    width: '30px', 
                    height: '30px',
                    borderRadius: '10px'
                  }}
                />
              </SocialIcon>
            </i>        
          </a>
        </div>
      </section>

    <section className="" style={{backgroundColor:'#221F20', color: 'white', marginTop:'0px'}}>
      <div className="container text-center text-md-start mt-5" >

        <div className="row mt-3" >
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
    
            <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3">
                  <Logo src="https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/calhasCard.jpg?alt=media&token=22b20c0b-4172-4c7b-854a-be30cb84e3bd"
                  />
                </i>
            </h6>
      
            </div>
            
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
  
            <h6 className="text-uppercase fw-bold mb-4">
                Endereço <LocationCity style={{marginRight:"10px", color:"gray"}}/>
                          
            </h6>
            <ContactItem>
              <p><Room style={{marginRight:"10px", color:"gray"}}/> R. Das Margaridas, 725 - Paraíso, Chapecó - SC, 89806-257.</p>
            </ContactItem>
          
            </div>
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
                <h6 className="text-uppercase fw-bold mb-4">
                  Email
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                        style={{
                            width: '20px',
                            height: '15px',
                            marginLeft:"10px", 
                            color:"gray"
                        }}
                    />
                </h6>
              <p>
                  <a href="#!" className="text-reset">calhasnobrescco@gmail.com</a>
              </p>
           
            </div>
            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            
            
            <h6 className="text-uppercase fw-bold mb-4">
                Telefones
                 <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/unnamed.png?alt=media&token=236f7141-9c87-491a-8647-a37955210a76"
                    style={{
                        width: '20px',
                        height: '20px',
                        marginLeft: '10px', 
                        color:"gray"
                    }}
                        
                />
            </h6>
            <p><ContactItem>(49) 9971-9408 | (49) 8846-8707 </ContactItem></p>
            </div>
            
        </div>
        </div>
    </section>
    
    <div className="text-center p-4">
        © 2023 Calhas Nobres -
        <a className="text-reset fw-bold" href="https://jardeleko.github.io/portfolio">Todos os direitos reservados.</a>
    </div>
    </footer>
    </>)
    
  return content
}

export default Footer