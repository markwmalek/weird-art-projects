import Nav from './Nav';
import Footer from './Footer';
import DonationBanner from './DonationBanner';

export default function Layout({ children }) {
  return (
    <>
      <DonationBanner />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
