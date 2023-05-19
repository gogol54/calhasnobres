import React from 'react'
import "./styles/sidebar.css"
import { 
    Roofing
} from '@mui/icons-material'

const Sidebar = () => {

  const content = (<>
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li>
            <a href="/home">  
              <i aria-hidden="true">
                <Roofing className='sidebarIcon' /> 
              </i>  
              <span style={{marginLeft:'10px', marginTop:'20px'}}>Página Inicial</span>  </a>
          </li>
        </ul>
      </div>
    </div>
    </>
    )
    return content
}

export default Sidebar