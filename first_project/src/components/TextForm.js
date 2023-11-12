import React, {useState} from 'react'
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = ()=>{
    let newtext = text.toUpperCase()
    setText(newtext);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const handleDownClick = () =>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleClearClick = () =>{
    let newtext = "";
    setText(newtext);
  }
  return (
    <div>
        <div className="container mb-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <br />
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleDownClick}>Convert To Lowercase</button>
            <button type="button" className="btn btn-primary" onClick={handleClearClick}>Clear Text!</button>
        </div>
        <div className="container mb-1">
          <h2>Your text summary</h2>
          <p>{text.trim().split(/\s+/).filter(word => word !== "").length} words and {text.length} characters</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    
    </div>
  )
}
