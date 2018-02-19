import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <header className='site-header'>
                <div className='container-wide'>
                    <h1 style={{color: "#fff"}}>Logohere</h1>
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
