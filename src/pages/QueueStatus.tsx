import { Bell, Clock } from 'lucide-react';

export default function QueueStatus() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center p-4 pt-12">
      <div className="w-full max-w-md bg-card-dark border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Glow effect header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-neon-cyan shadow-[0_0_20px_rgba(0,255,255,1)] rounded-b-full"></div>
        
        <div className="text-center mb-10 mt-4">
          <p className="text-gray-400 font-medium mb-2 uppercase tracking-widest text-sm">Your Ticket</p>
          <h1 className="text-7xl font-black text-white tracking-tighter drop-shadow-lg">#42</h1>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 mb-8 border border-gray-800 shadow-inner">
          <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
            <span className="text-gray-400 font-medium">Position in Line</span>
            <span className="text-3xl font-bold text-neon-cyan">2nd</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-medium">Estimated Wait</span>
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <Clock size={24} className="text-yellow-400" />
              15 min
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button className="w-full py-4 rounded-xl font-bold text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors flex items-center justify-center gap-2">
            <Bell size={18} className="text-neon-cyan" />
            Notify me at 5 min
          </button>
          
          <div className="flex gap-3">
            <button className="flex-1 py-3.5 rounded-xl font-bold text-black bg-neon-cyan hover:bg-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all">
              I'm At Shop
            </button>
            <button className="flex-1 py-3.5 rounded-xl font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition-colors">
              I'll Be Late
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
