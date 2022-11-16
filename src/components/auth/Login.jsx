import React, { Fragment } from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import '../../components/assets/css/Main.css'

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitFormData = (e) => {
    e.preventDefault();

    if (email === "maulik@gmail.com" && password === "123456789") {
      navigate('/analytics');
    }
    else {
      alert("incorrect email and password");
    }
  }

  return (
    <Fragment>
      <div className='login-main p-3'>
        <div className='banner-img'></div>
        <div className='login-box'>
          <div className='login-box-title'>
            <h3>Login</h3>
            <p>Enter your email and password to Login</p>
          </div>
          <Form className='login-form' onSubmit={submitFormData}>
            <div className='input_field'>
              <input className="input-search" type="text" onChange={(e) => setEmail(e.target.value)} required="required" />
              <label>Enter Email</label>
            </div>
            <div className='input_field mt-4'>
              <input className="input-search" type="password" onChange={(e) => setPassword(e.target.value)} required="required" />
              <label>Enter Password</label>
            </div>
            <div className="d-flex align-items-center gap mt-4 remember">
              <label className="input-toggle" htmlFor="login">
                <input type="checkbox" id="login" name="switch" />
                <span className="switch"></span>
              </label>
              <p className="mb-0">Remember me</p>
            </div>
            <Button className='mt-5 w-100 login-btn' type='submit'>Login</Button>
            <p className='last-def'>Don't have an account? <Link to="/"> Sign up</Link></p>
          </Form>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
