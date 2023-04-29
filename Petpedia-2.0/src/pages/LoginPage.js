import React from "react";
import {Login, Navbar, FooterComponent } from "../components";

const LoginPage = () => {
    return (
        <div className="principal">
        <Navbar/>
        <Login/>
        <FooterComponent/>
        </div>
    );
};

export default LoginPage;