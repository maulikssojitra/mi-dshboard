import React, { useState } from 'react'
import Layout from '../../Sidebar/Layout'
import { GiEarthAmerica } from 'react-icons/gi'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { MdWeekend, MdRefresh, MdModeEdit } from 'react-icons/md'
import { RiBarChartFill } from 'react-icons/ri'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { FaUserAlt, FaLocationArrow } from 'react-icons/fa'
import data from '../../Data/country_data.json'

import Barchart from '../../charts/Barchart'
import Linechart from '../../charts/Linechart'
import LinechartS from '../../charts/LinechartS'


const Analytics = (props) => {

    const [countryData, setCountryData] = useState(data);

    return (
        <Layout header={true} footer={true} sidebar={true} breadcrumb="Analytics">

            <div className="analytics-main">
                <div className="sales-by-country">
                    <div className="sales-country-header">
                        <h5>Sales by Country</h5>
                        <div className="sales-country-logo">
                            <GiEarthAmerica />
                        </div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={6} md={12}>
                            <div className="salse-table mt-3">
                                <Table responsive>
                                    <tbody>
                                        {
                                            countryData.slice(1,5).map((e,i) => {
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
                                                                <span>Value:</span>
                                                                <span>${e.Value}</span>
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

                                        {/* <tr>
                                            <td>
                                                <img src={require('../../assets/img/germany.png').default} alt="" width={25} />
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>Germany</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>3.900</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>$440,000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>40.22%</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={require('../../assets/img/great-bitain.png').default} alt="" width={25} />
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>Great Britain</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>1.400</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>$190,700</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>23.44%</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={require('../../assets/img/Brasil.png').default} alt="" width={25} />
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>Brasil</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>562</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>$143,960</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="country-name">
                                                    <span>Country:</span>
                                                    <span>32.14%</span>
                                                </div>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="map-img d-flex justify-content-center align-items-center">
                                <img src={require('../../assets/img/map.png').default} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div >
            </div>

            <div className="chart-main mt-5">
                <Row className="justify-content-center">
                    <Col lg={4} md={6} sm={12}>
                        <div className="chart-box">
                            <div className="chart bg-blue">
                                <Barchart />
                            </div>
                            <div className="chart-header">
                                <h5>Website Views</h5>
                                <p>Last Campaign Performance</p>
                            </div>
                            <p className="mt-3">campaign sent 2 days ago</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="chart-box margin-chart-sm">
                            <div className="chart bg-green">
                                <Linechart />
                            </div>
                            <div className="chart-header">
                                <h5>Daily Sales</h5>
                                <p>(+15%) increase in today sales.</p>
                            </div>
                            <p className="mt-3">updated 4 min ago</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="chart-box margin-chart-md">
                            <div className="chart bg-black">
                                <LinechartS />
                            </div>
                            <div className="chart-header">
                                <h5>Completed Tasks</h5>
                                <p>Last Campaign Performance</p>
                            </div>
                            <p className="mt-3">just updated</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="hotel-main">
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <div className="hotel-box">
                            <div className="weekend-logo bg-black">
                                <MdWeekend />
                            </div>
                            <div className="hotel-per d-flex justify-content-end">
                                <div className="text-right">
                                    <span>Bookings</span>
                                    <h3>281</h3>
                                </div>
                            </div>
                            <p><span className="text-green">+55%</span>than lask week</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="hotel-box ">
                            <div className="weekend-logo bg-blue">
                                <RiBarChartFill />
                            </div>
                            <div className="hotel-per d-flex justify-content-end">
                                <div className="text-right">
                                    <span>Today's Users</span>
                                    <h3>2,300</h3>
                                </div>
                            </div>
                            <p><span className="text-green">+3%</span>than last month</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="hotel-box">
                            <div className="weekend-logo bg-green">
                                <SiHomeassistantcommunitystore />
                            </div>
                            <div className="hotel-per d-flex justify-content-end">
                                <div className="text-right">
                                    <span>Revenue</span>
                                    <h3>34k</h3>
                                </div>
                            </div>
                            <p><span className="text-green">+1%</span>than yesterdayk</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="hotel-box">
                            <div className="weekend-logo bg-pink">
                                <FaUserAlt />
                            </div>
                            <div className="hotel-per d-flex justify-content-end">
                                <div className="text-right">
                                    <span>Followers</span>
                                    <h3>+91</h3>
                                </div>
                            </div>
                            <p>Just updated</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="hotel-location">
                <Row className="justify-content-center">
                    <Col lg={4} md={6} sm={12}>
                        <div className="location-box mt-xs-0">
                            <img className="location1" src={require('../../assets/img/location1.jpg').default} alt="location" />
                            <div className="edit-refresh">
                                <Button className="refresh-btn text-pink"><MdRefresh /></Button>
                                <Button className="refresh-btn text-blue"><MdModeEdit /></Button>
                            </div>
                            <div className="location-def text-center mt-3">
                                <h4>Cozy 5 Stars Apartment</h4>
                                <p>The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelon</p>
                            </div>
                            <div className="location d-flex align-items-center justify-content-between mt-3">
                                <h5 className="mb-0">$899/night</h5>
                                <span><FaLocationArrow /> Barcelona, Spain</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="location-box margin-sm">
                            <img className="location1" src={require('../../assets/img/location2.jpg').default} alt="location" />
                            <div className="edit-refresh">
                                <Button className="refresh-btn text-pink"><MdRefresh /></Button>
                                <Button className="refresh-btn text-blue"><MdModeEdit /></Button>
                            </div>
                            <div className="location-def text-center mt-3">
                                <h4>Office Studio</h4>
                                <p>The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.</p>
                            </div>
                            <div className="location d-flex align-items-center justify-content-between mt-3">
                                <h5 className="mb-0">$1.119/night</h5>
                                <span><FaLocationArrow /> London, UK</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="location-box margin-md">
                            <img className="location1" src={require('../../assets/img/location3.jpg').default} alt="location" />
                            <div className="edit-refresh">
                                <Button className="refresh-btn text-pink"><MdRefresh /></Button>
                                <Button className="refresh-btn text-blue"><MdModeEdit /></Button>
                            </div>
                            <div className="location-def text-center mt-3">
                                <h4>Beautiful Castle</h4>
                                <p>The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.</p>
                            </div>
                            <div className="location d-flex align-items-center justify-content-between mt-3">
                                <h5 className="mb-0">$459/night</h5>
                                <span><FaLocationArrow /> Milan, Italy</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Layout>
    )
}

export default Analytics
