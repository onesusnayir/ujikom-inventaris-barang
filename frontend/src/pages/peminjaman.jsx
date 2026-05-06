import { useEffect, useState } from "react"
import Table from "../components/peminjaman/table"
import Header from "../components/peminjaman/header"

const Peminjaman = () => {
    const [barang, setBarang] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/api/peminjaman/me', {
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

export default Peminjaman