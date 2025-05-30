import React, { useEffect, useState } from "react";

const StaticImageCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isMobile ? "center" : "flex-end",
        alignItems: "center",
        height: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
        paddingRight: isMobile ? "0" : "10vw",
        position: "relative",
      }}
    >
      <div
        style={{
          width: isMobile ? "180px" : "380px",
          height: isMobile ? "180px" : "380px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6C63FF, #AB47BC)",
          padding: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 20px rgba(171, 71, 188, 0.8)",
          animation: "glow 2s infinite alternate",
          marginTop: isMobile ? "40px" : "250px", // Adjusted spacing
        }}
      >
        <img
          src="/desktop_pc/profileimg.png"
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: "#1E1E2E",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
          }}
        />
      </div>
      <style>
        {`
          @keyframes glow {
            0% { box-shadow: 0 0 10px rgba(171, 71, 188, 0.8); }
            100% { box-shadow: 0 0 30px rgba(171, 71, 188, 1); }
          }

          @media (max-width: 768px) {
            .nav-menu {
              max-width: 100vw;
              overflow: hidden;
            }
          }
        `}
      </style>
    </div>
  );
};

export default StaticImageCanvas;
