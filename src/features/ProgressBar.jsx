import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(interval);
          return 100;
        }
        return (prevCount += 10);
      });
    }, 1000);
  }, []);

  const style = {
    wrapper: {
      width: "100%",
      height: "20px",
      backgroundColor: "lightgrey",
    },

    progress: {
      height: "100%",
      width: `${count}%`,
      backgroundColor: "green",
      transition: "2s",
    },
  };
  return (
    <div>
      <h1>ProgressBar {count}%</h1>
      <div style={style.wrapper}>
        <div style={style.progress}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
