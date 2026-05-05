import { useEffect, useState } from "react";
import Table from "../components/kelolaPeminjaman/table";

const KelolaPeminjaman = () => {
    const [barang, setBarang] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/api/peminjaman', {
            credentials:'include'
        }).then(res => res.json()).then(data => setBarang(data));
    }, [])

    return (
        <>
            <Table barang={barang}/>
        </>
    )
}

export default KelolaPeminjaman