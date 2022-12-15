import React, { Fragment } from 'react'
import { useState } from 'react'
import { Button, Col, NavLink, Row } from 'react-bootstrap'
import { FaUserAlt } from 'react-icons/fa'
import { MdAccountBalance, MdDelete, MdLock, MdNotificationsActive, MdSecurity } from 'react-icons/md'
import { RiFolderSettingsFill, RiNewspaperFill } from 'react-icons/ri'
import Layout from '../../../Sidebar/Layout'

const Setting = () => {

  const [isActive, setIsActive] = useState("Messages");
  const [btnActive, setBtnActive] = useState("profile");
  const [visible, setVisible] = useState("");

  return (
    <Layout header={true} breadcrumb="Setting">
      <div className='setting-main'>
        <div className='top_btn_group'>
          <div className='btn-main'>
            <Button className={`${isActive === "Messages" ? "active" : ""}`} onClick={() => setIsActive("Messages")}>Messages</Button>
            <Button className={`${isActive === "Social" ? "active" : ""}`} onClick={() => setIsActive("Social")}>Social</Button>
            <Button className={`${isActive === "Notification" ? "active" : ""}`} onClick={() => setIsActive("Notification")}>Notification</Button>
            <Button className={`${isActive === "Backup" ? "active" : ""}`} onClick={() => setIsActive("Backup")}>Backup</Button>
          </div>
        </div>
        <div className='profile-setting-main mt-4'>
          <Row>
            <Col lg={3} md={3}>
              <div className='box setting-left-box p-3'>
                <NavLink href='#profile' className={`${btnActive === "profile" ? "active" : ""} user-info-links mt-0`} onClick={() => setBtnActive("profile")}>
                  <FaUserAlt style={{ fontSize: "17px" }} />
                  <span>Profile</span>
                </NavLink>
                <NavLink href='#basic_info' className={`${btnActive === "Basic_Info" ? "active" : ""} user-info-links`} onClick={() => setBtnActive("Basic_Info")}>
                  <RiNewspaperFill />
                  <span>Basic Info</span>
                </NavLink>
                <NavLink className={`${btnActive === "change_password" ? "active" : ""} user-info-links`} onClick={() => setBtnActive("change_password")}>
                  <MdLock />
                  <span>change password</span>
                </NavLink>
                <NavLink className={`${btnActive === "2FA" ? "active" : ""} user-info-links`} onClick={() => setBtnActive("2FA")}>
                  <MdSecurity />
                  <span>2FA</span>
                </NavLink>
                <NavLink className={`${btnActive === "accounts" ? "active" : ""} user-info-links`} onClick={() => setBtnActive("accounts")}>
                  <MdAccountBalance />
                  <span>accounts</span>
                </NavLink>
                <NavLink className={`${btnActive === "notifications" ? "active" : ""} user-info-links`} onClick={() => setBtnActive("notifications")}>
                  <MdNotificationsActive />
                  <span>notifications</span>
                </NavLink>
                <NavLink className={`${btnActive === "sessions" ? "active" : ""} user-info-links`} onClick={() => setBtnActive("sessions")}>
                  <RiFolderSettingsFill />
                  <span>sessions</span>
                </NavLink>
                <NavLink className={`${btnActive === "delete_account" ? "active" : ""} user-info-links`} onClick={() => setBtnActive("delete_account")}>
                  <MdDelete />
                  <span>delete account</span>
                </NavLink>
              </div>
            </Col>
            <Col lg={9} md={9}>
              <div className='setting-right-box'>
                <div className='profile box py-3 px-4'>
                  <span id='profile'></span>
                  <div className=' d-flex align-items-center justify-content-between'>
                    <div className='profile-pic d-flex align-items-center gap-3'>
                      <img src='./images/user-profile.jpg' width="80px" />
                      <div className='user-name'>
                        <h5>Alex Thompson</h5>
                        <p className='mb-0'>CEO / Co-Founder</p>
                      </div>
                    </div>
                    <div className='switch-visible d-flex align-items-center gap-4'>
                      <span>Switch to {visible ? "visible" : "invisible"} </span>
                      <label className="input-toggle" for="switch1">
                        <input type="checkbox" id="switch1" name="switch" onClick={() => setVisible(!visible)} />
                        <span className="switch"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className='basic-info box p-4 mt-4'>
                  <span id='basic_info'></span>
                  <div className='basic-info-heading'>
                    <h5>Basic Info</h5>
                  </div>
                  <div className='basic-info-form'>
                    <Row>
                      <Col lg={6} md={6}>
                        <div className='input_field mt-4'>
                          <input className="input-search" type="text" required="required" />
                          <label>First Name</label>
                        </div>
                      </Col>
                      <Col lg={6} md={6}>
                        <div className='input_field mt-4'>
                          <input className="input-search" type="text" required="required" />
                          <label>Last Name</label>
                        </div>
                      </Col>
                    </Row>
                    <Row className='mt-1'>
                      <Col lg={3} md={6}>
                        <div className="input_wrap mt-4">
                          <select className="header-select" required>
                            <option selected hidden disabled></option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                          <label>I'm</label>
                        </div>
                      </Col>
                      <Col lg={3} md={6}>
                        <div className="input_wrap mt-4">
                          <select className="header-select" required>
                            <option selected hidden disabled></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                          </select>
                          <label>Birth Date</label>
                        </div>
                      </Col>
                      <Col lg={3} md={6}>
                        <div className="input_wrap mt-4">
                          <select className="header-select" required>
                            <option selected hidden disabled></option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>
                          <label>Month</label>
                        </div>
                      </Col>
                      <Col lg={3} md={6}>
                        <div className="input_wrap mt-4">
                          <select className="header-select" required>
                            <option selected hidden disabled></option>
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                          </select>
                          <label>Year</label>
                        </div>
                      </Col>
                    </Row>
                    <Row className='mt-1'>
                      <Col lg={6} md={6}>
                        <div className='input_field mt-4'>
                          <input className="input-search" type="email" required="required" />
                          <label>Email</label>
                        </div>
                      </Col>
                      <Col lg={6} md={6}>
                        <div className='input_field mt-4'>
                          <input className="input-search" type="email" required="required" />
                          <label>Confirm Email</label>
                        </div>
                      </Col>
                    </Row>
                    <Row className='mt-1'>
                      <Col lg={6} md={6}>
                        <div className='input_field mt-4'>
                          <input className="input-search" type="text" required="required" />
                          <label>Your Location</label>
                        </div>
                      </Col>
                      <Col lg={6} md={6}>
                        <div className='input_field mt-4'>
                          <input className="input-search" type="email" required="required" />
                          <label>Phone Number</label>
                        </div>
                      </Col>
                    </Row>
                    <Row className='mt-1'>
                      <Col lg={6} md={6}>
                        <div className='input_field mt-4'>
                          <input className="input-search" type="text" required="required" />
                          <label>Language</label>
                        </div>
                      </Col>
                      <Col lg={6} md={6}>
                        <div className='input_field mt-4'>
                          <input className="input-search" type="email" required="required" />
                          <label>Skill</label>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default Setting
