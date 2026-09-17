import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import GuestCheckIn from './pages/GuestCheckIn';
import QueueStatus from './pages/QueueStatus';
import ManagerDashboard from './pages/ManagerDashboard';
import BarberDashboard from './pages/BarberDashboard';
import Inventory from './pages/Inventory';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal text-white selection:bg-neon-teal selection:text-white flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<GuestCheckIn />} />
            <Route path="/queue" element={<QueueStatus />} />
            <Route path="/barber" element={<BarberDashboard />} />
            <Route path="/manager" element={<ManagerDashboard />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
