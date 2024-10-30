import Head from 'next/head'
import ShopifyBuyButton from '../components/ShopifyBuyButton'
import { useRouter } from 'next/router';

export default function Shop() {
  const router = useRouter();

  return (
    <div className="shop-container">
      <Head>
        <title>Shop - Gaia's Garden</title>
        <meta name="description" content="Shop Gaia's Garden products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Conditionally apply 'nav-shop' class only on the Shop page */}
      <nav className={`nav ${router.pathname === '/shop' ? 'nav-shop' : ''}`}>
        <h1 className="shop-title">Preorder Now</h1>
      </nav>

      <main className="shop-main">
        <ShopifyBuyButton />
      </main>
    </div>
  );
}