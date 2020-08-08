import React from "react";
import Button from "./Button/Button";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = (props: any) =>{
    return (
        <div className="header">
            <div className="container">
                <HeaderLogo/>
                <div className="header__cart">
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Header