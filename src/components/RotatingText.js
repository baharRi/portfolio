import React, { useState, useEffect } from "react";

function RotatingText({ phrases, interval = 2000 }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // trigger fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFade(true); // trigger fade-in
      }, 300); // fade-out duration
    }, interval);

    return () => clearInterval(timer);
  }, [phrases, interval]);

  const style = {
    display: "inline-block",
    fontWeight: "bold",
    color: "#c2c2c2",
    transition: "opacity 0.3s ease, transform 0.3s ease",
    opacity: fade ? 1 : 0,
    transform: fade ? "translateY(0)" : "translateY(10px)"
  };

  return <span style={style}>{phrases[index]}</span>;
}

export default RotatingText;