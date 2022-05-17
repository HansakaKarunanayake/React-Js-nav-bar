import React, { Component } from 'react';
import { MenuItems } from "./Menuitem";
import { Button } from '../Button';
import './navbar.css'



class Navbar extends Component {
    state = {clicked: false}

    handleClick = () =>{
       // this.setState({clicked !this.state.clicked})
    }
    render(){
  return (

    <nav className="NavbarItems">
        <h1 className="navbar-logo">HK FASHION <i className="fab fa-react    "></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
            <i className="{this.state.clicked ? 'fas fa-time' : 'fas fa-bars'}"></i>

        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) =>{
                return(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
          
        </ul>
        <button className='btn'>Sign Up</button>
    </nav>
  )
}
}

export default Navbar
