import React, {Component} from 'react';
import logo from '../image/Kittinutlogo.png';
class Navbar extends Component {
    render() {
        return (
            <header className='site-header'>
                <div className='container-wide'>
                    <h1 className="logo">
                        <a href="">
                            <img src={logo}  alt=""/>
                        </a>
                    </h1>
                    <div className="site-header-panel">
                        <nav className="site-navigation">
                            <ul className="site-navigation-list">
                                <li className="mobile-only is-active">
                                    <a href="">Home</a>

                                </li>
                                <li>
                                    <a href="">PortFolio</a>

                                </li>
                                <li>
                                    <a href="">My Skill</a>

                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;
