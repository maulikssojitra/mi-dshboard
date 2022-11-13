import React, { Fragment, useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'
import { BsExclude } from 'react-icons/bs'
import { HiPhotograph, HiShoppingBag, HiClipboard } from 'react-icons/hi'
import { MdSettingsApplications } from 'react-icons/md'


import '../assets/css/Sidebar.css'

const Sidebar = (props) => {

    const [profile, setProfile] = useState();
    const [dashboard, setDashboard] = useState();
    const [pageActive, setPageActive] = useState();
    const [pageProfile, setPageProfile] = useState();
    const [pageUsers, setPageUsers] = useState();
    const [pageAccount, setPageAccount] = useState();
    const [pageProject, setPageProject] = useState();
    const [pagePricing, setPagePricing] = useState();
    const [ecommerce, setEcommerce] = useState();
    const [ecommerceProducts, setEcommerceProducts] = useState();
    const [ecommerceOrders, setEcommerceOrders] = useState();
    const [authentication, setAuthentication] = useState();
    const [signin, setSignin] = useState();
    const [signup, setSignup] = useState();
    const [resetPass, setResetPass] = useState();
    const [application, setApplication] = useState();

    const refreshPage = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Fragment>

            <div className={`${!props.isToggle ? "sidebar" : "mar-left-0"} sidebar`}>
                <div className="b-bottom">
                    <Link to="/analytics" className="logo" onClick={refreshPage}>
                        <img src={require('../assets/img/logo.png').default} alt="" width={35} />
                        <span>Material Dashboard</span>
                    </Link>
                </div>
                <div className="b-bottom py-4">
                    <Button className={`${profile ? "active" : ""} sidebar-btn`} onClick={() => { setProfile(!profile) }} aria-controls="collapse-profile" aria-expanded={profile}>
                        <div className="d-flex align-items-center gap-10">
                            <img src={require('../assets/img/profile.jpg').default} alt="" width={40} />
                            <span>Brooklyn Alice</span>
                        </div>
                        <FaAngleDown className={`${!profile ? "rotat-down" : "rotat-up "}`} />
                    </Button>
                    <Collapse in={profile}>
                        <div id="collapse-profile">
                            <Link to="/profile" className="sidebar-btn mt-1" onClick={refreshPage}>
                                <div className="d-flex align-items-center">
                                    <span className="text-logo">M</span>
                                    <span className="mar-left-10">My Profile</span>
                                </div>
                            </Link>
                            <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                <div className="d-flex align-items-center">
                                    <span className="text-logo">S</span>
                                    <span className="mar-left-15">Settings</span>
                                </div>
                            </Button>
                            <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                <div className="d-flex align-items-center">
                                    <span className="text-logo">L</span>
                                    <span className="mar-left-15">Logout</span>
                                </div>
                            </Button>
                        </div>
                    </Collapse>
                </div>
                <div className="b-bottom py-4">
                    <Button className={`${dashboard ? "active" : ""} sidebar-btn`} onClick={() => { setDashboard(!dashboard) }} aria-controls="collapse-dashboard" aria-expanded={dashboard}>
                        <div className="dashboard-btn d-flex align-items-center gap-10">
                            <BsExclude />
                            <span>Dashboard</span>
                        </div>
                        <FaAngleDown className={`${!dashboard ? "rotat-down" : "rotat-up "}`} />
                    </Button>
                    <Collapse in={dashboard}>
                        <div id="collapse-dashboard">
                            <Link to="/analytics" className="sidebar-btn mt-1" onClick={refreshPage}>
                                <div className="d-flex align-items-center">
                                    <span className="text-logo">A</span>
                                    <span className="mar-left-10">Analytics</span>
                                </div>
                            </Link>
                            <Link to="/sales" className="sidebar-btn mt-1" onClick={refreshPage}>
                                <div className="d-flex align-items-center">
                                    <span className="text-logo">S</span>
                                    <span className="mar-left-15">Sales</span>
                                </div>
                            </Link>
                        </div>
                    </Collapse>
                    <div className="page">
                        <h6>PAGE</h6>
                        <Button className={`${pageActive ? "active" : ""} sidebar-btn`} onClick={() => { setPageActive(!pageActive) }} aria-controls="collapse-pages" aria-expanded={pageActive}>
                            <div className="dashboard-btn d-flex align-items-center gap-10">
                                <HiPhotograph />
                                <span>Pages</span>
                            </div>
                            <FaAngleDown className={`${!pageActive ? "rotat-down" : "rotat-up "}`} />
                        </Button>
                        <Collapse in={pageActive}>
                            <div id="collapse-pages">
                                <Button className={`${pageProfile ? "active" : ""} sidebar-btn`} onClick={() => { setPageProfile(!pageProfile) }} aria-controls="collapse-pages" aria-expanded={pageProfile}>
                                    <div className="dashboard-btn d-flex align-items-center gap-10">
                                        <span className="text-logo">P</span>
                                        <span className="mar-left-10">Profile</span>
                                    </div>
                                    <FaAngleDown className={`${!pageProfile ? "rotat-down" : "rotat-up "}`} />
                                </Button>
                                <Collapse in={pageProfile}>
                                    <div id="collapse-pages">
                                        <Link to="/profile" className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">P</span>
                                                <span className="mar-left-10">Profile Overview</span>
                                            </div>
                                        </Link>
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">A</span>
                                                <span className="mar-left-10">All Project</span>
                                            </div>
                                        </Button>
                                    </div>
                                </Collapse>
                                <Button className={`${pageUsers ? "active" : ""} sidebar-btn`} onClick={() => { setPageUsers(!pageUsers) }} aria-controls="collapse-pages" aria-expanded={pageUsers}>
                                    <div className="dashboard-btn d-flex align-items-center gap-10">
                                        <span className="text-logo">U</span>
                                        <span className="mar-left-10">Users</span>
                                    </div>
                                    <FaAngleDown className={`${!pageUsers ? "rotat-down" : "rotat-up "}`} />
                                </Button>
                                <Collapse in={pageUsers}>
                                    <div id="collapse-pages">
                                        <Link to="/new-user" className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">N</span>
                                                <span className="mar-left-10">New User</span>
                                            </div>
                                        </Link>
                                    </div>
                                </Collapse>
                                <Button className={`${pageAccount ? "active" : ""} sidebar-btn`} onClick={() => { setPageAccount(!pageAccount) }} aria-controls="collapse-pages" aria-expanded={pageAccount}>
                                    <div className="dashboard-btn d-flex align-items-center gap-10">
                                        <span className="text-logo">A</span>
                                        <span className="mar-left-10">Account</span>
                                    </div>
                                    <FaAngleDown className={`${!pageAccount ? "rotat-down" : "rotat-up "}`} />
                                </Button>
                                <Collapse in={pageAccount}>
                                    <div id="collapse-pages">
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">S</span>
                                                <span className="mar-left-10">Setting</span>
                                            </div>
                                        </Button>
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">B</span>
                                                <span className="mar-left-10">Billing</span>
                                            </div>
                                        </Button>
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">I</span>
                                                <span className="mar-left-10">Invoice</span>
                                            </div>
                                        </Button>
                                    </div>
                                </Collapse>
                                <Button className={`${pageProject ? "active" : ""} sidebar-btn`} onClick={() => { setPageProject(!pageProject) }} aria-controls="collapse-pages" aria-expanded={pageProject}>
                                    <div className="dashboard-btn d-flex align-items-center gap-10">
                                        <span className="text-logo">P</span>
                                        <span className="mar-left-10">Project</span>
                                    </div>
                                    <FaAngleDown className={`${!pageProject ? "rotat-down" : "rotat-up "}`} />
                                </Button>
                                <Collapse in={pageProject}>
                                    <div id="collapse-pages">
                                        <Link to="/timeline" className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">T</span>
                                                <span className="mar-left-10">Timeline</span>
                                            </div>
                                        </Link>
                                    </div>
                                </Collapse>
                                <Button className="sidebar-btn" onClick={() => { setPagePricing(!pagePricing); refreshPage() }} aria-controls="collapse-pages" aria-expanded={pagePricing}>
                                    <div className="dashboard-btn d-flex align-items-center gap-10">
                                        <span className="text-logo">P</span>
                                        <span className="mar-left-10">Pricing Page</span>
                                    </div>
                                </Button>
                            </div>
                        </Collapse>
                        <Button className={`${application ? "active" : ""} sidebar-btn`} onClick={() => { setApplication(!application) }} aria-controls="collapse-pages" aria-expanded={application}>
                            <div className="dashboard-btn d-flex align-items-center gap-10">
                                <MdSettingsApplications />
                                <span>Aplications</span>
                            </div>
                            <FaAngleDown className={`${!application ? "rotat-down" : "rotat-up "}`} />
                        </Button>
                        <Collapse in={application}>
                            <div id="collapse-pages">
                                <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                    <div className="d-flex align-items-center">
                                        <span className="text-logo">K</span>
                                        <span className="mar-left-10">Kanban</span>
                                    </div>
                                </Button>
                                <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                    <div className="d-flex align-items-center">
                                        <span className="text-logo">W</span>
                                        <span className="mar-left-10">Wizard</span>
                                    </div>
                                </Button>
                                <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                    <div className="d-flex align-items-center">
                                        <span className="text-logo">D</span>
                                        <span className="mar-left-10">Data Table</span>
                                    </div>
                                </Button>
                                <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                    <div className="d-flex align-items-center">
                                        <span className="text-logo">C</span>
                                        <span className="mar-left-10">Celendar</span>
                                    </div>
                                </Button>
                            </div>
                        </Collapse>
                        <Button className={`${ecommerce ? "active" : ""} sidebar-btn`} onClick={() => { setEcommerce(!ecommerce) }} aria-controls="collapse-pages" aria-expanded={ecommerce}>
                            <div className="dashboard-btn d-flex align-items-center gap-10">
                                <HiShoppingBag />
                                <span>Ecommerce</span>
                            </div>
                            <FaAngleDown className={`${!ecommerce ? "rotat-down" : "rotat-up "}`} />
                        </Button>
                        <Collapse in={ecommerce}>
                            <div id="collapse-pages">
                                <Button className={`${ecommerceProducts ? "active" : ""} sidebar-btn`} onClick={() => { setEcommerceProducts(!ecommerceProducts) }} aria-controls="collapse-pages" aria-expanded={ecommerceProducts}>
                                    <div className="dashboard-btn d-flex align-items-center gap-10">
                                        <span className="text-logo">P</span>
                                        <span>Products</span>
                                    </div>
                                    <FaAngleDown className={`${!ecommerceProducts ? "rotat-down" : "rotat-up "}`} />
                                </Button>
                                <Collapse in={ecommerceProducts}>
                                    <div id="collapse-pages">
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">N</span>
                                                <span className="mar-left-10">New Product</span>
                                            </div>
                                        </Button>
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">E</span>
                                                <span className="mar-left-10">Edit Product</span>
                                            </div>
                                        </Button>
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">P</span>
                                                <span className="mar-left-10">Product Page</span>
                                            </div>
                                        </Button>
                                    </div>
                                </Collapse>
                                <Button className={`${ecommerceOrders ? "active" : ""} sidebar-btn`} onClick={() => { setEcommerceOrders(!ecommerceOrders) }} aria-controls="collapse-pages" aria-expanded={ecommerceOrders}>
                                    <div className="dashboard-btn d-flex align-items-center gap-10">
                                        <span className="text-logo">O</span>
                                        <span>Orders</span>
                                    </div>
                                    <FaAngleDown className={`${!ecommerceOrders ? "rotat-down" : "rotat-up "}`} />
                                </Button>
                                <Collapse in={ecommerceOrders}>
                                    <div id="collapse-pages">
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">O</span>
                                                <span className="mar-left-10">Order List</span>
                                            </div>
                                        </Button>
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">O</span>
                                                <span className="mar-left-10">Order Details</span>
                                            </div>
                                        </Button>
                                    </div>
                                </Collapse>
                            </div>
                        </Collapse>
                        <Button className={`${authentication ? "active" : ""} sidebar-btn`} onClick={() => { setAuthentication(!authentication) }} aria-controls="collapse-pages" aria-expanded={authentication}>
                            <div className="dashboard-btn d-flex align-items-center gap-10">
                                <HiClipboard />
                                <span>Authentication</span>
                            </div>
                            <FaAngleDown className={`${!authentication ? "rotat-down" : "rotat-up "}`} />
                        </Button>
                        <Collapse in={authentication}>
                            <div id="collapse-pages">
                                <Button className={`${signin ? "active" : ""} sidebar-btn`} onClick={() => { setSignin(!signin) }} aria-controls="collapse-pages" aria-expanded={signin}>
                                    <div className="dashboard-btn d-flex align-items-center gap-10">
                                        <span className="text-logo">S</span>
                                        <span>Sign In</span>
                                    </div>
                                    <FaAngleDown className={`${!signin ? "rotat-down" : "rotat-up "}`} />
                                </Button>
                                <Collapse in={signin}>
                                    <div id="collapse-pages">
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">B</span>
                                                <span className="mar-left-10">Basic</span>
                                            </div>
                                        </Button>
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">C</span>
                                                <span className="mar-left-10">Cover</span>
                                            </div>
                                        </Button>
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">I</span>
                                                <span className="mar-left-10">Illustration</span>
                                            </div>
                                        </Button>
                                    </div>
                                </Collapse>
                                <Button className={`${signup ? "active" : ""} sidebar-btn`} onClick={() => { setSignup(!signup) }} aria-controls="collapse-pages" aria-expanded={signup}>
                                    <div className="dashboard-btn d-flex align-items-center gap-10">
                                        <span className="text-logo">S</span>
                                        <span>Sign Up</span>
                                    </div>
                                    <FaAngleDown className={`${!signup ? "rotat-down" : "rotat-up "}`} />
                                </Button>
                                <Collapse in={signup}>
                                    <div id="collapse-pages">
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">C</span>
                                                <span className="mar-left-10">Cover</span>
                                            </div>
                                        </Button>
                                    </div>
                                </Collapse>
                                <Button className={`${resetPass ? "active" : ""} sidebar-btn`} onClick={() => { setResetPass(!resetPass) }} aria-controls="collapse-pages" aria-expanded={resetPass}>
                                    <div className="dashboard-btn d-flex align-items-center gap-10">
                                        <span className="text-logo">R</span>
                                        <span>Reset Password</span>
                                    </div>
                                    <FaAngleDown className={`${!resetPass ? "rotat-down" : "rotat-up "}`} />
                                </Button>
                                <Collapse in={resetPass}>
                                    <div id="collapse-pages">
                                        <Button className="sidebar-btn mt-1" onClick={refreshPage}>
                                            <div className="d-flex align-items-center">
                                                <span className="text-logo">C</span>
                                                <span className="mar-left-10">Cover</span>
                                            </div>
                                        </Button>
                                    </div>
                                </Collapse>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Sidebar
