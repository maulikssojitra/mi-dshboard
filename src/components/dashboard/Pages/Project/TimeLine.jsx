import React, { useState } from 'react'
import Layout from '../../../Sidebar/Layout'

import timelineData from '../../../Data/TimelineData.json'

const TimeLine = () => {

    const [data, setData] = useState(timelineData);

    return (
        <Layout header={true} footer={true} breadcrumb="Timeline">

            <div className="timeline">
                <div className="timeline-box">
                    <h5>Timeline with dotted line</h5>
                    <div className="timeline-main mt-4 ms-5">
                        {
                            data.map((index) => {
                                return (
                                    <div key={index} className="time-box mt-5">
                                        <h6>{index.title}</h6>
                                        <span>{index.time}</span>
                                        <p>{index.def}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default TimeLine
