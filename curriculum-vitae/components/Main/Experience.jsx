//"use client";
import * as React from "react";


export default function Experience() {
    return (
        <>
        <h2>EXPERIENCE</h2>
            <h4>Software Development:</h4>
            <ol>
              <li>
                <h4><a href="https://drive.google.com/file/d/1oOotgQFq6Yp-eZvBnBDyT13NRzQxb8cl/view?usp=sharing">First place at Expo ESCOM 2023</a> - Software Engineering - <a className="upper" href="http://circuittoolbox.com/" target="_blank">CircuitToolbox.com</a></h4>
                <ul>
                  <li>Development of a website with basic utilities and electronic calculators.</li>
                  <li>Frontend implemented in Next.JS for a responsive user experience.</li>
                  <li>Development of a microservice in Golang for the <a className="bold" href="http://circuittoolbox.com/calculadora-de-amplificacion" target="_blank">amplification calculator</a>, with communication through TCP sockets.</li>
                  <li>Successful deployment on a virtual machine in AWS.</li>
                </ul>
              </li>
              <li>
                <h4>Wireless Voltmeter with Web Interface</h4>
                <ul>
                  <li>Design of a sensor with circuit protection to measure voltages beyond measurable, 0V - 60V.</li>
                  <li>Digitization of the signal and serialization using the PIC16F628A microcontroller.</li>
                  <li>Development of a microservice with Bluetooth client and a TCP server for the distribution of the voltmeter signal values.</li>
                  <li>Creation of a web interface using Next.js to access and display data on a local network.</li>
                </ul>
              </li>
              <li>
                <h4><a href="https://drive.google.com/file/d/1oIJ1tpl7-OPesHTgqGbgsxoADEEbZiUZ/view?usp=sharing">Semifinalist Hackathon Talent Land 2023</a> – Track Salud Digna</h4>
                <ul>
                  <li>Use of the ChatGPT 3.5 API to recommend nutritious recipes and encourage communication with nutritionists and health experts.</li>
                  <li>Integration of a database of ingredients and recipes to provide accurate recommendations.</li>
                </ul>
              </li>
              <li>
                <h4>Development of a Cannon Controlled by a DSPIC Microcontroller and Android Application</h4>
                <ul>
                  <li>Design and development of a cannon controlled by a DSPIC microcontroller.</li>
                  <li>Development of an Android application that communicates with the cannon through Bluetooth sockets.</li>
                </ul>
              </li>
              <li>
                <h4>Pseudo-translator of an English-Spanish Word with Evolutionary Error Detection</h4>
                <ul>
                  <li>Creation of a system capable of translating a word from English to Spanish.</li>
                  <li>Implementation of the frontend in Next.js and of the microservice in Python, using word processing logic and communication by JSON.</li>
                  <li>Use of the Levenshtein distance to detect errors, count them, and improve predictions.</li>
                  <li>Configuration of a PostgreSQL 15 database for data storage.</li>
                </ul>
              </li>
              <li>
                <h4>Plant Catalog and Their Care</h4>
                <ul>
                  <li>Design and development of a Java-based Android application that provides detailed information on different types of plants and their corresponding care.</li>
                </ul>
              </li>
              <li>
                <h4>E-commerce Website</h4>
                <ul>
                  <li>Development and documentation of an e-commerce website for a fictional car agency.</li>
                </ul>
              </li>
              <li>
                <h4>Bot for Discord</h4>
                <ul>
                  <li>Development of a bot for Discord using Node.js capable of processing text and generating voice through an API.</li>
                </ul>
              </li>
            </ol>
            <h4>Experience in Computer Systems:</h4>
            <ul>
              <li>Design and maintenance of network topologies, including routers, switches, access points, and load balancers, mainly focusing on Omada products.</li>
              <li>Configuration of RAID arrays for efficient data storage management.</li>
              <li>Configuration and maintenance of FTP servers to facilitate file transfer on a subnet.</li>
              <li>Design and configuration of networks for virtual machines in cloud environments such as Microsoft Azure and Amazon Web Services.</li>
            </ul>
        </>
    );
}

