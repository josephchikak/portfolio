import './header.css';
import {React, useState} from 'react';
import {Link} from "react-router-dom";


function Header() {
  
const [mobileMenu, setMobileMenu] = useState('close')
const [active, setActive] = useState(false)

console.log(mobileMenu);

return(

<div className='navbars'>
     <nav>
        <div className="header">
            <h2 style={{paddingLeft:'1em'}}>RあY</h2>
           
            <ul className='navigation'>
                    <li> <Link to='/' className={`${active ? 'active' : 'navs'} `} onClick={()=> setActive(true)}>home</Link> </li>
                    <li> <Link to='#about' className={`${active ? 'active' : 'navs'} `} onClick={()=> setActive(true)}> about</Link></li>
                    <li> <Link to='/projects' className={`${active ? 'active' : 'navs'} `} onClick={()=> setActive(true)}> projects</Link> </li>
             </ul>
              
            <div  style={{display:'flex',justifyContent:'end'}}>
                <button className='navs'> contact me</button>
             </div>
           
        <div className='mobileNavigation' onClick={()=> mobileMenu === 'close' ? setMobileMenu('open') : setMobileMenu('close') }>
                <div className='mobileNav'></div>
                <div className='mobileNav'></div>
                <div className='mobileNav'></div>
         </div>          
            </div>
       </nav>
     </div>
    
        )
}

export default Header;