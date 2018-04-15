import React, {Component} from 'react';

import picture from '../assets/picture.png'
import react from '../assets/react.png'
import '../index.css';
import githubimg from '../assets/github.png'
import laravel from '../assets/laravel.png'
import nodejs from '../assets/nodejs.png'
import stack from '../assets/stack.png'
import lady from '../assets/lady.jpg'
import '../App.css';
import '../assets/circle.scss'
import Hardskill from '../component/Hardskill';
import Card from '../component/Card';
import {fetchgithub} from "../actions/index";
import {connect} from 'react-redux';
import shootingstar  from '../assets/shooting-star.svg';
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
        this.props.fetchgithub();
        this.shootingstars('left',this.cb),
            this.shootingstars('right',this.cb)
        window.addEventListener('scroll', this.handleScroll);
        if (window.scrollY === 0) {
            this.setState({topelement: true})
        }
    }

    handleScroll = (event) => {
        let scrollTop = window.scrollY;
        if (scrollTop > 0) {
            this.setState({topelement: true})
        }
    };

    shootingstars = (dir, cb) => (
        setInterval(() => {
            var topPos = Math.floor(Math.random() * 80) + 1,
                topPos = topPos + '%',
                leftPos = Math.floor(Math.random() * 40) + 1,
                leftPos = leftPos + '%',
                trans = Math.floor(Math.random() * 300) + 1,
                trans = trans + 'deg';
            cb(dir, {
                top: topPos,
                [dir]: leftPos,
                transform: 'rotate(' + trans + ')'
            });
        }, 1000)
    )
    cb =(dir,val)=>{
        this.setState({[dir]:val})
    }


    render() {
        const {github} = this.props;
        const {left,right} = this.state

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

                                <div className="infomation ">
                                    <p className="animated fadeInUp">My name is Kittinut Pramhan</p>
                                    <p className="animated fadeInUp">I live in Phuket</p>
                                    <p className="animated fadeInUp"> My Favorite animal :cat, dog</p>
                                    <p className="animated fadeInUp"> My Favorite pet : she name is Lady
                                        <br/> <img src={lady} style={{width: "20%", height: "20%"}} alt=""/>
                                    </p>
                                    <p className="animated fadeInUp"> Hobbies :Play Guitar,Watch Movies</p><br/>
                                    <p>
                                        Contact: <br/>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/600px-LINE_logo.svg.png" style={{width:"5%"}} alt=""/>
                                        <br/> IDLiNE : knightza12345 <br/>
                                        Tel:+66836467520
                                    
                                    </p>
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
                        <figure className="shooting-star">
                        <img src={shootingstar}  alt ="shooting star" style={this.state.left}/>
                    </figure>
                    <figure className="shooting-star-right" style={this.state.right}>
                        <img src={shootingstar} alt ="shooting star" />
                    </figure>
                    </header>
                </main>
                <span className="screen" style={{display: !this.state.mobile ? 'none' : 'inline'}}></span>
                <div className="headerskill">
                    <div className="skillchartinfo-header">
                        <h1>~Hard Skill~</h1>
                    </div>
                    <div className="skillchartinfo animated fadeIn">
                        <Hardskill name="Javascript" css="chart-javascript"/>
                        <Hardskill name="HTML5" css="chart-html"/>
                        <Hardskill name="CSS3" css="chart-css3"/>
                        <Hardskill name="PHP" css="chart-php"/>
                        <Hardskill name="JAVA" css="chart-java"/>
                        <Hardskill name="C#" css="char-cshape"/>
                    </div>
                    <div className="logo-group">
                        <img src={nodejs} alt="nodejs"/>
                        <img src={react} alt="react"/>
                        <img src={githubimg} alt="github"/>
                        <img src={laravel} alt="laravel"/>
                        <img src={stack} alt="stack"/>
                    </div>
                </div>

                <div className="headerportfolio  fadeIn">
                    <h1 className="portfolio">Portfolio</h1>
                    <hr/>
                </div>
                <div className="github-portfolio">
                    {
                        github.map(value => {
                            return <Card key={value.id} url={value.html_url} name={value.name} fork={value.forks} star={value.watchers}/>
                        })
                    }
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

const mapStateToProps = ({github}) => {
    return {
        github,
    }
}
export default connect(mapStateToProps, {fetchgithub})(Home);
