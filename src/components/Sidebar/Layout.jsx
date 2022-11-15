import React, { Fragment, useState } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {

    const [isToggle, setIsToggle] = useState();

    return (
        <Fragment>

            <main className='dashboard-content'>
                {
                    props.header === false ? "" : <Header setIsToggle={setIsToggle} isToggle={isToggle} breadcrumb={props.breadcrumb} />
                }

                {props.children}

                {
                    props.footer === false ? "" : <Footer />
                }
            </main>

        </Fragment>
    )
}

export default Layout
