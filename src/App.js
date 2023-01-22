import {useContext} from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const {user} = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/dashboard"
          element={
            user !== null 
            ? <Dashboard />
            : <Login />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
