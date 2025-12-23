// import React, { useState } from 'react'
// import Sidebar from './components/Sidebar'
// import Header from './components/Header'
// import { Outlet } from "react-router-dom";


// const AdminLayout = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };
//     return (
//         <div className="flex h-screen bg-[#0B1437] overflow-hidden">
//             <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//             {/* Main Content */}
//             <div className="flex flex-col flex-1 overflow-hidden relative">
//                 <Header toggleSidebar={toggleSidebar} />
//                 <main className="flex-1 overflow-y-auto bg-[#020523] p-4 pt-24">
//                     <Outlet />
//                 </main>
//             </div>
//         </div>
//     )
// }

// export default AdminLayout







import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    // Apply theme to document
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="flex flex-col flex-1 overflow-hidden relative">
                <Header toggleSidebar={toggleSidebar} theme={theme} setTheme={setTheme} />

                <main className={`flex-1 overflow-y-auto p-4 pt-24 ${
                    theme === "dark" ? "bg-[#020523] text-white" : "bg-white text-black"
                }`}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout;

