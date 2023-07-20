import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminTemplate from './pages/AdminTemplate';
import HomeTemplate from './pages/HomeTemplate';
import LichChieu from './pages/HomeTemplate/LichChieu';
import CumRap from './pages/HomeTemplate/CumRap';
import TinTuc from './pages/HomeTemplate/TinTuc';
import UngDung from './pages/HomeTemplate/UngDung';

import AddUser from './pages/AdminTemplate/AddUser';
import Dashboard from './pages/AdminTemplate/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomeTemplate */}
        <Route path="" element={<HomeTemplate />}>
          <Route path='' element={<LichChieu />}></Route>
          <Route path='cum-rap' element={<CumRap />}></Route>
          <Route path='tin-tuc' element={<TinTuc />}></Route>
          <Route path='ung-dung' element={<UngDung />}></Route>
        </Route>
        <Route path="admin" element={<AdminTemplate />}>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='add-user' element={<AddUser />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
