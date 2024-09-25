// @/components/MainComponent.jsx

import ExperienceList from "./common/ExperienceList";
import SkillsList from "./common/SkillsList";

export default function Main({
  summary,
  education,
  professionalObjective,
  hardSkills,
  softSkills,
  languages,
  academicExperience,
  professionalExperience,
}) {
  return (
    <>
      <main>
        <div className="area0-important">
          <section>
            <h2>SUMMARY</h2>
            <p>{summary}</p>
          </section>
        </div>
        <article>
          <section>
            <h2>EDUCATION</h2>
            {education.map((edu, index) => (
              <p key={index}>
                <a
                  className="upper break"
                  href={edu.link}
                  target="_blank"
                  aria-label={`Website ${edu.institution}`}
                >
                  {edu.institution}
                </a>
                {edu.degree}.
              </p>
            ))}
          </section>
          <section>
            <ExperienceList
              title="PROFESSIONAL EXPERIENCE"
              data={professionalExperience}
            />
          </section>
          <section>
            <ExperienceList
              title="ACADEMIC EXPERIENCE"
              data={academicExperience}
            />
          </section>
        </article>
        <aside>
          <section>
            <h2>PROFESSIONAL OBJECTIVE</h2>
            <p>{professionalObjective}</p>
          </section>
          <section>
            <SkillsList
              title="HARD SKILLS"
              skills={hardSkills}
              type="category"
            />
          </section>
        </aside>
        <aside className="area3-important">
          <section>
            <SkillsList
              title="SOFT SKILLS"
              skills={softSkills}
              type="list"
            />
          </section>
          <section>
            <h2>LANGUAGES</h2>
            <ul>
              {languages.map((lang, index) => (
                <li key={index}>
                  {lang.language} - {lang.level}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </main>
    </>
  );
}
