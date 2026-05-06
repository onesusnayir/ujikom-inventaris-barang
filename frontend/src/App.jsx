import Dashboard from "./pages/dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login";
import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import Navbar from "./components/navbar";
import Peminjaman from "./pages/peminjaman";
import KelolaPeminjaman from "./pages/kelolaPeminjaman";
import Log from "./pages/log";

const App = () => {
  const { isChecking, checkLogin, user } = useAuthStore()
  
  useEffect(() => {
    checkLogin()
  }, [checkLogin])


  if (isChecking) {
  return (
    <div className="h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to={'/login'}/>}/>
        <Route path="/peminjaman" element={user && user.role === 'staf' ? <Peminjaman /> : <Navigate to={'/login'}/>}/>
        <Route path="/kelola-peminjaman" element={user && user.role === 'petugas' ? <KelolaPeminjaman /> : <Navigate to={'/login'}/>}/>
        <Route path="/log" element={user && user.role === 'admin' ? <Log /> : <Navigate to={'/login'} />}/>
        <Route path="/login" element={!user ? <LoginForm /> : <Navigate to={'/dashboard'}/>}/>
      </Routes>
    </div>
  );
};

export default App;