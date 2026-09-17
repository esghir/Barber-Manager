import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

export default function GuestCheckIn() {
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  const handleJoinQueue = () => {
    if (selectedBarber && selectedService) {
      navigate('/queue');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-card-dark border border-gray-800 rounded-2xl p-6 shadow-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome! Check-In Here</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-3">1. Select Barber</h2>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {['Any', 'Marcus J.', 'David S.', 'Leo T.'].map(barber => (
                <button
                  key={barber}
                  onClick={() => setSelectedBarber(barber)}
                  className={`flex flex-col items-center p-3 rounded-xl min-w-[80px] border transition-all ${
                    selectedBarber === barber 
                      ? 'border-neon-cyan bg-neon-teal/20 text-white shadow-[0_0_10px_rgba(0,255,255,0.2)]' 
                      : 'border-gray-700 bg-gray-900 text-gray-400 hover:border-gray-500'
                  }`}
                >
                  <User size={24} className="mb-2" />
                  <span className="text-sm font-medium">{barber}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-3">2. Select Service</h2>
            <div className="space-y-3">
              {[
                { name: 'Classic Haircut', price: '$30', time: '30 min' },
                { name: 'Beard Trim', price: '$15', time: '15 min' },
                { name: 'Full Service', price: '$40', time: '45 min' }
              ].map(service => (
                <button
                  key={service.name}
                  onClick={() => setSelectedService(service.name)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                    selectedService === service.name
                      ? 'border-neon-cyan bg-neon-teal/20 text-white shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                      : 'border-gray-700 bg-gray-900 text-gray-400 hover:border-gray-500'
                  }`}
                >
                  <div className="text-left">
                    <p className="font-semibold">{service.name}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <Clock size={14} /> {service.time}
                    </div>
                  </div>
                  <span className="font-bold text-neon-cyan">{service.price}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={!selectedBarber || !selectedService}
            onClick={handleJoinQueue}
            className="w-full py-4 rounded-xl font-bold text-lg transition-all mt-4
                     disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed
                     bg-neon-cyan text-black hover:bg-[#00ffff] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
          >
            JOIN QUEUE
          </button>
        </div>
      </div>
    </div>
  );
}
