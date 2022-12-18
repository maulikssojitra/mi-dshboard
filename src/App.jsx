import React, { Fragment } from 'react'
import {
    Outlet,
    Route,
    Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Analytics from './components/dashboard/main/Analytics';
import Sales from './components/dashboard/main/Sales';
import ProfileMain from './components/dashboard/Profile/ProfileMain';
import TimeLine from './components/dashboard/Pages/Project/TimeLine';
import User from './components/dashboard/Pages/Users/User';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/assets/css/Main.css'
import 'react-toastify/dist/ReactToastify.css';

import Setting from './components/dashboard/Pages/setting/Setting';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/auth/Login';


const App = () => {


    const RouteWithSidebar = () => {
        return (
            <>
                <Sidebar  />
                <Outlet />
            </>
        )
    }

    return (
        <Fragment>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme='dark'
                promise={2000}
            />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route element={<RouteWithSidebar />}>
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/profile" element={<ProfileMain />} />
                    <Route path="/new-user" element={<User />} />
                    <Route path="/timeline" element={<TimeLine />} />
                    <Route path="/setting" element={<Setting />} />
                </Route>
            </Routes>
        </Fragment>
    )
}

export default App
