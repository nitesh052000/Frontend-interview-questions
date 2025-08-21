import React from "react";

const Interests = ({ data, setData }) => {
  const { interests } = data;
  console.log("in", interests.includes["coding"]);

  const handleChange = () => {
    setData((prevState) => ({
      ...prevState,
    }));
  };

  return (
    <div>
      <div>
        <label>Coding</label>
        <input
          type="checkbox"
          name="coding"
          checked={interests.includes("coding")}
        />
      </div>
      <div>
        <label>Music</label>
        <input
          type="checkbox"
          name="music"
          checked={interests.includes("music")}
        />
      </div>
      <div>
        <label>Javascript</label>
        <input
          type="checkbox"
          name="javascript"
          checked={interests.includes("javascript")}
        />
      </div>
    </div>
  );
};

export default Interests;
