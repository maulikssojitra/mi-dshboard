import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { AiFillHome, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { MdEmail, MdSettings, MdModeEdit } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'

import Layout from './../../Sidebar/Layout';

const ProfileMain = () => {

    const [profileBtn, setProfileBtn] = useState(1);

    return (
        <Layout header={true} breadcrumb="Profile Overview">

            <div className="profile-main">
                <div className="profile-cover"></div>
                <div className="profile-def">
                    <div className="user-info">
                        <div className="user-profile">
                            <div className="d-flex align-items-center gap">
                                <img src={require('../../assets/img/user-profile.jpg').default} alt="" width={80} />
                                <div className="user-name">
                                    <h4 className="mb-0">Richard Davis</h4>
                                    <p className="mb-0">CEO / Co-Founder</p>
                                </div>
                            </div>
                            <div className="profile-btns d-flex align-items-center">
                                <Button className={`${profileBtn === 1 ? "active" : ""}`} onClick={() => { setProfileBtn(1)}}><AiFillHome />App</Button>
                                <Button className={`${profileBtn === 2 ? "active" : ""}`} onClick={() => setProfileBtn(2)}><MdEmail />Message</Button>
                                <Button className={`${profileBtn === 3 ? "active" : ""}`} onClick={() => setProfileBtn(3)}><MdSettings />Settings</Button>
                            </div>
                        </div>
                        <div className="user-account-def mt-5">
                            <Row className="justify-content-center">
                                <Col lg={4} md={6} sm={12}>
                                    <div className="profile-box px-2">
                                        <h5>Platform Settings</h5>
                                        <div className="account mt-4">
                                            <span>Account</span>
                                            <div className="d-flex align-items-center gap mt-3">
                                                <label className="input-toggle" for="switch">
                                                    <input type="checkbox" id="switch" name="switch" />
                                                    <span className="switch"></span>
                                                </label>
                                                <p className="mb-0">Email me when someone follows me</p>
                                            </div>
                                            <div className="d-flex align-items-center gap mt-4">
                                                <label className="input-toggle" for="switch1">
                                                    <input type="checkbox" id="switch1" name="switch" />
                                                    <span className="switch"></span>
                                                </label>
                                                <p className="mb-0">Email me when someone answers on my post</p>
                                            </div>
                                            <div className="d-flex align-items-center gap mt-4">
                                                <label className="input-toggle" for="switch2">
                                                    <input type="checkbox" id="switch2" name="switch" />
                                                    <span className="switch"></span>
                                                </label>
                                                <p className="mb-0">Email me when someone mentions me</p>
                                            </div>
                                        </div>
                                        <div className="account mt-4">
                                            <span>APPLICATION</span>
                                            <div className="d-flex align-items-center gap mt-3">
                                                <label className="input-toggle" for="switch4">
                                                    <input type="checkbox" id="switch4" name="switch" />
                                                    <span className="switch"></span>
                                                </label>
                                                <p className="mb-0">New launches and projects</p>
                                            </div>
                                            <div className="d-flex align-items-center gap mt-4">
                                                <label className="input-toggle" for="switch5">
                                                    <input type="checkbox" id="switch5" name="switch" />
                                                    <span className="switch"></span>
                                                </label>
                                                <p className="mb-0">Monthly product updates</p>
                                            </div>
                                            <div className="d-flex align-items-center gap mt-4">
                                                <label className="input-toggle" for="switch6">
                                                    <input type="checkbox" id="switch6" name="switch" />
                                                    <span className="switch"></span>
                                                </label>
                                                <p className="mb-0">Subscribe to newsletter</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="border-r-l">
                                    <div className="profile-box px-2">
                                        <div className="user-information pb-4">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5 className="mb-0">Profile Information</h5>
                                                <Button className="edit-btn p-0"><MdModeEdit /></Button>
                                            </div>
                                            <p className="mb-0">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                                        </div>
                                        <div className="user-id mt-4">
                                            <div className="d-flex align-items-center gap">
                                                <span className="mb-0">Full Name :</span>
                                                <p className="mb-0">Alec M. Thompson</p>
                                            </div>
                                            <div className="d-flex align-items-center gap mt-3">
                                                <span className="mb-0">Mobile :</span>
                                                <p className="mb-0"> (44) 123 1234 123</p>
                                            </div>
                                            <div className="d-flex align-items-center gap mt-3">
                                                <span className="mb-0">Email :</span>
                                                <p className="mb-0">alecthompson@mail.com</p>
                                            </div>
                                            <div className="d-flex align-items-center gap mt-3">
                                                <span className="mb-0">Location :</span>
                                                <p className="mb-0">USA</p>
                                            </div>
                                            <div className="d-flex align-items-center gap mt-3">
                                                <span className="mb-0">Social :</span>
                                                <div className="onsocial">
                                                    <Button><FaFacebookF /></Button>
                                                    <Button><AiOutlineTwitter /></Button>
                                                    <Button><AiOutlineInstagram /></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <div className="profile-box px-2">
                                        <h5>Conversations</h5>
                                        <div className="reply-user d-flex align-items-center mt-4">
                                            <div className="d-flex align-items-center gap">
                                                <img src={require('../../assets/img/chat1.jpg').default} alt="" width={50} />
                                                <div>
                                                    <span>Sophie B.</span>
                                                    <p className="mb-0">Hi! I need more information..</p>
                                                </div>
                                            </div>
                                            <Button className="reply-btn">REPLY</Button>
                                        </div>
                                        <div className="reply-user d-flex align-items-center mt-4">
                                            <div className="d-flex align-items-center gap">
                                                <img src={require('../../assets/img/chat2.jpg').default} alt="" width={50} />
                                                <div>
                                                    <span>Anne Marie</span>
                                                    <p className="mb-0">Awesome work, can you..</p>
                                                </div>
                                            </div>
                                            <Button className="reply-btn">REPLY</Button>
                                        </div>
                                        <div className="reply-user d-flex align-items-center mt-4">
                                            <div className="d-flex align-items-center gap">
                                                <img src={require('../../assets/img/chat3.jpg').default} alt="" width={50} />
                                                <div>
                                                    <span>Ivanna</span>
                                                    <p className="mb-0">About files I can..</p>
                                                </div>
                                            </div>
                                            <Button className="reply-btn">REPLY</Button>
                                        </div>
                                        <div className="reply-user d-flex align-items-center mt-4">
                                            <div className="d-flex align-items-center gap">
                                                <img src={require('../../assets/img/chat4.jpg').default} alt="" width={50} />
                                                <div>
                                                    <span>Peterson</span>
                                                    <p className="mb-0">Have a great afternoon..</p>
                                                </div>
                                            </div>
                                            <Button className="reply-btn">REPLY</Button>
                                        </div>
                                        <div className="reply-user d-flex align-items-center mt-4">
                                            <div className="d-flex align-items-center gap">
                                                <img src={require('../../assets/img/chat5.jpg').default} alt="" width={50} />
                                                <div>
                                                    <span>Nick Daniel</span>
                                                    <p className="mb-0">Hi! I need more information..</p>
                                                </div>
                                            </div>
                                            <Button className="reply-btn">REPLY</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="project">
                            <h5>Projects</h5>
                            <p>Architects design houses</p>
                            <Row>
                                <Col lg={3} md={6} sm={12}>
                                    <div className="project-box">
                                        <img src={require('../../assets/img/project1.jpg').default} alt="" />
                                        <span className="mt-3 d-block">Project #1</span>
                                        <h5 className="mt-2">Modern</h5>
                                        <p className="mt-2">As Uber works through a huge amount of internal management turmoil.</p>
                                        <Button className="view-project">view project</Button>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className="project-box">
                                        <img src={require('../../assets/img/project2.jpg').default} alt="" />
                                        <span className="mt-3 d-block">Project #2</span>
                                        <h5 className="mt-2">Scandinavian</h5>
                                        <p className="mt-2">Music is something that everyone has their own specific opinion about.</p>
                                        <Button className="view-project">view project</Button>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className="project-box">
                                        <img src={require('../../assets/img/project3.jpg').default} alt="" />
                                        <span className="mt-3 d-block">Project #3</span>
                                        <h5 className="mt-2">Minimalist</h5>
                                        <p className="mt-2">Different people have different taste, and various types of music.</p>
                                        <Button className="view-project">view project</Button>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className="project-box">
                                        <img src={require('../../assets/img/project4.jpg').default} alt="" />
                                        <span className="mt-3 d-block">Project #4</span>
                                        <h5 className="mt-2">Gothic</h5>
                                        <p className="mt-2">Why would anyone pick blue over pink? Pink is obviously a better color.</p>
                                        <Button className="view-project">view project</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default ProfileMain
