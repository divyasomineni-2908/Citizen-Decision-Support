import React, { useState } from 'react';
import { Scheme, UserProfile } from '../types';
import { MOCK_USER_PROFILE, MOCK_SCHEMES } from '../constants';

interface AdminDashboardProps {
    language: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ language }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'schemes' | 'system'>('overview');
    const [schemes, setSchemes] = useState<Scheme[]>(MOCK_SCHEMES);

    // Mock Users List
    const [users, setUsers] = useState([
        { id: '1', name: MOCK_USER_PROFILE.name, email: 'rishitha@example.com', role: 'User', status: 'Active', lastLogin: '2026-02-01' },
        { id: '2', name: 'Rahul Verma', email: 'rahul.v@example.com', role: 'User', status: 'Active', lastLogin: '2026-01-30' },
        { id: '3', name: 'Priya Singh', email: 'priya.s@example.com', role: 'User', status: 'Inactive', lastLogin: '2025-12-15' },
        { id: '4', name: 'Admin User', email: 'admin@gov.in', role: 'Admin', status: 'Active', lastLogin: 'Now' },
    ]);

    const [systemHealth] = useState({
        cpu: '12%',
        memory: '450MB/1GB',
        uptime: '14d 2h 15m',
        apiStatus: 'Online',
        dbStatus: 'Connected'
    });

    const handleDeleteUser = (id: string) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUsers(users.filter(u => u.id !== id));
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-6 text-xl font-bold border-b border-gray-700">
                    Admin Console
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`w-full text-left px-4 py-3 rounded hover:bg-gray-700 transition-colors ${activeTab === 'overview' ? 'bg-primary' : ''}`}
                    >
                        📊 Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`w-full text-left px-4 py-3 rounded hover:bg-gray-700 transition-colors ${activeTab === 'users' ? 'bg-primary' : ''}`}
                    >
                        👥 Users
                    </button>
                    <button
                        onClick={() => setActiveTab('schemes')}
                        className={`w-full text-left px-4 py-3 rounded hover:bg-gray-700 transition-colors ${activeTab === 'schemes' ? 'bg-primary' : ''}`}
                    >
                        📋 Schemes
                    </button>
                    <button
                        onClick={() => setActiveTab('system')}
                        className={`w-full text-left px-4 py-3 rounded hover:bg-gray-700 transition-colors ${activeTab === 'system' ? 'bg-primary' : ''}`}
                    >
                        🖥️ System Status
                    </button>
                </nav>
                <div className="p-4 border-t border-gray-700 text-xs text-gray-400">
                    v1.2.0-beta
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">{activeTab}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Welcome, Admin</span>
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">A</div>
                    </div>
                </header>

                {/* Dynamic Content */}
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatsCard title="Total Users" value={users.length.toString()} icon="👥" color="bg-blue-500" />
                            <StatsCard title="Active Schemes" value={schemes.length.toString()} icon="📋" color="bg-green-500" />
                            <StatsCard title="Pending Applications" value="24" icon="⏳" color="bg-yellow-500" />
                            <StatsCard title="System Health" value="Good" icon="❤️" color="bg-purple-500" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-bold mb-4 dark:text-white">Recent Activity</h3>
                                <ul className="space-y-3">
                                    <li className="text-sm text-gray-600 dark:text-gray-300">User <strong>Rahul Verma</strong> applied for PM-KISAN</li>
                                    <li className="text-sm text-gray-600 dark:text-gray-300">New Scheme <strong>Skill India 2.0</strong> added</li>
                                    <li className="text-sm text-gray-600 dark:text-gray-300">System backup completed (2h ago)</li>
                                </ul>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-bold mb-4 dark:text-white">Server Load</h3>
                                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <p>CPU Usage: <span className="font-mono">{systemHealth.cpu}</span></p>
                                    <p>Memory: <span className="font-mono">{systemHealth.memory}</span></p>
                                    <p>Uptime: <span className="font-mono">{systemHealth.uptime}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'users' && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{user.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.role}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'schemes' && (
                    <div className="grid grid-cols-1 gap-4">
                        {schemes.map(scheme => (
                            <div key={scheme.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">{scheme.title}</h4>
                                    <p className="text-sm text-gray-500">{scheme.department}</p>
                                </div>
                                <div className="flex gap-2">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                                    <button className="text-primary hover:underline text-sm">Edit</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'system' && (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6">
                        <div className="flex items-center justify-between border-b pb-4 dark:border-gray-700">
                            <span className="font-medium text-gray-700 dark:text-gray-300">API Gateway</span>
                            <span className="text-green-500 font-bold">● {systemHealth.apiStatus}</span>
                        </div>
                        <div className="flex items-center justify-between border-b pb-4 dark:border-gray-700">
                            <span className="font-medium text-gray-700 dark:text-gray-300">Database Cluster</span>
                            <span className="text-green-500 font-bold">● {systemHealth.dbStatus}</span>
                        </div>
                        <div className="flex items-center justify-between border-b pb-4 dark:border-gray-700">
                            <span className="font-medium text-gray-700 dark:text-gray-300">Redis Cache</span>
                            <span className="text-green-500 font-bold">● Connected</span>
                        </div>
                        <div className="mt-8">
                            <h4 className="font-bold mb-2 dark:text-white">Logs</h4>
                            <div className="bg-black text-green-400 font-mono text-xs p-4 rounded h-48 overflow-y-scroll">
                                <p>[2026-02-01 08:30:00] INFO: Server started on port 3000</p>
                                <p>[2026-02-01 08:30:05] INFO: DB Connection established</p>
                                <p>[2026-02-01 08:35:12] WARN: High memory usage detected (85%)</p>
                                <p>[2026-02-01 08:35:15] INFO: Auto-scaling initiated</p>
                                <p>[2026-02-01 08:45:00] INFO: User 781 logged in</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

const StatsCard: React.FC<{ title: string; value: string; icon: string; color: string }> = ({ title, value, icon, color }) => (
    <div className={`${color} text-white p-6 rounded-lg shadow-lg flex items-center justify-between`}>
        <div>
            <p className="text-sm opacity-80">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className="text-4xl opacity-50">{icon}</div>
    </div>
);

export default AdminDashboard;
