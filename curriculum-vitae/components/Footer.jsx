//"use client";
import * as React from "react";

export default function Footer() {
    return (
        <>
            <footer>
                <ul>
                    <li>
                        <a href="mailto:leonardoaxelortiz@gmail.com" target="_parent" className="social-media">
                            <img
                                className="social-media-icon"
                                src="/email.png"
                                alt="Email"
                                width={100}
                                height={100}
                            />
                            <div className="social-media-text">leonardoaxelortiz@gmail.com</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Axel8555" target="_parent" className="social-media">
                            <img
                                className="social-media-icon"
                                src="/github.png"
                                alt="Github"
                                width={100}
                                height={100}
                            />
                            <div className="social-media-text">github.com/Axel8555</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/laoz8555/" target="_parent" className="social-media">
                            <img
                                className="social-media-icon"
                                src="/linkedin.png"
                                alt="Linkedin"
                                width={100}
                                height={100}
                            />
                            <div className="social-media-text">linkedin.com/in/laoz8555</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1H4zcS4PlTrAbtxOaD8ShX9UsFH_bmyH-/view?usp=sharing" target="_parent" className="social-media">
                            <img
                                className="social-media-icon"
                                src="/descarga.png"
                                alt="Download"
                                width={100}
                                height={100}
                            />
                            <div className="social-media-text">Download CV</div>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_parent" className="social-media">
                            <img
                                className="social-media-icon"
                                src="/llave.png"
                                alt="Key"
                                width={100}
                                height={100}
                            />
                            <div className="social-media-text">Public Key</div>
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}
