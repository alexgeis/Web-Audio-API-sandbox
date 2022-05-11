import React from "react";

function Nav() {
  const navStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  };

  return (
    <>
      <nav style={navStyle}>
        <h1 style={{ textAlign: "center", color: "white" }}>
          Web Audio API Sandbox
        </h1>
        <p>(please turn your volume down as you start these examples)</p>
      </nav>
    </>
  );
}

export default Nav;
