import React, { useState } from "react";
// import PropTypes from 'prop-types'

export default function Textform(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleclclick = () => {
    setText("");
    setPreview("");
  };
  const handlewsclick = () => {
    let listwords = text.match(/\d{1,3}(,\d{3})*(\.\d+)?/g)
    console.log (listwords,typeof(listwords))
    setwordlt(listwords)
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const handleclick = () => {
    setPreview(text);
  };

  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");
  const [wordlt, setwordlt] = useState("");
  
  // setText("Your Text here");
  return (
    <>
    <div style={{color: props.mode === 'light'?'black':'white'}}>
      <div className="Container">
        <div className="form-group">
          <label htmlFor="textbox">Example text area </label>
          <br></br>
          <textarea
            className="form-Control"
            value={text}
            onChange={handleonchange}
            id="mybox"
            rows="8"
            cols="100"
            style={{backgroundColor: props.mode === 'light'?'white':'grey',color: props.mode === 'light'?'black':'white'}}
        ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick} disabled={text.length===0} >
          Uppercase
        </button>
        <button className="btn1 btn-primary" onClick={handleclclick} disabled={text.length===0} >
          Clear text
        </button>
      </div>
      <div className="Container">
        <p>
          The sentence you entered has {text.length} letters,
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words
        </p>
        <p>It can be read in {0.008*(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} minutes</p>
        <div className="texta">
          <h1>Preview</h1>
          <div>
          <button className="btn1 btn-primary" onClick={handleclick} disabled={text.length===0}>
            Preview
          </button>
          </div>
          <br></br>
          <div rows="8" cols="100">
            {preview}
          </div>
        </div>
      </div>
      <button className="btn3 btn-primary" onClick={handlewsclick} disabled={text.length===0} >
          Words split
      </button>
      <div> 
           {wordlt}
      </div>
      {/* document.getSelection().removeAllRange(); To deselect the copied text */}
    </div>
    </>
  );
}
