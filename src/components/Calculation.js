import React, { useState } from "react";

export default function Textform(props) {
  const handleaddclick = () => { 
    let add = Number(val1)+Number(val2)
    nTotal(add);
  };
  const handlesubclick = () => { 
    let sub = Number(val1)-Number(val2)
    nSub(sub);
  };
  const handlemultclick = () => { 
    let mult = Number(val1)*Number(val2)
    nMul(mult);
  };
  const handledivclick = () => { 
    let div = Number(val1)/Number(val2)
    nDiv(div);
  };

   const handleval1change = (event) => {
   Val1(event.target.value);
   };
   const handleval2change = (event) => {
   Val2(event.target.value);
   };

  //  const toogleStyle = () => {
  //   if (mystyle.color === "black") {
  //       setMystyle({
  //           color: "white",
  //           backgroundColor: "black",
  //           border: "1px solid white",
  //       })
  //       SetBtnText("Enable Light Mode")
  //   }
  //   else {
  //     setMystyle({
  //         color: 'black',
  //         backgroundColor: 'white'
  //     })
  //     SetBtnText("Enable Dark Mode")
  // }
  //  }
  
  const [val1, Val1] = useState();
  const [val2, Val2] = useState();
  const [total, nTotal] = useState();
  const [sub, nSub] = useState();
  const [mul, nMul] = useState();
  const [div, nDiv] = useState();
  // const[mystyle, setMystyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });
  // const[btnText, SetBtnText] = useState("Enable Dark mode")

  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'rgb(116 109 109)':'white'
}

  // setText("Your Text here");
  return (
    <>
    <div style ={{backgroundColor: props.mode ==='dark'?'grey':'white'}}>
    <h1 style= {{color: props.mode === 'dark'?'white':'black'}}>Basic Calculations</h1>
      <div className="Container" style = {myStyle}>
        <div className="form-group">
          <label htmlFor="int">Enter numbers to be added</label>
          <br></br>
          <input
            type = "number"
            className="int1"
            value={val1}
            onChange={handleval1change}
            id="mybox1"
            rows="8"
            cols="100"
          ></input>
          <input
            type = "number"
            className="int2"
            value={val2}
            onChange={handleval2change}
            id="mybox2"
            rows="8"
            cols="100"
          ></input>
        </div>
        <button className="btn btn-primary" onClick={handleaddclick} disabled={val1 === undefined || val2 === undefined}>
          Add
        </button>
        <p>Sum of the given numbers is {total}</p>
        <button className="btn btn-primary" onClick={handlesubclick} disabled={val1 === undefined || val2 === undefined}>
          Subtract
        </button>
        <p>Difference of the given numbers is {sub}</p>
        <button className="btn btn-primary" onClick={handlemultclick} disabled={val1 === undefined || val2 === undefined}>
          Multiply
        </button>
        <p>Product of the given numbers is {mul}</p>
        <button className="btn btn-primary" onClick={handledivclick} disabled={val1 === undefined || val2 === undefined}>
          Divide
        </button>
        <p>Quoitent of the given numbers is {div}</p>
      </div> 
      {/* <div>
      <button className="btn4 btn-primary" onClick={toogleStyle}>
          {btnText}
      </button>
      </div> */}
      </div>
    </>
  );
}
