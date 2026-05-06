import { Edit2, Trash2 } from "lucide-react"
import { useState } from "react"

const EditBarang = ({ item, handleDelete }) => {
    const [jumlah, setJumlah] = useState(item.jumlah)
    const [lokasi, setLokasi] = useState(item.lokasi)

    return (
        <>
            <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition" onClick={()=>document.getElementById('my_modal_2').showModal()}><Edit2 size={18} /></button>
                <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Barang</h3>
                    <div className="modal-action flex justify-start">
                        <form method="dialog" className="flex flex-col w-full gap-2">
                            <label className="label">Jumlah</label>
                            <input
                                className="input w-full"
                                value={jumlah}
                                onChange={(e) => setJumlah(e.target.value)}
                                />

                            <label className="label">lokasi</label>
                            <input
                                className="input w-full"
                                value={lokasi}
                                onChange={(e) => setLokasi(e.target.value)}
                                />

                            <button className="btn" onClick={() => handleEdit(jumlah, lokasi, item._id)}>Submit</button>
                            <button className="btn">Close</button>
                            </form>
                    </div>
                </div>
                </dialog>

                <button onClick={() => handleDelete(item._id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                    <Trash2 size={18} />
                </button>
            </>
    )
}

const handleEdit = async (jumlah, lokasi, idBarang) => {
  await fetch(`http://localhost:3000/api/barang/${idBarang}`, {
    method: 'PUT',
    body: JSON.stringify({ jumlah, lokasi }),
    credentials: "include",
    headers: {
        "Content-Type": "application/json"
    },
  })
}

export default EditBarang