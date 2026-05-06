import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

const AddBarang = ({ setBarang }) => {
    const [namaBarang, setNamaBarang] = useState("")
    const [kategori, setKategori] = useState("")
    const [jumlah, setJumlah] = useState(1)
    const [kondisi, setKondisi] = useState("baik")
    const [lokasi, setLokasi] = useState("")

    const handleNewBarang = async (data) => {
        await fetch('http://localhost:3000/api/barang', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const res = await fetch('http://localhost:3000/api/barang').then(res => res.json()).then(data => setBarang(data));

    }
    return (        
        <>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-all" onClick={()=>document.getElementById('my_modal_1').showModal()}>
                <Plus size={20} />
                 <span>Tambah Barang</span>
            </button>
                <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Barang</h3>
                    <div className="modal-action flex justify-start">
                        <form method="dialog" className="flex flex-col w-full gap-2">
                            <label className="label">Nama barang</label>
                            <input
                            className="input w-full"
                            value={namaBarang}
                            onChange={(e) => setNamaBarang(e.target.value)}
                            />

                            <label className="label">Kategori</label>
                            <input
                            className="input w-full"
                            value={kategori}
                            onChange={(e) => setKategori(e.target.value)}
                            />

                            <label className="label">Jumlah</label>
                            <input
                            type="number"
                            className="input w-full"
                            value={jumlah}
                            onChange={(e) => setJumlah(Number(e.target.value))}
                            />
                            
                            <label className="label">Kondisi</label>
                            <details className="dropdown">
                                <summary className="btn m-1 uppercase">{kondisi}</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a onClick={() => setKondisi('baik')}>baik</a></li>
                                    <li><a onClick={() => setKondisi('rusak ringan')}>rusak ringan</a></li>
                                    <li><a onClick={() => setKondisi('rusak berat')}>rusak berat</a></li>
                                </ul>
                            </details>

                            <label className="label">Lokasi</label>
                            <input
                            className="input w-full"
                            value={lokasi}
                            onChange={(e) => setLokasi(e.target.value)}
                            />

                            <button onClick={() => handleNewBarang({nama_barang: namaBarang, kategori, jumlah, kondisi, lokasi})} className="btn">Submit</button>
                            <button className="btn">Close</button>
                            </form>
                    </div>
                </div>
                </dialog>
        </>
    )
}

export default AddBarang