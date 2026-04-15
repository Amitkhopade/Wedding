import Link from 'next/link';
import { useRouter } from 'next/router';
import { Heart, Tag, SignOut } from 'phosphor-react';
import { useAuth } from '../context/AuthContext';

export default function AdminSidebar() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const menuItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: Heart },
    { href: '/admin/designs', label: 'Manage Designs', icon: Tag },
  ];

  return (
    <aside className="w-64 bg-maroon-900 text-white h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-maroon-800">
        <h1 className="text-2xl font-serif font-bold">Shaadi Admin</h1>
        <p className="text-maroon-300 text-sm mt-1">Design Management</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = router.pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-maroon-700 text-white'
                  : 'text-maroon-100 hover:bg-maroon-800'
              }`}
            >
              <Icon size={20} className="mr-3" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-maroon-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 text-maroon-100 hover:bg-maroon-800 rounded-lg transition"
        >
          <SignOut size={20} className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
