import { useEffect, useState } from "react"
import Table from "../components/peminjaman/table"

const Peminjaman = () => {
    const [barang, setBarang] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/api/peminjaman/me', {
            credentials:'include'
        }).then(res => res.json()).then(data => setBarang(data));
    }, [])

    return (
        <>
            <Table barang={barang}/>
        </>
    )
}

export default Peminjaman