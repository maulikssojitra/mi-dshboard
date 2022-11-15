import React, { Fragment } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../../components/assets/css/Main.css'

const Login = () => {
  return (
    <Fragment>
      <div className='login-main p-3'>
        <div className='banner-img'></div>
        <div className='login-box'>
          <div className='login-box-title'>
            <h3>Login</h3>
            <p>Enter your email and password to Login</p>
          </div>
          <Form className='login-form'>
            <div className='input_field'>
              <input class="input-search" type="text" required="required" />
              <label>Enter Email</label>
            </div>
            <div className='input_field mt-4'>
              <input class="input-search" type="password" required="required" />
              <label>Enter Password</label>
            </div>
            <div className="d-flex align-items-center gap mt-4 remember">
              <label className="input-toggle" for="login">
                <input type="checkbox" id="login" name="switch" />
                <span className="switch"></span>
              </label>
              <p className="mb-0">Remember me</p>
            </div>
            <Button className='mt-5 w-100 login-btn'>Login</Button>
            <p className='last-def'>Don't have an account? <Link to="/"> Sign up</Link></p>
          </Form>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
