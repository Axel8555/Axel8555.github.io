"use client";
import * as React from "react";
import Image from 'next/image';

export default function MyComponent(props) {
    return (
        <>
            <footer>
                <ul>
                    <li>
                        <a href="mailto:leonardoaxelortiz@gmail.com" target="_parent" className="social-media">
                            <Image
                                className="social-media-icon"
                                src="/email.png"
                                alt="Email icon"
                                width={100}
                                height={100}
                                loading="lazy"
                            />
                            <div className="social-media-text">Red social</div>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:leonardoaxelortiz@gmail.com" target="_parent" className="social-media">
                            <Image
                                className="social-media-icon"
                                src="/email.png"
                                alt="Email icon"
                                width={100}
                                height={100}
                                loading="lazy"
                            />
                            <div className="social-media-text">Red social</div>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:leonardoaxelortiz@gmail.com" target="_parent" className="social-media">
                            <Image
                                className="social-media-icon"
                                src="/email.png"
                                alt="Email icon"
                                width={100}
                                height={100}
                                loading="lazy"
                            />
                            <div className="social-media-text">Red social</div>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:leonardoaxelortiz@gmail.com" target="_parent" className="social-media">
                            <Image
                                className="social-media-icon"
                                src="/email.png"
                                alt="Email icon"
                                width={100}
                                height={100}
                                loading="lazy"
                            />
                            <div className="social-media-text">Red social</div>
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

