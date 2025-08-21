import React, { Component, useState } from "react";
import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./Interests";

const TabForm = () => {
  const [data, setData] = useState({
    name: "Nitesh",
    age: "25",
    email: "nitesh@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });
  const [activeTab, setActive] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div onClick={() => setActive(index)} className="heading">
            {t.name}
          </div>
        ))}
      </div>

      <div className="active-component">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
    </>
  );
};

export default TabForm;
