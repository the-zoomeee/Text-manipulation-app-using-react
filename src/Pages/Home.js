import React, {useState} from 'react'


export default function AppForm(props) {
    const [Text, setText] = useState("Enter the text here...");

    const clear = ()=> {
        setText("");
        props.showAlert("Text cleared", "danger");
    }

    const copy = ()=> {
        navigator.clipboard.writeText(Text);
        if (Text === "")
        {
            props.showAlert("Please enter some text", "warning");
        }
        else
        {
            props.showAlert("Text copied", "success");
        }
    }

    const paste = async ()=> {
        let newText = await navigator.clipboard.readText();
        let writeText = Text;
        writeText = writeText + newText;
        setText(writeText);
    }





    const toUpperCase = ()=> {
        let newText = Text.toUpperCase();
        setText(newText);
        if (Text === "")
        {
            props.showAlert("Please enter some text", "warning");
        }
        else
        {
            props.showAlert("Text converted to uppercase", "success");
        }
    }

    const toLowerCase = ()=> {
        let newText = Text.toLowerCase();
        setText(newText);
        if (Text === "")
        {
            props.showAlert("Please enter some text", "warning");
        }
        else
        {
            props.showAlert("Text converted to lowercase", "success");
        }
    }

    const removeExtraSpaces = ()=> {
        let newText = Text.split(/[ ]+/);
        newText = newText.join(" ");
        setText(newText.trim());
        if (Text === "")
        {
            props.showAlert("Please enter some text", "warning");
        }
        else
        {
            props.showAlert("Extra spaces removed", "success");
        }
    }





    const handleOnChange = (event)=> {
        setText(event.target.value);
    }




    const countLines = (text) => {
        return text.split(/\r\n|\r|\n/).filter(line => line.trim() !== '').length;
    }

    const countWords = (text) => {
        if (Text === "")
            return 0;
        else
            return text.trim().split(/\s+/).filter((element)=> {return element.length !== 0}).length
    }
    document.title = "Text Utils - Home";
  return (
    <>
        <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}> 
            <h1>{props.heading}</h1>
            <div className="my-3">
            
            <textarea className="form-control" id="text" value={Text} onChange={handleOnChange} rows="8" style={{border:"2px solid blue", color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'light' ? 'white' : '#272c2f'}}></textarea>
            
            <div className="my-3">
            <button className="btn btn-primary mx-2 my-3" onClick={clear}>Clear</button>
            <button className="btn btn-primary mx-2 my-3" onClick={copy}>Copy</button>
            <button className="btn btn-primary mx-2 my-3" onClick={paste}>Paste</button>
            </div>

            <button className="btn btn-primary mx-2 my-3" onClick={toUpperCase}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2 my-3" onClick={toLowerCase}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2 my-3" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h1>Your text summary</h1>
            <h3>Line: <span style={{fontSize:"22px"}}>{countLines(Text)}</span></h3>
            <h3>Words: <span style={{fontSize:"22px"}}>{countWords(Text)}</span></h3>
            <h3>Characters: <span style={{fontSize:"22px"}}>{Text.length}</span></h3>
        </div>
    </>
  )
}
