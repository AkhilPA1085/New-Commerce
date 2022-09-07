import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import {ReactComponent as Logo} from '../../assets/new.logo.svg'

import './navbar.styles.scss'

const Navbar = () =>{
    return(
        <Fragment>
            <div className="container navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>shop</Link>
                    <Link className="nav-link" to='/sign-in'>sign in</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navbar;