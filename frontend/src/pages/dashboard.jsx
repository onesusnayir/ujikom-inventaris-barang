import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Package, AlertCircle, RefreshCcw } from 'lucide-react';
import Table from '../components/dashboard/table';
import Header from '../components/dashboard/header';

const Dashboard = () => {
  const [barang, setBarang] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/barang').then(res => res.json()).then(data => setBarang(data));
  }, []);

  
  const handleDelete = async (barangId) => {
    await fetch(`http://localhost:3000/api/barang/${barangId}`, {
      method: 'DELETE',
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    })

    fetch('http://localhost:3000/api/barang').then(res => res.json()).then(data => setBarang(data));
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <Header />

      {
        barang &&
        <Table barang={barang} handleDelete={handleDelete}/>
      }
    </div>
  );
};

export default Dashboard;