import React from 'react'
import "./styles/sidebar.css"
import { 
  Home,
  CalendarViewDay,
  AirlineSeatLegroomNormal,
  DoorFront,
  Layers,
  BorderOuter,
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
            <a href="/rufos">  
              <i aria-hidden="true">
                <BorderOuter className='sidebarIcon' /> 
              </i>  
              <span style={{marginLeft:'10px', marginTop:'20px'}}>Rufos</span>  </a>
          </li>
          <li>
            <a href="/algerosas">  
              <i aria-hidden="true">
                <CalendarViewDay className='sidebarIcon' /> 
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