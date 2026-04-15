import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { List, X, SignIn, SignOut } from 'phosphor-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Customize', href: '/customize' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    router.push('/');
    setIsOpen(false);
  };

  return (
    <header className="sticky-header shadow-sm">
      <nav className="container-custom flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-gold-700 font-serif text-2xl font-bold">Shaadi</div>
          <div className="text-maroon-500 text-xs font-semibold">INVITATION</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-gold-700 font-medium transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-gray-700 font-medium">
                {user.email} ({user.role})
              </span>
              {user.role === 'admin' && (
                <Link href="/admin/dashboard" className="text-maroon-600 hover:text-maroon-700 font-medium">
                  Admin
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-maroon-700 font-medium transition"
              >
                <SignOut size={20} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gold-600 hover:text-gold-700 font-medium flex items-center gap-2">
                <SignIn size={20} />
                Login
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                WhatsApp
              </a>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gold-200">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gold-700 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {user ? (
              <>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Logged in as: <span className="font-semibold">{user.email}</span>
                  </p>
                  {user.role === 'admin' && (
                    <Link href="/admin/dashboard" className="text-maroon-700 font-semibold mb-2 block">
                      → Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full btn-primary text-center flex items-center justify-center gap-2"
                  >
                    <SignOut size={20} />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/login" className="text-center text-gold-600 hover:text-gold-700 font-semibold py-2">
                  Login / Admin
                </Link>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  WhatsApp Inquiry
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
