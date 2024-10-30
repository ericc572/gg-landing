import { useState } from 'react';
import Link from 'next/link';


export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
       <div className="cloud large-cloud">
          <img src="/png-cloud.png" />
          <div className="logo">
            <Link href="/"> 
              <img src="/gaia-garden-logo.png" alt="Logo" />
            </Link>
          </div>
        </div> 

        <div className="cloud cloud-1"><img src="/png-cloud.png" /></div>
        <div className="cloud cloud-2"><img src="/png-cloud.png" /></div>
        <div className="cloud cloud-3"><img src="/png-cloud.png" /></div>

       
      <div className="content">
        <h1 className="title">
          <strong> 💧 NATURE </strong> 
          <br/>
          <strong> 💧 WELLNESS </strong>
          <br/>
          <strong> 💧 COMMUNITY </strong>
        </h1>
        <p className="subtitle">(LAUNCHING 11/24 - PRESALE)</p>

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
                <h3 className="stayInTouch">JOIN OUR MAILING LIST </h3>
                <h3> TO STAY UPDATED ☺️</h3>
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

        <p className="footer">Made with ❤️ in Brooklyn, NY.</p>
        
        <div className="presale-button">
          <Link href="/shop">
            <button type="button">Presale 👈</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
