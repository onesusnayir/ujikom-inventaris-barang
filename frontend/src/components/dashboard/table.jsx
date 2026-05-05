import { Edit2, Trash2 } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";

const Table = ({ barang, handleDelete }) => {
  const { user } = useAuthStore()
  console.log(barang)
    return(<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-center">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Informasi Barang</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Kategori</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Kondisi</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Status</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-gray-500">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {barang.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-800">{item.nama_barang}</div>
                        <div className="text-sm text-gray-400 flex items-center gap-1">
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className="bg-gray-100 px-2 py-1 rounded-md">{item.kategori}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize`}>
                          {item.kondisi}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                          <span className="text-sm font-medium text-gray-700 capitalize">{item.status}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-2">
                          {
                            user.role === 'petugas'&&
                            <>
                            <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition" onClick={()=>document.getElementById('my_modal_1').showModal()}><Edit2 size={18} /></button>
                              <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                  <h3 className="font-bold text-lg">Hello!</h3>
                                  <p className="py-4">Press ESC key or click the button below to close</p>
                                  <div className="modal-action">
                                    <form method="dialog">
                                      {/* if there is a button in form, it will close the modal */}
                                      <button className="btn">Close</button>
                                    </form>
                                  </div>
                                </div>
                              </dialog>

                              <button onClick={() => handleDelete(item._id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                                <Trash2 size={18} />
                              </button>
                            </>
                          }
                          {
                            user.role === 'staf'&&
                            <>
                              <button onClick={() => handlePinjam(item._id)} className="p-2 text-black hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
                                Pinjam
                              </button>
                            </>
                          }
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

const handlePinjam = async (barangId) => {
  fetch('http://localhost:3000/api/peminjaman', {
    method: 'POST',
    body: JSON.stringify({ barangId }),
    credentials: "include",
 headers: {
    "Content-Type": "application/json"
  },
  })
}

export default Table