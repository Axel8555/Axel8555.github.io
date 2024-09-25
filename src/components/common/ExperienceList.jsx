// components/common/ExperienceList.js
export default function ExperienceList({ title, data }) {
  return (
    <>
      <h2>{title}</h2>
      <ol>
        {data.map((item, index) => (
          <li key={index}>
            <h4>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h4>
            {item.subtitle && <h5 className="italic">{item.subtitle}</h5>}
            {item.details && (
              <ul>
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}
