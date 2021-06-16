import React from "react";
const Border = ({ children }) => {
  return (
    <div style={{ border: "2px solid white", margin: "5px" }}>{children}</div>
  );
};
export default Border;
