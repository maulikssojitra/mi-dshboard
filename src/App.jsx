import React, { Fragment } from 'react'
import {
    Route,
    Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Analytics from './componets/dashboard/main/Analytics';
import Sales from './componets/dashboard/main/Sales';
import ProfileMain from './componets/dashboard/Profile/ProfileMain';
import TimeLine from './componets/dashboard/Pages/Project/TimeLine';
import User from './componets/dashboard/Pages/Users/User';

import 'bootstrap/dist/css/bootstrap.min.css';
import './componets/assets/css/Main.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

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
                <Route path="/" element={<Analytics />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/profile" element={<ProfileMain />} />
                <Route path="/newuser" element={<User />} />
                <Route path="/timeline" element={<TimeLine />} />
            </Routes>
        </Fragment>
    )
}

export default App
