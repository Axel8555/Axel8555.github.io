"use client";
import * as React from "react";
import Experience from "./Main/Experience";


export default function Main() {
  return (
    <>
      <main>
        <article>
          <section>
            <h2>SUMMARY</h2>
            <p>
              I am a student of Computer Systems Engineering at the Escuela Superior de Cómputo at the Instituto Politécnico Nacional, currently in the 9th semester. My passion for programming has led me to explore new technologies. I constantly seek challenges that take me out of my comfort zone and allow me to learn and grow.
              My experience includes web development projects, applications, backend, databases, networks, cloud services, and microcontrollers.
              I'm a quick learner, adapt easily to different work environments, and have the ability to analyze problems from different perspectives.
              Outside of school, I enjoy video games, playing the guitar, and learning new things, like skating.
            </p>
          </section>
          <section>
            <h2>EDUCATION</h2>
            <p>
              <a className="upper break" href="http://www.enms-irapuato.ugto.mx/" target="contenido">2019 • ESCUELA DE NIVEL MEDIO SUPERIOR DE IRAPUATO • UNIVERSIDAD DE GUANAJUATO</a>
              General baccalaureate oriented to engineering.
            </p>
            <p>
              <a className="upper break" href="https://www.escom.ipn.mx/" target="contenido">CURRENTLY 10° SEMESTER • ESCUELA SUPERIOR DE COMPUTO • INSITITUTO POLITECNICO NACIONAL</a>
              Computer Systems Engineering.
            </p>
          </section>
          <section>
            <Experience/>
          </section>
        </article>
        <aside>
          <section>
            <h2>PROFESSIONAL OBJECTIVE</h2>
            <p>
              I seek to expand my knowledge and skills in the field of Computer Systems to define the direction of my education and professional life. My main purpose is to lead and contribute to the design, development, and improvement of systems while I continue learning and adapting to the latest technological trends.
            </p>
          </section>
          <section>
            <h2>SKILLS</h2>
            <ul>
              <li><span className="bold">Programming:</span> C, Golang, Python, Java, JavaScript, Assembler.</li>
              <li><span className="bold">Web development:</span> HTML, CSS, React, Next.js.</li>
              <li><span className="bold">Mobile development:</span> Android Studio.</li>
              <li><span className="bold">Databases:</span> PostgreSQL.</li>
              <li><span className="bold">Networking:</span> Physical topologies (especially with TPLink OMADA) and cloud solutions.</li>
              <li><span className="bold">Cloud:</span> Microsoft Azure, Amazon Web Services.</li>
              <li><span className="bold">Collaboration:</span> GitHub, Figma, Trello.</li>
              <li><span className="bold">Data analysis:</span> KNIME, Advanced Excel.</li>
            </ul>
          </section>
          <section>
            <h2>ABILITIES</h2>
            <ul>
              <li>Adaptability in various environments.</li>
              <li>Continuous learning with a focus on technological trends.</li>
              <li>Creative problem-solving from multiple perspectives.</li>
              <li>Translation of abstract concepts to practical solutions.</li>
              <li>Effective collaboration in multidisciplinary teams.</li>
              <li>Continuous improvement and innovation.</li>
              <li>Good programming practices.</li>
              <li>Dedication and integrity.</li>
            </ul>
          </section>
          <section>
            <h2>LANGUAGES</h2>
            <ul>
              <li>Spanish</li>
              <li>English - Intermediate/Advanced</li>
            </ul>
          </section>
        </aside>
      </main>

    </>
  );
}

