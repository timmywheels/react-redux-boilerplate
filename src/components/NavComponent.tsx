import React, {Component} from "react";
import Logo from "../assets/img/sweetdomains-logo-black-001.svg";
import { Menu, Search } from "react-feather";
import {Link} from "react-router-dom";

class NavComponent extends Component {

    state = {
        showNavBarBoxShadow: false
    };

    listenScrollEvent = (e: any) => {
        if (window.scrollY > 350) {
            this.setState({showNavBarBoxShadow: true})
        } else {
            this.setState({showNavBarBoxShadow: false})
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any): boolean {
        return this.state.showNavBarBoxShadow !== nextState.showNavBarBoxShadow;
    }


    render() {
        return (
            <nav className={`navbar navbar-expand-lg fixed-top navbar-light ${this.state.showNavBarBoxShadow ? 'navbar-shadow' : ''}`}>
                <Link to={'/'} className="navbar-brand">
                    <img src={Logo} width="auto" height="80" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <Menu/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={'/companies'} className="nav-link">Domains<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/events'} className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/investors'} className="nav-link">Social</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavComponent;