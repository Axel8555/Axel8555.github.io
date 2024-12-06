// @/components/Footer.jsx

export default function Footer({ contacts }) {
  return (
    <>
      <footer
        className=" bg-white
        w-full
        p-1
        rounded-lg
        shadow-xl
      "
      >
        <ul className="flex pl-0  justify-center gap-4 p-0 m-0        ">
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="list-none  w-full
            "
            >
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-media textdecoration-none rounded p-2 hover:bg-blue-400
                active:bg-indigo-300
                "
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
