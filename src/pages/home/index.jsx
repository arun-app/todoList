import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap'
import { FaHome, FaFacebook, FaSkype, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLongArrowAltRight, FaPlay } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Card from '../../components/card/index';
import banner from '../../assets/images/banner.webp';
import logo from '../../assets/images/logo.gif';
import marketing from '../../assets/images/Marketing.webp'
import digitalmarketing from '../../assets/images/digitalmarketing.webp';
import mobileapplication from '../../assets/images/mobileapplication.webp';
import blockchain from '../../assets/images/blockchain.webp';
import didicatedhiring from '../../assets/images/didicatedhiring.webp';
import staffing from '../../assets/images/staffing.webp';
import facebook from '../../assets/images/facebook.png';
import linkedin from '../../assets/images/linkedin.png';
import skype from '../../assets/images/skype.png';
import twitter from '../../assets/images/twitter.png'
import custom from '../../assets/images/custom.png'
import './home.css'


const Home = () => {
    return (
        <div>
            <div className="header-bgcolor">
                <Navbar >
                    <Container className="header-logo-align">
                        <img className="header-logo" src={logo} />
                        <Nav className="me-auto">
                            <Nav.Link className="colo" href="#home"><FaHome size="25" color="white" /></Nav.Link>
                            <Nav.Link className="col2" href="#features">About Us</Nav.Link>
                            <Nav.Link className="col2" href="#pricing">Services</Nav.Link>
                            <Nav.Link className="col2" href="#pricing">Careers</Nav.Link>
                            <Nav.Link className="col2" href="#pricing">Contact Us</Nav.Link>
                            <FaFacebook className="col header-icon" /><AiFillTwitterCircle className="col" /><FaSkype className="col" /><FaLinkedin className="col" />
                        </Nav>
                    </Container>
                </Navbar>
              
                <div className="container banner-image-align">
                    <div className="row">
                        <div className="col-md-6 banner-leftimg-align">
                            <img className="banner-left-align" src={marketing}/><br /><br /><br />
                            <button className="aligning" type="button">Our Services</button>
                        </div>
                        <div className="col-md-6">
                            <img className="banner-right-align" src={banner}></img>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
            </div>
            <div className="body-bgcolor">
                <br /><br /><br />
                <div className="container body-card-align">
                    <div className="row">
                        <Card
                            imgSrc={digitalmarketing}
                            title="Digital Marketing"
                            content="In the modern World your brand presence is your digital presence. We help you in building a sold digital presence."
                        />
                        <Card

                            imgSrc={custom}
                            title="Custom Software Solution"
                            content="Our software development team has versatile experience and prodigious skill to code amazing custom sofware solutions."
                        />

                        <Card
                            imgSrc={mobileapplication}
                            title="Custom Software Solution"
                            content="We are leading web design and app development company India and we not only to build your online web presence"
                        />
                    </div>

                </div>
    
                <div className="container body-card-align">
                    <div className="row">
                        <Card
                            imgSrc={blockchain}
                            title="Custom Software Solution"
                            content="Bussiness increases showing accelerated interest in cryptocurrency and ICO development, leading to growing"
                        />
                        <Card
                            imgSrc={didicatedhiring}
                            title="Custom Software Solution"
                            content="Dedicated hiring lets you hire offshore talent that exactly matches your requirement. When done right, this talent"
                        />

                        <Card
                            imgSrc={staffing}
                            title="Custom Software Solution"
                            content="Peoples are always a best assert any organization can have. We help you to find your best asserts for your organization"
                        />
                    </div>
                </div>
                <br /><br />
                <button className="button-pre" type="text">1</button>
                <button className="button-nex" type="text">2</button>&nbsp;&nbsp;<span>Next<FaLongArrowAltRight /></span><br /><br />
                <p className="bottom-hr"></p>
                <h2>Categories</h2>
                <br />
                <div className="container">
                    <div className="row categories-font">
                        <div className="col-md-3">
                            <FaPlay color="#ff6e07" /> <b>June 2021</b>
                        </div>
                        <div className="col-md-3">
                            <FaPlay color="#ff6e07" /> <b>August 2021</b>
                        </div>
                        <div className="col-md-3">
                            <FaPlay color="#ff6e07" /> <b>June 2021</b>
                        </div>
                        <div className="col-md-3">
                            <FaPlay color="#ff6e07" /> <b>August 2021</b>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="row categories-font">
                        <div className="col-md-3">
                            <FaPlay color="#ff6e07" /> <b>July 2021</b>
                        </div>
                        <div className="col-md-3">
                            <FaPlay color="#ff6e07" /> <b>September 2021</b>
                        </div>
                        <div className="col-md-3">
                            <FaPlay color="#ff6e07" /> <b>July 2021</b>
                        </div>
                        <div className="col-md-3">
                            <FaPlay color="#ff6e07" /> <b>September 2021</b>
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
            <div className="footer-bg-color">
                <div className="container">
                    <div className="row footer-row-align">
                        <div className="col-3 arrow">
                            <br /><br />
                            <img className="footer-logo" src={logo}></img>
                            <br /><br />
                            <div className="container footer-socialmedia-align">
                                <div className="row">
                                    <div className="col-md-3 ">
                                        <img className="footer-icon-image" src={facebook}></img>
                                    </div>
                                    <div className="col-md-3">
                                        <img className="footer-icon-image" src={linkedin}></img>
                                    </div>
                                    <div className="col-md-3">
                                        <img className="footer-icon-image" src={skype}></img>
                                    </div>
                                    <div className="col-md-3">
                                        <img className="footer-icon-image" src={twitter}></img>
                                    </div>

                                </div>
                            </div>
                            <br />

                        </div>
                        <div className="col-3">
                            <div class="vl">
                                <p className="align">Our Service</p>
                                <ul className="footer-list-color">
                                    <li>Custom softwares solution</li>
                                    <li>Mobile application</li>
                                    <li>Web application</li>
                                    <li>Blockchain solution</li>
                                    <li>Dedicated hiring</li>
                                    <li>Web design</li>
                                    <li>Digital Marketing</li>
                                    <li>Stafing</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-3 footer-colom-align">
                            <p className="align1">Quick Link</p>
                            <ul className="footer-list-color2">
                                <li>Home</li>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Why Choose us</li>
                                <li>Contact Us</li>
                            </ul>

                        </div>
                        <div className="col-3">
                            <p className="align1">Contact Us</p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2 footer-icon-color">
                                        <FaMapMarkerAlt />
                                        <FaPhone className="footer-icon" /><br /><br />
                                        <FaEnvelope />
                                    </div>
                                    <div className="col-md-10 footer-icon-color">
                                        <p>19/21,Swarnapuri Extn,2nd street, 15 Velampalayam,Tiruppur,641652</p>
                                        <p>+91 9629938033</p>
                                        <p>info@applogiq.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="footer-hr" />
                    <p className="footer-copyright">© 2020 ApplogiQ. All Right Reserved</p>
                    <br/>
                </div>
            </div>

        </div>
    );
}

export default Home;
