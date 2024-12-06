// @/components/Header.jsx

import Languages from "./Languages";

export default function Header({ data }) {
  return (
    <>
      <header>
        <div className="main-title">
          <Languages />
          <h1>{data.name}</h1>
          <h3>{data.title}</h3>
        </div>
        <div className="container-profile-picture">
          <img
            className="profile-picture"
            src={data.profilePicture}
            alt="Profile picture"
            width={200}
            height={200}
          />
        </div>
      </header>
    </>
  );
}
