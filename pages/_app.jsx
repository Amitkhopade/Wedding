import '../styles/globals.css';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { AuthProvider } from '../context/AuthContext';

// Pages that should not show header/footer
const adminPages = ['/login', '/admin/dashboard', '/admin/designs'];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminPage = adminPages.includes(router.pathname);

  return (
    <AuthProvider>
      <>
        {!isAdminPage && <Header />}
        <main className="min-h-screen">
          <Component {...pageProps} />
        </main>
        {!isAdminPage && <Footer />}
        {!isAdminPage && <WhatsAppCTA />}
      </>
    </AuthProvider>
  );
}
