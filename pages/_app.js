// pages/_app.js
import Script from 'next/script';
import '../styles/globals.css';
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Klaviyo Script */}
      {/* <Script
        strategy="afterInteractive"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=QVvVRH"
      /> */}
      <Navbar />
      <Component {...pageProps} />

      <div id="mc_embed_signup" className="email-signup">
        <form action="https://gmail.us9.list-manage.com/subscribe/post?u=126538c8098f69a41b6383351&amp;id=74fe6c2574&amp;f_id=008956e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate="">
          <div id="mc_embed_signup_scroll">
            <h2>Stay in Touch 😊</h2>
            <p>for things like e-books, drops, and events</p>
            <div className="mc-field-group">
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" placeholder="Email Address" />
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
              <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
            </div>
            <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
              <input type="text" name="b_126538c8098f69a41b6383351_74fe6c2574" tabIndex="-1" value="" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default MyApp;
