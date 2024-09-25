import Head from 'next/head'
import ShopifyBuyButton from '../components/ShopifyBuyButton'

export default function Shop() {
  return (
    <div className="shop-container">
      <Head>
        <title>Shop - Gaia's Garden</title>
        <meta name="description" content="Shop Gaia's Garden products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="shop-main">
        <h1 className="shop-title">Preorder Now </h1>
        <ShopifyBuyButton />
      </main>
    </div>
  )
}