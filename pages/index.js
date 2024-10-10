import { useState } from 'react';
import Link from 'next/link'; // For navigation

export default function Home() {
  const [email, setEmail] = useState(''); // State for Mailchimp email input
  const [submitted, setSubmitted] = useState(false); // State for form submission

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  // const hamburger = document.getElementById('hamburger');
  // const navLinks = document.querySelector('.nav-links');

  // hamburger.addEventListener('click', () => {
  //   navLinks.classList.toggle('active');
  // });

  return (
    <div className="container">
      <div className="content">
        {/* <h1 className="title">GAIA'S GARDEN</h1> */}
        <h1 className="title">
          <strong> WELLNESS, STREETWEAR, COMMUNITY EVENTS </strong>
        </h1>
        <p className="subtitle">(Launching Nov 2024 - Presale Live)</p>

        {/* Mailchimp Signup Form */}
        {!submitted ? (
          <div className="email-signup">
             <img src="/danny-seed2.png" alt="Seed Background" className="seed-image" />
            <div className="form-container">
              <form
                action="https://gmail.us9.list-manage.com/subscribe/post?u=126538c8098f69a41b6383351&amp;id=74fe6c2574&amp;f_id=008956e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_self"
                noValidate=""
                onSubmit={handleEmailSubmit}
              >
                <h2 className='stayInTouch'> <strong> Stay in Touch 😊 </strong></h2>
                <p>For resources, drops, and events</p>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  value={email}
                  onChange={handleEmailChange}
                  required=""
                  placeholder="Email Address"
                />
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        ) : (
          <p>Thanks for subscribing! 🌱</p>
        )}

        <p className="footer">
          Made with ❤️ in Brooklyn, NY.
        </p>
        {/* New "Sign up for Presale" Button */}
        <div className="presale-button">
          <Link href="/shop">
            <button type="button">Join the Presale 🙏</button>
          </Link>
        </div>
       
      </div>
    </div>
  );
}
