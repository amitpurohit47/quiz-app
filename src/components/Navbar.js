import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        width: "100%",
      }}
    >
      <div className="logo" style={{ flex: 1 }}></div>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          padding:'0 2rem'
        }}
      >
        <li style={{ padding: "1rem",fontSize:'1.5rem' }}>Home</li>
        <li style={{ padding: "1rem",fontSize:'1.5rem' }}>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
