import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../store/useAuthStore"

const Navbar = () => {
    const { user, logout } = useAuthStore()
    const navigation = useNavigate()

    const handleLogout = () => {
        logout()
        navigation('/login')
    }

    return (
<div className="bg-white shadow-md px-8 py-6 flex justify-between items-center">
    <Link to={'/dashboard'}>
        <h1 className="text-2xl font-bold text-blue-600">
            Sistem Informasi Inventaris
        </h1>
    </Link>

    {user && (
        <ul className="flex gap-6 items-center">
            {
                user.role === 'staf' &&
                <li>
                    <Link
                        to="/peminjaman"
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                        Peminjaman
                    </Link>
                </li>
            }
    
            {
                user.role === 'petugas' &&
                <li>
                    <Link
                        to="/kelola-peminjaman"
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                        Kelola Peminjaman
                    </Link>
                </li>
            }

            {
                user.role === 'admin' &&
                <li>
                    <Link
                        to="/log"
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                        Log Aktivitas
                    </Link>
                </li>
            }
            <li className="px-4 py-2 hover:bg-red-500 hover:text-white rounded cursor-pointer">
                <button className="cursor-pointer" onClick={handleLogout}>Logout</button>
            </li>
        </ul>
    )}
</div>
    )
}

export default Navbar