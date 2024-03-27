import React, {useState} from 'react'

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("")
    const handleButtonClick = (value) => {
        if (value === "=") {
          try {
            setResult(eval(input).toString());
          } catch (error) {
            setResult("Error");
          }
        } else if (value === "C") {
          setInput("");
          setResult("");
        } else {
          setInput(input + value);
        }
      };
    
      const buttonStyle = {
        width: "60px",
        height: "60px",
        fontSize: "24px",
        margin: "5px",
        borderRadius: "10px"
      };
    
      const displayStyle = {
        marginBottom: "20px",
        fontSize: "24px",
        width: "250px",
        textAlign: "right",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      };
    
      const resultStyle = {
        marginTop: "10px",
        fontSize: "20px",
        color: "gray"
      };
    
      const calculatorStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      };
    
      const buttonsStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "5px"
      };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Calculator</h1>
      <div style={calculatorStyle}>
        <div style={{ padding: "12px" }}>
          <input type="text" value={input} readOnly style={{ width: "100%" }} />
          <div style={resultStyle}>{result}</div>
        </div>
        <div style={buttonsStyle}>
          {[
            "7",
            "8",
            "9",
            "+",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "*",
            "C",
            "0",
            "=",
            "/"
          ].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              style={buttonStyle}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator
