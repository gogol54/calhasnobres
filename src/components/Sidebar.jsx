import React from 'react'
import "./styles/sidebar.css"
import { 
  Home,
  Rocket,
  AirlineSeatLegroomNormal,
  DoorFront,
  Layers,
  Cottage
} from '@mui/icons-material'

const Sidebar = () => {

  const content = (<>
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li>
            <a href="/">  
              <i aria-hidden="true">
                <Home className='sidebarIcon' /> 
              </i>  
              <span style={{marginLeft:'10px', marginTop:'20px'}}>Página inicial</span>  </a>
          </li>
         
          <li>
            <a href="/calhas">  
              <i aria-hidden="true">
                <AirlineSeatLegroomNormal className='sidebarIcon' /> 
              </i>  
              <span style={{marginLeft:'10px', marginTop:'20px'}}>Calhas</span>  </a>
          </li>
          <li>
            <a href="/algerosas">  
              <i aria-hidden="true">
                <Rocket className='sidebarIcon' /> 
              </i>  
              <span style={{marginLeft:'10px', marginTop:'20px'}}>Algerosas</span>  </a>
          </li>
           <li>
            <a href="/coifas">  
              <i aria-hidden="true">
                <DoorFront className='sidebarIcon' /> 
              </i>  
              <span style={{marginLeft:'10px', marginTop:'20px'}}>Coifas</span>  </a>
          </li>
          <li>
            <a href="/colarinho">  
              <i aria-hidden="true">
                <Layers className='sidebarIcon' /> 
              </i>  
              <span style={{marginLeft:'10px', marginTop:'20px'}}>Colarinho</span>  </a>
          </li>
           <li>
            <a href="/chamines">  
              <i aria-hidden="true">
                <Cottage className='sidebarIcon' /> 
              </i>  
              <span style={{marginLeft:'10px', marginTop:'20px'}}>Chaminés</span>  </a>
          </li>
          
        </ul>
      </div>
    </div>
    </>
    )
  return content
}

export default Sidebar