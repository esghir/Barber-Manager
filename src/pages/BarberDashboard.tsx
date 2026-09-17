import { Play, Check, AlertTriangle } from 'lucide-react';

export default function BarberDashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
      
      {/* Current Session */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Current Session</h2>
          <div className="px-4 py-1.5 bg-green-500/10 text-green-400 rounded-full border border-green-500/20 font-bold text-sm tracking-wide uppercase">
            Active
          </div>
        </div>

        <div className="bg-card-dark rounded-3xl border border-neon-cyan/40 p-8 shadow-[0_0_30px_rgba(0,255,255,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <span className="text-8xl font-black text-white">#41</span>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-2 tracking-tight">Alex R.</h3>
            <p className="text-gray-400 text-xl mb-10 font-medium">Classic Haircut & Beard Trim</p>
            
            <div className="flex items-center gap-6 mb-12">
              <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Elapsed Time</p>
                <p className="text-5xl font-mono font-black text-white">24:15</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-5 bg-green-500 text-black font-black text-lg rounded-xl hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center gap-2">
                <Check size={24} strokeWidth={3} /> COMPLETE SERVICE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Up Next & Tools */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Up Next</h2>
        
        <div className="bg-card-dark rounded-3xl border border-gray-800 p-6 space-y-4 shadow-lg">
          {[
            { num: '42', name: 'Sam K.', svc: 'Haircut', time: 'Est. 5m' },
            { num: '43', name: 'Walk-in', svc: 'Fade', time: 'Est. 35m' },
          ].map((client, i) => (
            <div key={i} className="p-4 bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-between hover:border-neon-cyan/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-700 font-bold text-gray-400 group-hover:text-neon-cyan group-hover:border-neon-cyan/50 transition-colors">
                  {client.num}
                </div>
                <div>
                  <p className="font-bold text-lg">{client.name}</p>
                  <p className="text-sm text-gray-400 font-medium">{client.svc}</p>
                </div>
              </div>
              <button className="w-12 h-12 rounded-full bg-neon-teal/20 text-neon-cyan flex items-center justify-center hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all">
                <Play size={20} fill="currentColor" />
              </button>
            </div>
          ))}
        </div>

        <button className="w-full py-5 bg-red-500/10 border border-red-500/30 text-red-400 font-bold rounded-2xl hover:bg-red-500/20 hover:text-red-300 transition-colors flex items-center justify-center gap-2">
          <AlertTriangle size={20} /> Request Supplies
        </button>
      </div>

    </div>
  );
}
