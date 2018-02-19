import React, {Component} from 'react';
import Navbar from '../component/Navbar';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobile:false,
        }
    }
    handleClickmenuMobil = () =>{
        this.setState({mobile:!this.state.mobile},()=>{console.log(this.state.mobile)});
    }
    render() {
        const date = new Date(2018, 2, 0).getDate();

        return (
            <div className={ !this.state.mobile?'home':'home menu-is-active'}>
                <Navbar/>
                <span class="screen" style={{display:!this.state.mobile?'none':'inline'}}></span>
                <div className="mobile-menu-trigger">
                    <div onClick={this.handleClickmenuMobil}>
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
