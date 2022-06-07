import { React, useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({name: '', email: '', message: ''});
  const [errorMessage, setErrrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    if (e.target.name === 'E-Mail') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      if (!isValid) {
        setErrrorMessage('invalid email.');
      } else {
        setErrrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrrorMessage(` invalid ${e.target.name}.`);
      } else {
        setErrrorMessage('');
      }
    }

    if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
      }
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
              onBlur={handleChange} 
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>E-Mail</label>
            <input 
              type='email' 
              className='form-control' 
              placeholder='e-mail' 
              defaultValue={email} 
              onBlur={handleChange} 
            />
          </div>

          <div className='form-group'>
            <label htmlFor='Message'>Message</label>
            <textarea
              name='message'
              rows='5'
              className='form-control'
              placeholder='Message'
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          
          {errorMessage && (
            <div>
              <p className='error'>{errorMessage}</p>
            </div>
          )}

          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;