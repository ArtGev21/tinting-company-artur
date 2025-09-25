'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Users, Plus, Copy, Trash2, Search, CircleCheck as CheckCircle, CircleAlert as AlertCircle, QrCode, User } from 'lucide-react';
import QRCode from 'qrcode';

interface SalesRep {
  id: string;
  name: string;
  rep_id: string;
  email?: string;
  phone?: string;
  total_clients?: number;
  monthly_clients?: number;
  created_at: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [salesReps, setSalesReps] = useState<SalesRep[]>([]);
  const [filteredReps, setFilteredReps] = useState<SalesRep[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newRepName, setNewRepName] = useState('');
  const [newRepEmail, setNewRepEmail] = useState('');
  const [newRepPhone, setNewRepPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingReps, setIsLoadingReps] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [showQrCode, setShowQrCode] = useState(false);
  const [selectedRep, setSelectedRep] = useState<SalesRep | null>(null);
  const [adminUser, setAdminUser] = useState<{ username: string } | null>(null);

  // Load sales reps
  useEffect(() => {
    loadSalesReps();
  }, []);

  // Filter sales reps
  useEffect(() => {
    const filtered = salesReps.filter(rep =>
      rep.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rep.rep_id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReps(filtered);
  }, [salesReps, searchTerm]);

  const loadSalesReps = async () => {
    console.log('Loading sales reps...');
    try {
      const response = await fetch('/api/admin/sales-reps');
      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('Response data:', data);
      
      if (data.success) setSalesReps(data.data);
      else {
        console.error('Failed to load sales reps:', data.error);
        showMessage('error', data.error || 'Failed to load sales reps');
      }
    } catch {
      console.error('Network error loading sales reps');
      showMessage('error', 'Network error loading sales reps');
    } finally {
      setIsLoadingReps(false);
    }
  };

  const fetchRepCounters = async (repId: string) => {
    try {
      const overallRes = await fetch(`/api/admin/sales-reps/${repId}/overall-clients`);
      const overallData = await overallRes.json();
      console.log('Overall Data:', overallData.data);

      const monthlyRes = await fetch(`/api/admin/sales-reps/${repId}/monthly-clients`);
      const monthlyData = await monthlyRes.json();
      console.log('Monthly Data:', monthlyData.data);

      return {
        total_clients: overallData.data?.total_clients ?? 0,
        monthly_clients: monthlyData.data?.monthly_clients ?? 0
      };
    } catch (err) {
      console.error(err);
      return { total_clients: 0, monthly_clients: 0 };
    }
  };

  const handleSelectRep = async (rep: SalesRep) => {
    const counters = await fetchRepCounters(rep.rep_id);
    setSelectedRep({ ...rep, ...counters });
    await generateQrCode(rep.rep_id);
    console.log('Selected Rep:', { ...rep, ...counters });
  };

  const createSalesRep = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRepName.trim() || !newRepEmail.trim() || !newRepPhone.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/sales-reps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newRepName.trim(),
          email: newRepEmail.trim(),
          phone: newRepPhone.trim()
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSalesReps(prev => [data.data, ...prev]);
        setNewRepName(''); setNewRepEmail(''); setNewRepPhone('');
        await handleSelectRep(data.data);
        showMessage('success', `Sales rep "${data.data.name}" created successfully!`);
      } else showMessage('error', data.error || 'Failed to create sales rep');
    } catch {
      showMessage('error', 'Network error creating sales rep');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteSalesRep = async (rep: SalesRep) => {
    if (!confirm(`Are you sure you want to delete "${rep.name}"?`)) return;
    try {
      const response = await fetch(`/api/admin/sales-reps/${rep.id}`, { method: 'DELETE' });
      const data = await response.json();
      if (data.success) setSalesReps(prev => prev.filter(r => r.id !== rep.id));
      else showMessage('error', data.error || 'Failed to delete sales rep');
    } catch {
      showMessage('error', 'Network error deleting sales rep');
    }
  };

  const copyRepId = async (repId: string) => {
    try { await navigator.clipboard.writeText(repId); showMessage('success', 'Rep ID copied!'); }
    catch { showMessage('error', 'Failed to copy Rep ID'); }
  };

  const generateQrCode = async (repId: string) => {
    try {
      const bookingUrl = `https://tinting-company.vercel.app/booking?rep=${repId}`;
      const qrDataUrl = await QRCode.toDataURL(bookingUrl, { width: 150, margin: 2, color: { dark: '#375A7F', light: '#FFF' } });
      setQrCodeUrl(qrDataUrl); setShowQrCode(true);
    } catch { showMessage('error', 'Failed to generate QR code'); }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text }); setTimeout(() => setMessage(null), 5000);
  };

  return (
    <div className="absolute inset-0 bg-cover bg-center overflow-auto min-h-screen"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-4xl font-bold text-center mb-8 text-primary-800 pt-20">Admin Page</div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${message.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
            {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span>{message.text}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[700px]">
          {/* Create Sales Rep */}
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Sales Representative</h2>
            <form onSubmit={createSalesRep} className="space-y-6">
              <input type="text" placeholder="Name" value={newRepName} onChange={e => setNewRepName(e.target.value)} required className="w-full px-4 py-3 border rounded-lg" />
              <input type="email" placeholder="Email" value={newRepEmail} onChange={e => setNewRepEmail(e.target.value)} required className="w-full px-4 py-3 border rounded-lg" />
              <input type="tel" placeholder="Phone" value={newRepPhone} onChange={e => setNewRepPhone(e.target.value)} required className="w-full px-4 py-3 border rounded-lg" />
              <button type="submit" disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2">{isLoading ? 'Creating...' : <><Plus size={20}/> Generate Sales Rep</>}</button>
            </form>
          </div>

          {/* Sales Reps List */}
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Sales Representatives</h2>
              <div className="text-sm text-gray-500">{filteredReps.length} of {salesReps.length} reps</div>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
              <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search..." className="w-full pl-10 pr-4 py-3 border rounded-lg"/>
            </div>

            {/* List */}
            {isLoadingReps ? (
              <div className="text-center py-8">Loading sales representatives...</div>
            ) : filteredReps.length === 0 ? (
              <div className="text-center py-8">
                <Users size={48} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">{searchTerm ? 'No matches' : 'No sales reps yet'}</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredReps.map(rep => (
                  <div key={rep.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-neutral-50">
                    <div>
                      <p className="font-medium">{rep.name}</p>
                      <p className="text-sm text-gray-500">ID: {rep.rep_id}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => copyRepId(rep.rep_id)} title="Copy Rep ID" className="p-2 text-primary-600 hover:text-primary-700 hover:bg-primary-100 rounded-lg"><Copy size={16}/></button>
                      <button onClick={() => handleSelectRep(rep)} title="Show QR & Info" className="p-2 text-primary-600 hover:text-primary-700 hover:bg-primary-100 rounded-lg"><User size={16}/></button>
                      <button onClick={() => deleteSalesRep(rep)} title="Delete Rep" className="p-2 text-red-600 hover:text-red-700 hover:bg-red-100 rounded-lg"><Trash2 size={16}/></button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* QR & Info */}
            {showQrCode && selectedRep && (
              <div className="mt-8 p-6 bg-primary-50 rounded-2xl text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Rep Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-medium">{selectedRep.name}</p>
                    <p className="text-sm text-gray-600">Rep ID: {selectedRep.rep_id}</p>
                    <p className="text-sm text-gray-600">Email: {selectedRep.email ?? '-'}</p>
                    <p className="text-sm text-gray-600">Phone: {selectedRep.phone ?? '-'}</p>
                    <p className="text-sm text-gray-600">Total Clients: {selectedRep.total_clients}</p>
                    <p className="text-sm text-gray-600">Clients This Month: {selectedRep.monthly_clients}</p>
                  </div>
                  <img src={qrCodeUrl} alt="QR Code" className="mx-auto rounded-lg shadow-sm" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}