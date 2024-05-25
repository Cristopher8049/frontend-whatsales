import MainLayout from './layouts/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Devices from './pages/Devices/Devices';

function App() {
  return (
    <>
      <div className="flex">
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/devices" element={<Devices />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
