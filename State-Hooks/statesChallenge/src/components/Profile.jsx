import { useState } from "react";
const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const handleChange = e  => {
    const {name, value} = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile, [name]:value
    }))
  }
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="num"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          gender:
          <input
            type="text"
            name="gender"
            value={profile.gender}
            onChange={handleChange}
          />
        </label>
      </div>

      <h3>ProfileInformation</h3>
      <p>Name:{profile.name}</p>
      <p>Age:{profile.age}</p>
      <p>gender:{profile.gender}</p>
    </div>
  );
};

export default Profile;
