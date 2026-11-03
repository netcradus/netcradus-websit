import React, { useState, useEffect } from 'react';
import { ShieldCheck, Mail, Phone, Building2, Globe, Clock, FileText, Search, Filter, Lock, CheckCircle, RefreshCw, AlertCircle, Eye } from 'lucide-react';

export default function AdminInquiries() {
  const [token, setToken] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const fetchInquiries = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin-inquiries', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      if (data.success) {
        setInquiries(data.inquiries || []);
        setIsAuth(true);
        if (data.csrfToken) setCsrfToken(data.csrfToken);
      } else {
        if (res.status === 401) {
          setIsAuth(false);
        } else {
          setError(data.error || 'Authentication failed. Invalid admin key.');
        }
      }
    } catch (err) {
      console.error('Admin fetch error:', err);
      setError('Unable to connect to admin API server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!token.trim()) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin-inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ action: 'login', token: token.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuth(true);
        setCsrfToken(data.csrfToken || '');
        setToken('');
        await fetchInquiries();
      } else {
        setError(data.error || 'Authentication failed. Invalid admin key.');
        setIsAuth(false);
      }
    } catch (err) {
      console.error('Admin login error:', err);
      setError('Unable to connect to admin API server.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin-inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ action: 'logout' }),
      });
    } catch (_err) {
      // Ignore logout transport errors
    } finally {
      setIsAuth(false);
      setToken('');
      setCsrfToken('');
      setInquiries([]);
      setSelectedInquiry(null);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await fetch('/api/admin-inquiries', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({ id, status: newStatus, csrfToken }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
        if (selectedInquiry && selectedInquiry.id === id) {
          setSelectedInquiry({ ...selectedInquiry, status: newStatus });
        }
      } else {
        alert(data.error || 'Failed to update status.');
      }
    } catch (_err) {
      alert('Failed to update status.');
    }
  };

  const filteredInquiries = inquiries.filter((item) => {
    const matchesSearch =
      item.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase()) ||
      item.company?.toLowerCase().includes(search.toLowerCase()) ||
      item.id?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-[#05060a] text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 rounded-2xl bg-[#0d0d14] border border-white/10 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#e8400a]/10 border border-[#e8400a]/30 flex items-center justify-center text-[#e8400a]">
              <Lock size={28} />
            </div>
            <h1 className="text-2xl font-bold font-sora">Netcradus Admin Portal</h1>
            <p className="text-xs text-gray-400">Enter your secure admin access key to manage consultation inquiries.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Admin Secret Token</label>
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter admin token..."
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#e8400a] text-sm"
              />
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#FF6B00] to-[#e8400a] text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition-all text-sm flex items-center justify-center gap-2"
            >
              {loading ? <RefreshCw size={18} className="animate-spin" /> : 'Authenticate Access'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05060a] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e8400a] uppercase tracking-wider mb-1">
              <ShieldCheck size={16} />
              <span>Netcradus Admin Console</span>
            </div>
            <h1 className="text-3xl font-extrabold font-sora">Inquiries & Consultation Requests</h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchInquiries()}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono flex items-center gap-2 transition-all"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              Refresh Data
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs font-mono transition-all"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative md:col-span-2">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, company, or reference ID..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0d0d14] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#e8400a]"
            />
          </div>

          <div className="flex items-center gap-2 bg-[#0d0d14] border border-white/10 px-4 py-2 rounded-xl">
            <Filter size={16} className="text-gray-400 shrink-0" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-transparent text-white text-sm focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Table View */}
          <div className={`${selectedInquiry ? 'lg:col-span-7' : 'lg:col-span-12'} transition-all`}>
            <div className="rounded-2xl bg-[#0d0d14] border border-white/10 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-gray-400 text-xs uppercase font-mono border-b border-white/10">
                    <tr>
                      <th className="p-4">Ref ID</th>
                      <th className="p-4">Visitor</th>
                      <th className="p-4">Service</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Date</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-gray-500 text-sm">
                          No inquiry records found.
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((item) => (
                        <tr
                          key={item.id}
                          onClick={() => setSelectedInquiry(item)}
                          className={`hover:bg-white/[0.03] cursor-pointer transition-colors ${
                            selectedInquiry?.id === item.id ? 'bg-[#e8400a]/10' : ''
                          }`}
                        >
                          <td className="p-4 font-mono font-bold text-[#e8400a] text-xs">{item.id}</td>
                          <td className="p-4">
                            <div className="font-bold text-white">{item.fullName}</div>
                            <div className="text-xs text-gray-400">{item.email}</div>
                          </td>
                          <td className="p-4 text-xs text-gray-300 font-medium">{item.service}</td>
                          <td className="p-4">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider ${
                                item.status === 'new'
                                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                  : item.status === 'contacted'
                                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                  : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              }`}
                            >
                              {item.status || 'new'}
                            </span>
                          </td>
                          <td className="p-4 text-xs text-gray-400 font-mono">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-4 text-right">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedInquiry(item);
                              }}
                              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-all"
                            >
                              <Eye size={16} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Details Modal / Panel */}
          {selectedInquiry && (
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-2xl bg-[#0d0d14] border border-white/10 p-6 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#e8400a]">{selectedInquiry.id}</span>
                    <h3 className="text-xl font-bold font-sora text-white">{selectedInquiry.fullName}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedInquiry(null)}
                    className="text-gray-400 hover:text-white text-xs font-mono"
                  >
                    Close ✕
                  </button>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail size={16} className="text-[#e8400a] shrink-0" />
                    <a href={`mailto:${selectedInquiry.email}`} className="hover:underline text-white">
                      {selectedInquiry.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone size={16} className="text-[#e8400a] shrink-0" />
                    <span>{selectedInquiry.phone || 'N/A'}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Building2 size={16} className="text-[#e8400a] shrink-0" />
                    <span>Company: {selectedInquiry.company || 'N/A'}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Globe size={16} className="text-[#e8400a] shrink-0" />
                    <span>Region: {selectedInquiry.country || 'N/A'}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-400 text-xs font-mono">
                    <Clock size={14} className="shrink-0" />
                    <span>IP: {selectedInquiry.ip}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                    <div className="text-xs font-mono text-[#e8400a]">MESSAGE:</div>
                    <p className="text-gray-200 text-xs leading-relaxed white-space-pre-wrap">
                      {selectedInquiry.message}
                    </p>
                  </div>

                  {selectedInquiry.attachment && (
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-center justify-between">
                      <div className="flex items-center gap-2 truncate">
                        <FileText size={16} className="shrink-0" />
                        <span className="truncate">{selectedInquiry.attachment.fileName}</span>
                      </div>
                      <span className="font-mono text-[11px] text-gray-400">
                        {(selectedInquiry.attachment.size / 1024).toFixed(1)} KB
                      </span>
                    </div>
                  )}

                  {/* Status Change Buttons */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <div className="text-xs font-mono text-gray-400 mb-2">UPDATE STATUS:</div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleStatusUpdate(selectedInquiry.id, 'new')}
                        className={`flex-1 py-2 rounded-lg text-xs font-mono transition-all ${
                          selectedInquiry.status === 'new'
                            ? 'bg-orange-500 text-white font-bold'
                            : 'bg-white/5 hover:bg-white/10 text-gray-300'
                        }`}
                      >
                        New
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(selectedInquiry.id, 'contacted')}
                        className={`flex-1 py-2 rounded-lg text-xs font-mono transition-all ${
                          selectedInquiry.status === 'contacted'
                            ? 'bg-blue-600 text-white font-bold'
                            : 'bg-white/5 hover:bg-white/10 text-gray-300'
                        }`}
                      >
                        Contacted
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(selectedInquiry.id, 'closed')}
                        className={`flex-1 py-2 rounded-lg text-xs font-mono transition-all ${
                          selectedInquiry.status === 'closed'
                            ? 'bg-emerald-600 text-white font-bold'
                            : 'bg-white/5 hover:bg-white/10 text-gray-300'
                        }`}
                      >
                        Closed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
