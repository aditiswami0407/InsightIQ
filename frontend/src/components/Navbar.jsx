import React from "react";

function Navbar() {
  return (
    <div
      style={{
        padding: "15px 20px",
        backgroundColor: "#111827", // dark navy
        color: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}
    >
      {/* Left Side - Title */}
      <h2 style={{ margin: 0, fontSize: "20px" }}>
        InsightIQ Dashboard
      </h2>

      {/* Right Side - Optional (future use) */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Future: profile icon / notifications */}
        <span style={{ fontSize: "14px", opacity: 0.8 }}>
          Welcome, User 👋
        </span>
      </div>
    </div>
  );
}

export default Navbar;