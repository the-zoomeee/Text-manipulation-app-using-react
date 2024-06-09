import React from 'react'

export default function About(props) {
    document.title = "TextChef - About Us";
  return (
    <div>
        <div className="container my-5" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h1 align ="center">About Our App</h1>
            <p>This app is a simple text manipulation tool built using React. It allows users to perform various operations on text such as clearing, copying, pasting, converting to uppercase or lowercase, and removing extra spaces. Additionally, it provides a summary of the text including the number of lines, words, and characters.</p>
            
            <h2>How to Use</h2>
            <p>To get started, simply type or paste your text into the input area. Then, you can use the provided buttons to perform different actions on the text.</p>
            
            <h2>Features</h2>
            <ul>
                <li><strong>Clear:</strong> Clears the text input.</li>
                <li><strong>Copy:</strong> Copies the text to the clipboard.</li>
                <li><strong>Paste:</strong> Pastes text from the clipboard into the input area.</li>
                <li><strong>Convert to Upper Case:</strong> Converts the text to uppercase.</li>
                <li><strong>Convert to Lower Case:</strong> Converts the text to lowercase.</li>
                <li><strong>Remove Extra Spaces:</strong> Removes extra spaces from the text.</li>
                <li><strong>Text Summary:</strong> Provides a summary of the text including the number of lines, words, and characters.</li>
            </ul>

            <h2>Feedback</h2>
            <p>If you have any feedback or suggestions for improving this app, please feel free to contact us.</p>
        </div>
    </div>
  )
}
