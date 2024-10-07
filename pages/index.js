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

  return (
    <div className="container">
      <div className="content">
        {/* <h1 className="title">GAIA'S GARDEN</h1> */}
        <p className="subtitle">
          <strong> WELLNESS, STREETWEAR, COMMUNITY EVENTS </strong><br/> <br/>
          (Launching Nov 2024 - Presale Live)
        </p>

        {/* Mailchimp Signup Form */}
        {!submitted ? (
          <div className="email-signup">
             <img src="/seed.png" alt="Seed Background" className="seed-image" />
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
                <h2>Stay in Touch 😊</h2>
                <p>For things like e-books, drops, and events</p>
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

        {/* New "Sign up for Presale" Button */}
        <div className="presale-button">
          <Link href="/shop">
            <button type="button">Sign up for Presale</button>
          </Link>
        </div>
        <p className="subtitle">
          Made with ❤️ in Brooklyn, NY.
        </p>
      </div>

      <img src="/vine.png" alt="Vine Top Left" class="vine vine-top-left" />
      <img src="/vine.png" alt="Vine Top Right" class="vine vine-top-right" />
      <img src="/vine.png" alt="Vine Bottom Left" class="vine vine-bottom-left" />
      <img src="/vine.png" alt="Vine Bottom Right" class="vine vine-bottom-right" />
    </div>
  );
}
