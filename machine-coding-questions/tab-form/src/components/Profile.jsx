import React from "react";

const Profile = ({ data, setData }) => {
  console.log("data", data);
  console.log("set", setData);
  const { name, age, email } = data;

  const handleChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <>
      <div className="form-data">
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => handleChange(e, "email")}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => handleChange(e, "age")}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
