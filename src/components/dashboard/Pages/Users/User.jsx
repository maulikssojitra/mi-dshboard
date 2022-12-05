import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { toast } from 'react-toastify';
import Layout from '../../../Sidebar/Layout'

const User = () => {

    const [step, setStep] = useState(1);

    const notify = () => toast.success("successful");

    const goNextStep = () => {
        if (step === 4) return;
        setStep((step) => step + 1);
    }

    const goBackStep = () => {
        if (step === 1) return;
        setStep((step) => step - 1);
    }

    return (
        <Layout header={true} breadcrumb="User">
            <div className="user-main">
                <div className="user-form">
                    <div className="progress-bar">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="step">
                                <span className="crl">
                                    <span className="step-scrl active"></span>
                                    <span className="step-text active">USER INFO</span>
                                </span>
                            </div>
                            <div className="step">
                                <span className="crl">
                                    <span className="step-scrl"></span>
                                    <span className="step-text">ADDRESS</span>
                                </span>
                            </div>
                            <div className="step">
                                <span className="crl">
                                    <span className="step-scrl"></span>
                                    <span className="step-text">SOCIAL</span>
                                </span>
                            </div>
                            <div className="step">
                                <span className="crl">
                                    <span className="step-scrl"></span>
                                    <span className="step-text">PROFILE</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="get-info">
                        {step === 1 && <Step1 />}
                        {step === 2 && <Step2 />}
                        {step === 3 && <Step3 />}
                        {step === 4 && <Step4 />}
                    </div>
                    <div className="form-btn mt-5">
                        {
                            step !== 1 &&
                            <Button className="back" onClick={() => goBackStep()}>BACK</Button>
                        }
                        {
                            step !== 4 &&
                            <Button className="next" onClick={() => goNextStep()}>NEXT</Button>
                        }
                        {
                            step === 4 &&
                            <Button className="next" onClick={notify}>SEND</Button>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const Step1 = () => {
    return (
        <div className="about-me px-2">
            <div className="about-header">
                <h5>About me</h5>
                <p className="mb-0">Mandatory informations</p>
            </div>
            <div className="form-main">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="input_wrap mt-4">
                            <input className="header-search" type="text" required />
                            <label>First Name</label>
                        </div>
                        <div className="input_wrap mt-4">
                            <input className="header-search" type="text" required />
                            <label>Company</label>
                        </div>
                        <div className="input_wrap mt-4">
                            <input className="header-search" type="password" required />
                            <label>Password</label>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="input_wrap mt-4">
                            <input className="header-search" type="text" required />
                            <label>Last Name</label>
                        </div>
                        <div className="input_wrap mt-4">
                            <input className="header-search" type="text" required />
                            <label>Email Address</label>
                        </div>
                        <div className="input_wrap mt-4">
                            <input className="header-search" type="password" required />
                            <label>Repeat Password</label>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const Step2 = () => {
    return (
        <div className="about-me px-2">
            <div className="about-header">
                <h5>Address</h5>
            </div>
            <div className="form-main mt-4">
                <div className="input_wrap">
                    <input className="header-search" type="text" required />
                    <label>Address 1</label>
                </div>
                <div className="input_wrap mt-4">
                    <input className="header-search" type="text" required />
                    <label>Address 2</label>
                </div>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="input_wrap mt-4">
                            <input className="header-search" type="text" required />
                            <label>City</label>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                        <div className="input_wrap mt-4">
                            <select className="header-select" required>
                                <option selected hidden disabled></option>
                                <option>Gujarat</option>
                                <option>Haryana</option>
                                <option>Kerala</option>
                            </select>
                            <label>State</label>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                        <div className="input_wrap mt-4">
                            <input className="header-search" type="text" required />
                            <label>City</label>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const Step3 = () => {
    return (
        <div className="about-me px-2">
            <div className="about-header">
                <h5>Socials</h5>
            </div>
            <div className="form-main mt-4">
                <div className="input_wrap">
                    <input className="header-search" type="text" required />
                    <label>Twitter Handle</label>
                </div>
                <div className="input_wrap mt-4">
                    <input className="header-search" type="text" required />
                    <label>Facebook Account</label>
                </div>
                <div className="input_wrap mt-4">
                    <input className="header-search" type="text" required />
                    <label>Instagram Account</label>
                </div>
            </div>
        </div>
    )
}

const Step4 = () => {
    return (
        <div className="about-me px-2">
            <div className="about-header">
                <h5>Profile</h5>
            </div>
            <div className="form-main mt-4">
                <div className="input_wrap">
                    <input className="header-search" type="text" required />
                    <label>Public Email</label>
                </div>
                <div className="input_wrap mt-4">
                    <textarea className="header-search mt-4" required rows={4} />
                    <label>Facebook Account</label>
                </div>

            </div>
        </div>
    )
}

export default User