import React, { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    occupation: "",
    fileData: "",
    email: "",
    password: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      location,
      occupation,
      fileData,
      email,
      password,
    } = userData;

    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          location,
          occupation,
          fileData,
          email,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error("Error000000000000000000000000");
      }
    } catch (error) {
      console.log(error);
    }
    // /auth/register
  };

  return (
    <div>
      <form onSubmit={postData} method="POST">
        <input
          name="firstName"
          type="text"
          placeholder="firstName"
          value={userData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          name="lastName"
          type="text"
          placeholder="lastName"
          value={userData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          name="location"
          type="text"
          placeholder="location"
          value={userData.location}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="occupation"
          type="text"
          placeholder="occupation"
          value={userData.occupation}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="fileData"
          type="file"
          value={userData.fileData}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="email"
          type="text"
          placeholder="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;
