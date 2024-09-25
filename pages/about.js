import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Playfair Display, serif' }}>
      <h1>About Gaia's Garden</h1>
      <p>
        Gaia's Garden is a wellness-focused brand rooted in the principles of spiritual growth and connection to nature.
        Inspired by the cycles of life and the earth, we create apparel, events, and experiences that help individuals 
        cultivate balance and harmony in their daily lives.
      </p>

      {/* Stock image placeholder */}
      <div style={{ margin: '2rem 0' }}>
        <Image
          src="https://via.placeholder.com/600x400"  // Replace with the actual image later
          alt="Gaia's Garden"
          width={600}
          height={400}
        />
      </div>

      <p>
        Founded in Brooklyn, NYC, Gaia's Garden brings people together through in-person events, thoughtful designs, and a 
        shared love for nature's beauty. Our brand is about planting seeds of wellness and watching them grow in your life.
      </p>

      <Link href="/events">
        <a style={{ color: '#7B3F00', textDecoration: 'underline' }}>Learn more about our upcoming events</a>
      </Link>
    </div>
  );
}
