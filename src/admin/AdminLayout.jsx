import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Outlet } from "react-router-dom";


const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="flex h-screen bg-[#0B1437] overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden relative">
                <Header toggleSidebar={toggleSidebar} />
                <main className="flex-1 overflow-y-auto bg-[#020523] p-4 pt-24">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout