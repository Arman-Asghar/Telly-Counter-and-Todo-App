import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const mystyle = {
    color: "white",
    backgroundColor: "#7EB2DD",
    textAlign: "center",
    width: "40vw",
    marginTop: "70px",
    borderRadius: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
  };
  return (
    <div className="container">
      <div style={mystyle}>
        <h1
          style={{
            color: "black",
            fontWeight: "bolder",
            textAlign: "center",
            margin: "10px !important",
          }}
        >
          Counter App
        </h1>

        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            margin: "30px",
            fontWeight: "bolder",
          }}
          onClick={() => setCount(count + 1)}
          type="button"
        >
          Increment
        </button>

        <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "5px",
            margin: "30px",
            fontWeight: "bolder",
          }}
          onClick={() => setCount(count - 1)}
          type="button"
        >
          Decrement
        </button>

        <button
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
            margin: "30px",
            color: "white",
            fontWeight: "bolder",
          }}
          onClick={() => setCount(0)}
          type="button"
        >
          Reset
        </button>

        <h1 style={{ color: "black" }}>{count}</h1>
      </div>
    </div>
  );
}

export default Counter;
