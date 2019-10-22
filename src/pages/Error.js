import React from 'react'
import {Link} from 'react-router-dom';
import LogoImg from "../logo/logo(transparent).png";

export default function Error() {
    return (
        <>
        <nav className="admin-navigation1">
                <div className="logo-admin">
                    <img src={LogoImg} alt="Logo"/>
                </div>
                <ul>
               </ul>
                <div id="clear"></div>
                <div className="admin-header p-l-100">
                    <h1>404: Page Not Found</h1>
                </div>
                <div className="nav-space"></div>
        </nav>
        <div className="page-not-found">
            <div className="page-not-found2 m-t-100">
                <h2>Sorry! The page that are you looking for does not exist</h2>
            <div className="page-not-found3 m-t-50">
            <Link className="page-not-found-btn" to='/'>Our Home Page!</Link>
            </div>
            </div>
        </div>
        </>
    )
}
