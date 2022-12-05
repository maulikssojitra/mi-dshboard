import React, { Fragment, useState } from 'react'
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
            </main>

        </Fragment>
    )
}

export default Layout
