import Nav from './Nav';
import Footer from './Footer';
import AnnouncementBanner from './AnnouncementBanner';

export default function Layout({ children }) {
  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
