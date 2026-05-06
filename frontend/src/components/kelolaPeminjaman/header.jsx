import { Plus } from "lucide-react"

const Header = () => {
    return (      
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola pinjaman</h1>
          <p className="text-gray-500">Kelola dan pantau pengajuan pinjaman barang</p>
        </div>
      </div>)
}

export default Header