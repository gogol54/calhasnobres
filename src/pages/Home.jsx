import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {
  Smartphone,
  Lens
} from '@mui/icons-material'

const ChatBot = styled.div`
  z-index:1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: inline;
`

const Home = () => {
  const [pressed, onPressed] = useState(false) 
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')

  const singlePressed = (e) => {
    e.preventDefault()
    onPressed(!pressed)
  }
  const sendRequest = (e) => {
    e.preventDefault()
    onPressed(!pressed)
  }

  console.log(pressed)
  return (
    <>
    <Navbar /> 
      <Sidebar />
      <div className='container' style={{backgroundColor: '#fafafa'}}>

        <ChatBot>
          <a href="https://api.whatsapp.com/message/P47VSLNIJS2YG1?autoload=1&app_absent=0" className="me-4 text-reset">
            <div className='btn btn-secondary' onChange={(e) => sendRequest(e)} style={{marginRight:'10px'}}>  <Lens fontSize='smaill' color='success'/> Contate-nos <Smartphone />
            </div>
          </a>
        </ChatBot>
      </div>
    <Footer />
    </>
  )
}

export default Home