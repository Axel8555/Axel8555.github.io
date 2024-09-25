// @/components/common/SkillsList.jsx

export default function SkillsList({ title, skills, type }) {
    return (
      <>
        <h2>{title}</h2>
        {type === "list" ? (
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : type === "category" ? (
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <span className="bold">{skill.category}:</span> {skill.skills}
              </li>
            ))}
          </ul>
        ) : null}
      </>
    );
  }
  