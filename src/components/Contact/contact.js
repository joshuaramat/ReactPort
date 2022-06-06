import { React, useState } from "react";

function Contact() {
  const [formState, setFormstate] = useState({name: '', email: '', message: ''});
  
  const [errorMessage, setErrrorMessage] = useState('');

  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className='contact cover'>
      <div className='content'>
        <h4>Contact</h4>
        <form id='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input 
              type='text' 
              className='form-control' 
              placeholder='name' 
              defaultValue={name} 
              onBlur={} 
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>E-Mail</label>
            <input 
              type='text' 
              className='form-control' 
              placeholder='email' 
              defaultValue={email} 
              onBlur={} 
            />
          </div>

          <div className='form-group'>
            <label htmlFor='Message'>Message</label>
            <input 
              type='text' 
              className='form-control' 
              placeholder='message' 
              defaultValue={message} 
              onBlur={} 
            />
          </div>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;