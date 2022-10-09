import React, { Fragment, useRef, useState } from 'react'
import { Breadcrumb, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { MdNotificationsActive, MdEmail } from 'react-icons/md'
import { IoMdWifi } from 'react-icons/io'
import { HiShoppingCart } from 'react-icons/hi'

import '../assets/css/Header.css'
import { useEffect } from 'react'

const Header = (props) => {

    const ref = useRef()

    const [notify, setNotify] = useState(false);
    const [activeFild, setActiveFild] = useState();

    useEffect(() => {
        const notifyClickedOutside = e => {
            if (notify && ref.current && !ref.current.contains(e.target)) {
                setNotify(false);
            }
        }

        document.addEventListener("click", notifyClickedOutside);

        return () => {
            document.removeEventListener("click", notifyClickedOutside);
        }
    }, [notify])

    const refreshPage = () => {
        window.scrollTo(0, 0);
    }

    const bodyOff = () => {
        console.log('1234567789');
        const body = document.querySelector('body');
        body.style.overflow = notify ? 'hidden' : 'auto';
    }

    return (
        <Fragment>

            <div className={`${!props.isToggle ? "" : "header-mini"} header`}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap">
                        <div className="page-path">
                            <Breadcrumb >
                                <Breadcrumb.Item>
                                    <Link to="/" onClick={refreshPage}>
                                        Home
                                    </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <Link to="/" onClick={refreshPage}>
                                        Dashboard
                                    </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>{props.breadcrumb}</Breadcrumb.Item>
                            </Breadcrumb>
                            <h5>{props.breadcrumb}</h5>
                        </div>
                    </div>
                    <div className="right-buttons" ref={ref}>
                        {/* <input type="type" placeholder="Search here" /> */}
                        <div className="input_wrap">
                            <input className="header-search" type="text" required />
                            <label>Search here</label>
                        </div>
                        <Button className="sidebar-toggle" onClick={() => {
                            props.setIsToggle(!props.isToggle)
                            const body = document.querySelector('body');
                            body.style.overflow = !props.isToggle ? 'hidden' : 'auto'
                        }}
                        >
                            {
                                props.isToggle ? <AiOutlineDoubleRight /> : <AiOutlineDoubleLeft />
                            }
                        </Button>
                        <Button className="user"><FaUserCircle /></Button>
                        <Button className="notification" onClick={() => {
                            setNotify(true);
                            bodyOff();
                        }}
                        >
                            <MdNotificationsActive />
                        </Button>
                        {
                            notify &&
                            <div className="notification-modal" >
                                <Button className={`${activeFild === 1 ? "active" : ""}`} onClick={() => setActiveFild(1)}><MdEmail />Check new messages</Button>
                                <Button className={`${activeFild === 2 ? "active" : ""} mt-1`} onClick={() => setActiveFild(2)} ><IoMdWifi />Manage Podcast sessions</Button>
                                <Button className={`${activeFild === 3 ? "active" : ""} mt-1`} onClick={() => setActiveFild(3)}><HiShoppingCart />Payment successfully completed</Button>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Header
