import Image from 'next/image';
import Link from 'next/link';
import bag from '../public/images/studio-bag.png';

export default function MainSection() {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="image-wrapper">
          <Image src={bag} alt="studio bag" layout="responsive" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for fashion. Crafted for sport</h2>
          <p>
            We make products that effortlessly transition fro day to night. From the board room to
            the fitness studio, and everywhere in between, each Nomads piece is thoughtfully created
            to be the perfect balance of form and function.
          </p>
          <Link href="/shop/1">
            <a className="button is-black" id="shop-now">
              STUDIO BAG
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
