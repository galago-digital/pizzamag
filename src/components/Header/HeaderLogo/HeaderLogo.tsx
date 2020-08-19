import React from "react";
import logoSvg from "../../../assets/img/pizza-logo.svg";
import {Link} from "react-router-dom";

const HeaderLogo = (props: any) => {
    return (
        <Link to='/'>
            <div className="header__logo">
                <img width="38" src={logoSvg} alt="Pizza logo"/>
                <div>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
        </Link>
    )
}

export default HeaderLogo