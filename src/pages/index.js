import Head from 'next/head';
import Link from 'next/link';
import CategoryCard from '../components/CategoryCard';
import ProductOffer from '../components/ProductOffer';

export default function Home() {
  const categories = [
    { href: 'skincare', img: 'skincare.jpg', label: 'Skin care' },
    { href: 'haircare', img: 'haircare.jpg', label: 'Hair care' },
    { href: 'bodycare', img: 'Salicylic_Body_wash-3.avif', label: 'Body care' },
    { href: 'lipcare', img: 'menuicon.jpg', label: 'Lip care' },
  ];

  return (
    <div>
      <Head>
        <title>Dot & Key</title>
      </Head>

      {/* Home Banner Section */}
      <div className="row">
        <div className="col-2">
          <h1>Give Your Skin A Healthy Glow</h1>
          <p>
            Skincare is essential for maintaining the health, appearance, and overall well-being of your skin. It helps prevent premature aging, protects against environmental damage, and addresses specific skin concerns.
          </p>
          <Link href="/allproduct" className="btn">
            Explore Now &#10140;
          </Link>
        </div>
        <div className="col-2">
          <img src="homeimg.jpg" alt="Home" />
        </div>
      </div>

      {/* Category Section */}
      <div className="categories">
        <div className="row">
          {categories.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </div>
      </div>

      {/* Offer Section */}
      <ProductOffer />
    </div>
  );
}
