import React, { Fragment } from 'react'
import { FcLike } from 'react-icons/fc'

import '../assets/css/Footer.css'

const Footer = () => {
    return (
        <Fragment>

            <div className="footer">
                <span>© 2021, made with <FcLike /> by Creative Tim for a better web.</span>
                <div className="footer-menu">
                    <ul>
                        <li>
                            Creative Tim
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            License
                        </li>
                    </ul>
                </div>
            </div>

        </Fragment>
    )
}

export default Footer
