import { AlertCircle, CheckCircle, Package } from 'lucide-react';

export default function Inventory() {
  const items = [
    { name: 'Neck Strips', status: 'low', lastUpdated: '10 mins ago' },
    { name: 'Barbicide', status: 'ok', lastUpdated: '1 day ago' },
    { name: 'Towels (Clean)', status: 'low', lastUpdated: '1 hour ago' },
    { name: 'Shampoo', status: 'ok', lastUpdated: '3 days ago' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Inventory Status</h1>
        <button className="px-6 py-3 bg-neon-cyan text-black font-bold rounded-xl hover:bg-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all">
          Order Supplies
        </button>
      </div>

      <div className="grid gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-card-dark p-6 rounded-2xl border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gray-700 transition-colors shadow-lg">
            <div className="flex items-center gap-5">
              <div className={`p-4 rounded-xl border ${item.status === 'low' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-green-500/10 text-green-400 border-green-500/20'}`}>
                <Package size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Updated: {item.lastUpdated}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              {item.status === 'low' ? (
                <div className="w-full sm:w-auto flex items-center justify-center gap-2 text-red-400 bg-red-500/10 px-5 py-2.5 rounded-full border border-red-500/20">
                  <AlertCircle size={18} />
                  <span className="text-sm font-bold tracking-wide">NEEDS RESTOCK</span>
                </div>
              ) : (
                <div className="w-full sm:w-auto flex items-center justify-center gap-2 text-green-400 bg-green-500/10 px-5 py-2.5 rounded-full border border-green-500/20">
                  <CheckCircle size={18} />
                  <span className="text-sm font-bold tracking-wide">ADEQUATE</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
