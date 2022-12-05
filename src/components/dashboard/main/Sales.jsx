import React, { useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { RiErrorWarningLine } from 'react-icons/ri'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import Round from '../../charts/Round'
import Layout from '../../Sidebar/Layout'
import LinechartSeles from '../../charts/LinechartSeles'
import HorizontalChart from './../../charts/HorizontalChart';
import country_data from '../../Data/country_data.json'

const Sales = (props) => {

    const [subDateModal, setSubDateModal] = useState();
    const [costomer, setCostomer] = useState();
    const [revenu, setRevenu] = useState();
    const [countryData, setCountryData] = useState(country_data)

    return (
        <Layout header={true} breadcrumb="Sales">

            <div className="seles">

                <div className="seles-main">
                    <Row className="justify-content-center">
                        <Col lg={4} md={6} sm={12}>
                            <div className="seles-box">
                                <div className="position-relative d-flex align-item-center justify-content-between">
                                    <h6 className="mb-0">Sales</h6>
                                    <Button onClick={() => {
                                        setSubDateModal(!subDateModal);
                                    }}>6 May - 7 May</Button>
                                    <div className={`${!subDateModal ? "d-none" : ""} date-box`}>
                                        <Button>Last 7 days</Button>
                                        <Button>Last week</Button>
                                        <Button>Last 30 days</Button>
                                    </div>
                                </div>
                                <h4 className="mt-2">$230,220</h4>
                                <p><span className="text-green">+55%</span> since last month</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="seles-box">
                                <div className="position-relative d-flex align-item-center justify-content-between">
                                    <h6 className="mb-0">Customers</h6>
                                    <Button onClick={() => {
                                        setCostomer(!costomer);
                                    }}>6 May - 7 May</Button>
                                    <div className={`${!costomer ? "d-none" : ""} date-box`}>
                                        <Button>Last 7 days</Button>
                                        <Button>Last week</Button>
                                        <Button>Last 30 days</Button>
                                    </div>
                                </div>
                                <h4 className="mt-2">3.200</h4>
                                <p><span className="text-green">+12%</span> since last month</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="seles-box">
                                <div className="position-relative d-flex align-item-center justify-content-between">
                                    <h6 className="mb-0">Avg. Revenue</h6>
                                    <Button onClick={() => {
                                        setRevenu(!revenu);
                                    }}>6 May - 7 May</Button>
                                    <div className={`${!revenu ? "d-none" : ""} date-box`}>
                                        <Button>Last 7 days</Button>
                                        <Button>Last week</Button>
                                        <Button>Last 30 days</Button>
                                    </div>
                                </div>
                                <h4 className="mt-2">$1.200</h4>
                                <p><span className="text-green">+$213</span> since last month</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="channels">
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <div className="channels-chart">
                                <div className="channels-header d-flex align-items-center justify-content-between">
                                    <h5>Channels</h5>
                                    <Button className="warning">
                                        <RiErrorWarningLine />
                                    </Button>
                                </div>
                                <div>
                                    <Round />
                                </div>
                                <div className="chart-def">
                                    <p>
                                        More than 1,200,000 sales are made using referral marketing, and 700,000 are from social media.
                                    </p>
                                    <Button className="read-more" variant="light">Read more</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={12}>
                            <div className="channels-chart">
                                <div className="channels-header d-flex align-items-center justify-content-between">
                                    <h5>Revenue</h5>
                                    <Button className="warning">
                                        <RiErrorWarningLine />
                                    </Button>
                                </div>
                                <LinechartSeles />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="channels">
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <div className="channels-chart">
                                <div className="channels-header d-flex align-items-center justify-content-between">
                                    <h5>Revenue</h5>
                                    <Button className="warning">
                                        <RiErrorWarningLine />
                                    </Button>
                                </div>
                                <div className='mt-4'>
                                    <HorizontalChart />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className="channels-chart">
                                <div className="channels-header d-flex align-items-center justify-content-between">
                                    <h5>Channels</h5>
                                    <Button className="warning">
                                        <RiErrorWarningLine />
                                    </Button>
                                </div>
                                <div>
                                    <div className="salse-table mt-3">
                                        <Table responsive>
                                            <tbody>
                                                {
                                                    country_data.slice(0, 4).map((e, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                <td>
                                                                    <img src={e.img} alt="" width={25} />
                                                                </td>
                                                                <td>
                                                                    <div className="country-name">
                                                                        <span>Country:</span>
                                                                        <span>{e.Country}</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="country-name">
                                                                        <span>Sales:</span>
                                                                        <span>{e.Sales}</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="country-name">
                                                                        <span>Bounce:</span>
                                                                        <span>{e.Bounce}%</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="to-selling">
                    <div className="channels-header d-flex align-items-center justify-content-between">
                        <h5>Top Selling Products</h5>
                    </div>
                    <div className="salse-table mt-3">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>
                                        <span>PRODUCT</span>
                                    </th>
                                    <th>
                                        <span>VALUE</span>
                                    </th>
                                    <th>
                                        <span>ADS SPENT</span>
                                    </th>
                                    <th>
                                        <span>REFUNDS</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap width-800">
                                            <img src={require('../../assets/img/selling1.jpg').default} alt="" width={60} />
                                            <div>
                                                <h6 className="mb-0">Nike v22 Running</h6>
                                                <p className="mb-0"><span className="text-green">8.232</span> orders</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>$130.992</span>
                                    </td>
                                    <td>
                                        <span>$9.500</span>
                                    </td>
                                    <td>
                                        <span className="d-flex align-items-center">13 <MdKeyboardArrowUp className="text-green" /></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap width-800">
                                            <img src={require('../../assets/img/selling2.jpg').default} alt="" width={60} />
                                            <div>
                                                <h6 className="mb-0">Business Kit (Mug + Notebook)</h6>
                                                <p className="mb-0"><span className="text-green">12.821</span> orders</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>$80.250</span>
                                    </td>
                                    <td>
                                        <span>$4.200</span>
                                    </td>
                                    <td>
                                        <span className="d-flex align-items-center">40 <MdKeyboardArrowDown className="text-red" /></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap width-800">
                                            <img src={require('../../assets/img/selling3.jpg').default} alt="" width={60} />
                                            <div>
                                                <h6 className="mb-0">Black Chair</h6>
                                                <p className="mb-0"><span className="text-green">2.421</span> orders</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>$40.600</span>
                                    </td>
                                    <td>
                                        <span>$9.430</span>
                                    </td>
                                    <td>
                                        <span className="d-flex align-items-center">54 <MdKeyboardArrowUp className="text-green" /></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap width-800">
                                            <img src={require('../../assets/img/selling4.jpg').default} alt="" width={60} />
                                            <div>
                                                <h6 className="mb-0">Wireless Charger</h6>
                                                <p className="mb-0"><span className="text-green">5.921</span> orders</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>$130.992</span>
                                    </td>
                                    <td>
                                        <span>$7.364</span>
                                    </td>
                                    <td>
                                        <span className="d-flex align-items-center">5 <MdKeyboardArrowDown className="text-red" /></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap width-800">
                                            <img src={require('../../assets/img/selling5.jpg').default} alt="" width={60} />
                                            <div>
                                                <h6 className="mb-0">Mountain Trip Kit (Camera + Backpack)</h6>
                                                <p className="mb-0"><span className="text-green">921</span> orders</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>$140.925</span>
                                    </td>
                                    <td>
                                        <span>$20.531</span>
                                    </td>
                                    <td>
                                        <span className="d-flex align-items-center">121 <MdKeyboardArrowUp className="text-green" /></span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>

        </Layout>
    )
}

export default Sales
