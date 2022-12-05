import React, { Fragment } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Layout from '../../../Sidebar/Layout'

const Setting = () => {

  const [isActive, setIsActive] = useState("Messages");

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
      </div>
    </Layout>
  )
}

export default Setting
