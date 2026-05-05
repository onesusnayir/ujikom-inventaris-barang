import { Edit2, Trash2 } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";

const Table = ({ barang }) => {
  const { user } = useAuthStore()
  console.log(barang)
    return(<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100 text-center">
                    <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Informasi Barang</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Tanggal Pengajuan</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Status</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-center">
                  {barang.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-800">{item.barangId.nama_barang}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className="bg-gray-100 px-2 py-1 rounded-md">{item.createdAt.split('T')[0]}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-2">
                              <button onClick={() => handleApprove(item._id)} className="p-2 text-black hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
                                Approve
                              </button>
                              <button onClick={() => handleDecline(item._id)} className="p-2 text-black hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
                                Decline
                              </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>)
}

// Sub-component untuk Card Statistik
const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
    <div className={`p-4 rounded-xl `}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const handleApprove = async (peminjamanId) => {
  fetch(`http://localhost:3000/api/peminjaman/approve/${peminjamanId}`, {
    method: 'PUT',
    credentials: "include",
 headers: {
    "Content-Type": "application/json"
  },
  })
}

const handleDecline = async (peminjamanId) => {
  fetch(`http://localhost:3000/api/peminjaman/tolak/${peminjamanId}`, {
    method: 'PUT',
    credentials: "include",
 headers: {
    "Content-Type": "application/json"
  },
  })
}

export default Table