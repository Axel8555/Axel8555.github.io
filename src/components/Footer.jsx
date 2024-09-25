// @/components/Footer.jsx

export default function Footer({ contacts }) {
  return (
    <>
      <footer>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-media"
              >
                <img
                  className="social-media-icon"
                  src={contact.icon}
                  alt={contact.type}
                  width={100}
                  height={100}
                />
                <div className="social-media-text">{contact.text}</div>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
