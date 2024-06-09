import React from 'react'

export default function Contact(props) {
    document.title = "TextChef - Contact Us";
  return (
    <div className="container my-5" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1 align ="center">Contact Us</h1>
        <p>Have questions or feedback? Reach out to us using the form below:</p>
        
        <form>
            <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="form-control" id="name"  style={{border:"2px solid blue", color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'light' ? 'white' : '#272c2f'}}/>
            </div>
            <div className="form-group my-3">
                <label htmlFor="email">Your Email</label>
                <input type="email" className="form-control" id="email"  style={{border:"2px solid blue", color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'light' ? 'white' : '#272c2f'}}/>
            </div>
            <div className="form-group my-3">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5"  style={{border:"2px solid blue", color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'light' ? 'white' : '#272c2f'}}></textarea>
            </div>
            <button type="reset" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
