import { useEffect, useState } from "react";
import Table from "../components/kelolaPeminjaman/table";
import Header from "../components/kelolaPeminjaman/header";

const KelolaPeminjaman = () => {
    const [barang, setBarang] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/api/peminjaman', {
            credentials:'include'
        }).then(res => res.json()).then(data => setBarang(data));
    }, [])

    return (
        <div className="p-8 bg-gray-50 min-h-screen font-sans">
            <Header />
            <Table barang={barang}/>
        </div>
    )
}

export default KelolaPeminjaman