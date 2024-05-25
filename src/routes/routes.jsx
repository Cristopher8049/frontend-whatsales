import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Devices from '../pages/Devices/Devices'


function Routes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
        </Routes>
    )
}

export default Routes
