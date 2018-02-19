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
                        <nav className="">
                            <ul>
                                <li>
                                    home
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
