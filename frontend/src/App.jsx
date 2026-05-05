import Dashboard from "./pages/dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/login" element={<LoginForm />}/>
      </Routes>
    </>
  );
};

export default App;