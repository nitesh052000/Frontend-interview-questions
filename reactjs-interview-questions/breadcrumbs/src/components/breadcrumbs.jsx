import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const paths = pathname.split("/").filter((x) => x);
  let breadcrumb = "";

  console.log("path", paths);

  console.log("location", location);

  return (
    <div>
      <Link to="/">Home</Link>
      {paths?.map((name, index) => {
        breadcrumb += `/${name}`;
        const islAST = index === paths.length - 1;

        return islAST ? (
          <span key={breadcrumb}>/ {name}</span>
        ) : (
          <span>
            /<Link to={breadcrumb}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
