import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap'
import { FaHome, FaFacebook, FaSkype, FaLinkedin,FaMapMarkerAlt,FaPhone,FaEnvelope,FaLongArrowAltRight,FaPlay } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#00348d" }}>
                    <Navbar style={{ color: "transparent" }}>
                        <Container>
                            <img style={{ width: "180px", height: "50px", marginLeft: "-80px" }} src="images/logo.gif" />
                            <Nav className="me-auto">
                                <Nav.Link className="colo" style={{ marginLeft: "400px", color: "white" }} href="#home"><FaHome size="25" /></Nav.Link>
                                <Nav.Link className="col2" style={{ color: "white" }} href="#features">About Us</Nav.Link>
                                <Nav.Link className="col2" style={{ color: "white" }} href="#pricing">Services</Nav.Link>
                                <Nav.Link className="col2" style={{ color: "white" }} href="#pricing">Careers</Nav.Link>
                                <Nav.Link className="col2" style={{ color: "white" }} href="#pricing">Contact Us</Nav.Link>
                                <FaFacebook className="col" style={{ marginLeft: "80px" }} /><AiFillTwitterCircle className="col" /><FaSkype className="col" /><FaLinkedin className="col" />
                            </Nav>
                        </Container>
                    </Navbar>
                    <br /><br /><br /><br />
                    <div className="container">
                        <div className="row">
                            <div style={{ marginLeft: "-30px" }} className="col-md-6">
                                <img src="images/Marketing.webp"></img><br /><br /><br />
                                <button className="aligning" type="button">Our Services</button>
                            </div>
                            <div className="col-md-6">
                                <img style={{ marginTop: "-65px" }} src="images/slide-3.webp"></img>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
                <div style={{ backgroundColor: "#e0ffff" }}>
                <br /><br /><br />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img src="images/digital-marketing.webp"></img>
                                    <h4>Digital Marketing</h4>
                                    <p style={{marginLeft:"20px"}}>In the modern World your brand presence is your digital presence. We help you in building a sold digital presence. </p><br/>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card">
                                    <img style={{width:"300px",height:"270px",marginLeft:"25px"}} src="images/custom-software-solution.webp"></img>
                                    <h4>Custom Software Solution</h4>
                                    <p style={{marginLeft:"20px"}}>Our software development team has versatile experience and prodigious skill to code amazing custom sofware solutions.</p>
                                <br/>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card">
                                    <img src="images/mobile-application.webp"></img>
                                    <h4>Mobile Application</h4>
                                    <p style={{marginLeft:"20px"}}>We are leading web design and app development company India and we not only to build your online web presence</p>
                                <br/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br/><br/><br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img src="images/block-chain.webp"></img>
                                    <h4>Block Chain</h4>
                                     <p style={{marginLeft:"20px"}}>Bussiness increases showing accelerated interest in cryptocurrency and ICO development, leading to growing</p>
                                <br/>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card">
                                    <img src="images/dedicated-hiring.webp"></img>
                                    <h4>Dedicated Hiring</h4>
                                    <p style={{marginLeft:"20px"}}>Dedicated hiring lets you hire offshore talent that exactly matches your requirement. When done right, this talent</p>
                                
                                <br/></div>
                            </div>
                            <div className="col-md-4">
                            <div className="card">
                                    <img src="images/staffing.webp"></img>
                                    <h4>Staffing</h4>
                                    <p style={{marginLeft:"20px"}}>Peoples are always a best assert any organization can have. We help you to find your best asserts for your organization. </p>
                               <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <button className="button-pre"  type="text">1</button>
                    <button className="button-nex"  type="text">2</button>&nbsp;&nbsp;<span>Next<FaLongArrowAltRight/></span><br/><br/>
                    <p className="bottom-hr"></p>
                    <h2>Categories</h2>
                    <br/>
                    <div className="container">
                        <div className="row categories-font">
                            <div className="col-md-3">
                              <FaPlay color="#ff6e07"/> <b>June 2021</b>
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
                    <br/><br/>
                    <div className="container">
                        <div className="row categories-font">
                            <div className="col-md-3">
                              <FaPlay color="#ff6e07"/> <b>July 2021</b>
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
                    <br/><br/>
                </div>
                <div className="footer-bg-color">
                   <div className="container">
                       <div className="row">
                           <div className="col-3 arrow">
                               <br/><br/>
                              <img style={{width:"180px",height:"50px",marginLeft:"-50px"}} src="images/logo.gif"></img>
                              <br/><br/>
                              <div className="container">
                                  <div className="row">
                                      <div className="col-md-3 ">
                                        <img style={{width:"40px",height:"40px",marginLeft:"-50px"}} src="images/facebook.png"></img>
                                      </div>
                                      <div className="col-md-3">
                                      <img style={{width:"40px",height:"40px",marginLeft:"-60px"}} src="images/linkedin.png"></img> 
                                      </div>
                                      <div className="col-md-3">
                                      <img style={{width:"40px",height:"40px",marginLeft:"-70px"}} src="images/skype.png"></img>  
                                      </div>
                                      <div className="col-md-3">
                                      <img style={{width:"40px",height:"40px",marginLeft:"-80px"}} src="images/twitter.png"></img>  
                                      </div>
                                      
                                  </div>
                              </div>
                              <br/>

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
                                      <FaMapMarkerAlt/>
                                       <FaPhone className="footer-icon"/><br/><br/>
                                       <FaEnvelope/>
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
                       <hr className="footer-hr"/>
                       <p className="footer-copyright">© 2020 ApplogiQ. All Right Reserved</p>
                   </div>
                </div>

            </div>
        );
    }
}

export default Home;
