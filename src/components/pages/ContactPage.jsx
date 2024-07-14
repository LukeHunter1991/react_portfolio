import { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const [showNameError, setShowNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showMessageError, setShowMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setShowNameError(username.trim() === '');
      return;
    }

    if (!email) {
      setShowEmailError(email.trim() === '');
      return;
    }

    if (!message) {
      setShowMessageError(message.trim() === '');
      return;
    }
    // Reset form on succesful submit
    setUsername("");
    setEmail("");
    setMessage("");
  };

  const handleChange = (e) => {
    
    const { target } = e;

    const field = target.name;
    const value = target.value;

    if (field === "email") {
      setEmail(value);
    } else if (field === "username") {
      setUsername(value);
    } else {
      setMessage(value);
    }
  };

  const handleBlur = (field) => {
    switch (field) {
        case 'username':
            setShowNameError(username.trim() === '');
            break;
        case 'email':
            setShowEmailError(email.trim() === '');
            break;
        case 'message':
            setShowMessageError(message.trim() === '');
            break;
        default:
            break;
    }
};

  return (

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className='form-field'
          value={username}
          name="username"
          onChange={handleChange}
          onBlur={() => handleBlur('username')}
        ></input>
        {showNameError && <div style={{ color: 'blue' }}>Name is required</div>}
        <input
          type="text"
          placeholder="Your Email"
          className='form-field'
          value={email}
          name="email"
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
        ></input>
        {showEmailError && <div style={{ color: 'blue' }}>Email is required</div>}
        <input
          type="text"
          placeholder="Your Message"
          className='form-field'
          id='text-box'
          value={message} 
          name="message"
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
        ></input>
        {showMessageError && <div style={{ color: 'blue' }}>Message is required</div>}
        <button className='form-field' type='submit'>Send Enquiry</button>
      </form>
  )
}

export default ContactForm;