//"use client";
import * as React from "react";
import AcademicExperience from "./Main/AcademicExperience";
import ProfessionalExperience from "./Main/ProfessionalExperience";

export default function Main() {
  return (
    <>
      <main>
        <div className="area0-important">
          <section>
            <h2>SUMMARY</h2>
            <p>
              I am close to completing my Computer Systems Engineering degree at the Escuela Superior de Cómputo, Instituto Politécnico Nacional. I have experience in web and application development, databases, networking, and cloud solutions. My passion for programming and technology motivates me to continually seek challenges that take me out of my comfort zone which push my boundaries and enhance my skills. Beyond academics, I enjoy playing video games, listening to music, and exploring new hobbies like skating.
            </p>
          </section>
        </div>
        <article>
          <section>
            <h2>EDUCATION</h2>
            {/* <p>
              <a className="upper break" href="http://www.enms-irapuato.ugto.mx/" target="contenido">2019 • ESCUELA DE NIVEL MEDIO SUPERIOR DE IRAPUATO • UNIVERSIDAD DE GUANAJUATO</a>
              General baccalaureate oriented to engineering.
            </p> */}
            <p>
              <a className="upper break" href="https://www.escom.ipn.mx/" target="_blank" aria-label="Sitio web de la Escuela Superior de Cómputo del Instituto Politécnico Nacional">
                GRADUATION EXPECTED IN JANUARY 2025 • ESCUELA SUPERIOR DE CÓMPUTO • INSTITUTO POLITÉCNICO NACIONAL
              </a>
              <br />
              Computer Systems Engineering.
            </p>
          </section>
          <section>
            <ProfessionalExperience />
          </section>
          <section>
            <AcademicExperience />
          </section>
        </article>
        <aside>
          <section>
            <h2>PROFESSIONAL OBJECTIVE</h2>
            <p>
              I aim to apply my technical expertise and innovative thinking to drive the development of systems within forward-thinking companies. My goal is to deliver solutions that not only meet technical specifications but also contribute significantly to business goals, enhancing efficiency and competitive edge.
            </p>
          </section>
          <section>
            <h2>HARD SKILLS</h2>
            <ul>
              <li><span className="bold">Programming:</span> C, Golang, Python, Java, JavaScript, Assembler.</li>
              <li><span className="bold">Web development:</span> HTML, CSS, React, Next.js.</li>
              <li><span className="bold">Mobile development:</span> Android Studio.</li>
              <li><span className="bold">Databases:</span> PostgreSQL.</li>
              <li><span className="bold">Networking:</span> Configuration and management of physical and cloud-based network topologies.</li>
              <li><span className="bold">Cloud:</span> Microsoft Azure, Amazon Web Services.</li>
              <li><span className="bold">Operating Systems:</span> Linux Ubuntu & Debian.</li>
              <li><span className="bold">Collaboration:</span> GitHub, Figma, Trello.</li>
              <li><span className="bold">Data analysis:</span> KNIME, Advanced Excel, Power BI.</li>
            </ul>
          </section>
        </aside>
        <aside className="area3-important">
          <section>
            <h2>SOFT SKILLS</h2>
            <ul>
              <li>Comunication</li>
              <li>Adaptability</li>
              <li>Creative Problem Solving</li>
              <li>Collaborative Spirit</li>
              <li>Continuous Improvement</li>
              <li>Professional Integrity</li>
            </ul>
          </section>
          <section>
            <h2>LANGUAGES</h2>
            <ul>
              <li>Spanish</li>
              <li>English - B2</li>
            </ul>
          </section>
        </aside>
      </main>
    </>
  );
}

