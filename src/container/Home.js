import React, {Component} from 'react';
import Navbar from '../component/Navbar';

class Home extends Component {
    render() {
        const date = new Date(2018, 2, 0).getDate();

        return (
            <div>
                <Navbar/>
                <div className="mobile-menu-trigger">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

            </div>
        )
    }
}

export default Home
