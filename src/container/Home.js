import React, {Component} from 'react';
import Navbar from '../component/Navbar';
import picture from '../assets/picture.png'
import picturewithe from '../assets/piture-withe.png'
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobile:false,
            topelement:false
        }
    }
    handleClickmenuMobil = () =>{
        this.setState({mobile:!this.state.mobile},()=>{console.log(this.state.mobile)});
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll=(event)=>{
        let scrollTop = window.scrollY;
        if(scrollTop>0){
            this.setState({topelement:true})
        }
        console.log(scrollTop);
    };
    render() {

        return (

            <div className={ !this.state.mobile?'home':'home menu-is-active'}>
                <Navbar/>
                {/*{this.state.topelement?"main page-content":"page-loaded fadein"}*/}
                <main className={this.state.topelement?"main page-content page-loaded fade-in":"main page-content fade-in"}>
                    <header className="universe-intro universe in-view" data-detect-viewport="">
                        <div className="container text-white text-center">
                            <div className="text-group universe-intro__content">
                                <figure className="universe-logo-wrap" data-animate-in="up">
                                    <img className="universe-logo" src={picture} alt=""/>
                                    <img className="universe-logo-white" src={picturewithe} alt=""/>
                                </figure>

                                <div>
                                    <p>Profile here</p>
                                    <p>Profile here</p>
                                </div>
                            </div>
                        </div>
                        <div className="stars"></div>
                        <div className="star-lg"></div>
                    </header>
                </main>
                <span className="screen" style={{display:!this.state.mobile?'none':'inline'}}></span>
                <div className="mobile-menu-trigger">
                    <div onClick={this.handleClickmenuMobil}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
                <h1>Helloworld</h1>
            </div>
        )
    }
}

export default Home
