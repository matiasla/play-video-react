import React from "react";
import "../assets/styles/components/Header.scss";

const Header = () => (
    <header className="header">
        <div className="header__brand">
            <i className="header__logo fas fa-play" />
            <h1 className="header__title">PlayVideo</h1>
        </div>
        <nav className="header__menu">
            <div className="header__menu--profile">
                <i className="header__menu--icon fas fa-user" alt="user" />
                <p className="header__menu--text">Perfil</p>
            </div>
            <div className="header__menu--links">
                <a href="#" className="header__menu--link">Cuenta</a>
                <a href="#" className="header__menu--link">Cerrar sesión</a>
            </div>
        </nav>
    </header>
);

export default Header;