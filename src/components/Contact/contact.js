import { React, useState } from "react";

function Contact() {
  return (
    <section className='contact cover'>
      <div className='content'>
        <h4>Contact</h4>
        <form id='contact-form' onSubmit={}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input 
              type='text' 
              className='form-control' 
              placeholder='name' 
              defaultValue={} 
              onBlur={} 
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>E-Mail</label>
            <input 
              type='text' 
              className='form-control' 
              placeholder='email' 
              defaultValue={} 
              onBlur={} 
            />
          </div>

          <div className='form-group'>
            <label htmlFor='Message'>Message</label>
            <input 
              type='text' 
              className='form-control' 
              placeholder='message' 
              defaultValue={} 
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