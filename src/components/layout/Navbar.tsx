import { Link, useLocation } from 'react-router-dom';
import { Scissors, Activity, Users, Box } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
      location.pathname === path
        ? 'bg-neon-teal/20 text-neon-cyan border border-neon-cyan/50'
        : 'text-gray-400 hover:text-white hover:bg-card-dark'
    }`;
  };

  return (
    <nav className="border-b border-gray-800 bg-charcoal/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-neon-cyan" />
            <span className="font-bold text-xl tracking-wider uppercase">BarberFlow</span>
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className={getLinkClass('/')}>
              <Users size={18} />
              <span>Check-In</span>
            </Link>
            <Link to="/queue" className={getLinkClass('/queue')}>
              <Activity size={18} />
              <span>Queue Status</span>
            </Link>
            <Link to="/barber" className={getLinkClass('/barber')}>
              <Scissors size={18} />
              <span>Barber Desk</span>
            </Link>
            <Link to="/manager" className={getLinkClass('/manager')}>
              <Activity size={18} />
              <span>Manager</span>
            </Link>
            <Link to="/inventory" className={getLinkClass('/inventory')}>
              <Box size={18} />
              <span>Inventory</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
