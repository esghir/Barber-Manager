import { Users, Star, Clock, TrendingUp } from 'lucide-react';

export default function ManagerDashboard() {
  const stats = [
    { label: 'Total Clients', value: '124', icon: Users, color: 'text-blue-400' },
    { label: 'Avg Rating', value: '4.8', icon: Star, color: 'text-yellow-400' },
    { label: 'Avg Wait', value: '12m', icon: Clock, color: 'text-neon-cyan' },
    { label: 'Revenue', value: '$3,420', icon: TrendingUp, color: 'text-green-400' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 mt-4">
      <h1 className="text-3xl font-bold tracking-tight">Manager Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
          <div key={stat.label} className="bg-card-dark p-6 rounded-2xl border border-gray-800 shadow-lg hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 font-medium">{stat.label}</span>
              <div className={`p-2 rounded-lg bg-gray-900 border border-gray-800 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
            </div>
            <h2 className="text-4xl font-black">{stat.value}</h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card-dark p-6 rounded-2xl border border-gray-800 shadow-lg">
          <h3 className="text-xl font-bold mb-6">Team Performance</h3>
          <div className="space-y-6">
            {['Marcus J.', 'David S.', 'Leo T.'].map((barber, i) => (
              <div key={barber}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-gray-200">{barber}</span>
                  <span className="text-neon-cyan font-bold">{45 - i * 8} clients</span>
                </div>
                <div className="w-full bg-gray-900 rounded-full h-3 border border-gray-800">
                  <div 
                    className="bg-neon-cyan h-3 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.4)]" 
                    style={{ width: `${85 - i * 15}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card-dark p-6 rounded-2xl border border-gray-800 shadow-lg">
          <h3 className="text-xl font-bold mb-6">Recent Alerts</h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="font-bold text-red-400">Low Stock Alert</span>
                <span className="text-xs font-medium text-gray-500">2m ago</span>
              </div>
              <p className="text-sm text-gray-300 mt-2">Neck strips requested by David S.</p>
            </div>
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl hover:bg-yellow-500/20 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="font-bold text-yellow-400">Queue Warning</span>
                <span className="text-xs font-medium text-gray-500">15m ago</span>
              </div>
              <p className="text-sm text-gray-300 mt-2">Wait times exceeding 30 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
