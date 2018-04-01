import React, {Component} from 'react';
import Navbar from '../component/Navbar';
import picture from '../assets/picture.png'
import picturewithe from '../assets/piture-withe.png'
import '../App.css';
import '../assets/circle.scss'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile: false,
            topelement: false
        }
    }

    handleClickmenuMobil = () => {
        this.setState({mobile: !this.state.mobile}, () => {
            console.log(this.state.mobile)
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        if (window.scrollY === 0) {
            this.setState({topelement: true})
        }
    }

    handleScroll = (event) => {
        let scrollTop = window.scrollY;
        if (scrollTop > 0) {

        }
        console.log(scrollTop);
    };

    render() {
        return (

            <div className={!this.state.mobile ? 'home' : 'home menu-is-active'}>
                {/*{this.state.topelement?"main page-content":"page-loaded fadein"}*/}
                <main
                    className={this.state.topelement ? "main page-content page-loaded fade-in" : "main page-content fade-in"}>
                    <header className="universe-intro universe in-view" data-detect-viewport="">
                        <div className="container text-white text-center">
                            <div className="text-group universe-intro__content">
                                <figure className="universe-logo-wrap" data-animate-in="up">
                                    <img className="universe-logo" src={picture} alt=""/>

                                </figure>

                                <div>
                                    <p className="animated fadeInUp">My name is Kittinut Pramhan</p>
                                    <p className="animated fadeInUp">I live in Phuket</p>
                                    <p className="animated fadeInUp"> My Fev animal :cat, dog</p>
                                    <p className="animated fadeInUp"> Hobbies :Play Guitar,Watch Movies</p><br/>

                                    <blockquote className="animated fadeIn">
                                        “The two most important days in your life are the day you are born and the day
                                        you find out why.”
                                        - Mark Twain
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="stars"></div>
                        <div className="star-lg"></div>
                    </header>
                </main>
                <span className="screen" style={{display: !this.state.mobile ? 'none' : 'inline'}}></span>
                <div className="skillchartinfo">
                    <figure class="chart-one animate">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg">
                        <title>[title here]</title>
                        <desc>[long description here]</desc>
                        <circle class="circle-background"/>
                        <circle class="circle-foreground"/>
                    </svg>
                    <figcaption>25% of all males like donuts.</figcaption>
                </figure>

                <figure class="chart-two animate">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg">
                        <title>[title here]</title>
                        <desc>[long description here]</desc>
                        <circle class="circle-background"/>
                        <circle class="circle-foreground"/>
                    </svg>
                    <figcaption>50% of all males like donuts.</figcaption>
                </figure>

                <figure class="chart-three animate">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg">
                        <title>[title here]</title>
                        <desc>[long description here]</desc>
                        <circle class="circle-background"/>
                        <circle class="circle-foreground"/>
                    </svg>
                    <figcaption>75% of all males like donuts.</figcaption>
                </figure>
                </div>

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
