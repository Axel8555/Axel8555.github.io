//"use client";
import * as React from "react";


export default function Header() {
    return (
        <>
            <header>
                <div className="main-title">
                    <h1>Leonardo Axel Ortiz Zaragoza</h1>
                    <h3>STUDENT IN COMPUTER SYSTEMS ENGINEERING | ESCOM IPN</h3>
                </div>
                <div className="container-profile-picture">
                    <img
                        className="profile-picture"
                        src="/foto.jpg"
                        alt="Profile picture"
                        width={200}
                        height={200}
                    />
                </div>
            </header>
        </>
    );
}

