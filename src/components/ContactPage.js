import '../styles/ContactPage.css'
import emailjs from "@emailjs/browser";
import React, {useState, useEffect} from 'react';

const ContactPage = () => {

  const SERVICE_ID = 'service_nwb4x37';
  const TEMPLATE_ID = 'template_n8kyu32';
  const PUBLIC_KEY = 'df3D_SrkpyBGZJPu8';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
		emailjs.init(PUBLIC_KEY);
	}, []);

  const submitForm = async (event) => {
    event.preventDefault();
		try {
			const data = {
				firstName,
        lastName,
        email,
        message
			};
			console.log(data);
			emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
				.then((result) => {
					setFormSent(true);
				}, (error) => {
					console.log(error.text);
				});

		} catch (e) {
			console.log(e);
		}

  }

    return (
      <div className="contact-page-container">
        <div className='form-container'>
          <h1 className="contact-h1">Let's Chat</h1>
          {formSent ? 
            <p>Thank you for reaching out. I will get back to you shortly!</p>
            :
          <div>
          <p className='primary-p'>Contact me by filling out the form and I will get back to you promptly!</p>
          <form onSubmit={submitForm}>
            <div className='name-container'>
              <div className='input-container'>
                <label htmlFor="fname">First name</label>
                <input required type="text" id="fname" name="fname" onChange={({ target }) => setFirstName(target.value)}></input>
              </div>
              <div className='input-container'>
                <label htmlFor="lname">Last name</label>
                <input required type="text" id="lname" name="lname" onChange={({ target }) => setLastName(target.value)}></input>
              </div>
            </div>
            <div className='input-container'>
              <label htmlFor="email">Email</label>
              <input required type="email" id="email" name="email" onChange={({ target }) => setEmail(target.value)}></input>
            </div>
            <div className='input-container'> 
              <label htmlFor="msg">Message</label>
              <textarea required type="text" id="msg" name="msg" onChange={({ target }) => setMessage(target.value)}></textarea>
            </div>
            <button type='submit'>SEND</button>
          </form>
          </div>
          }
          </div>
      </div>
    )
  };
  
  export default ContactPage;