import { Routes, Route, Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";


function Sidebar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<SidebarItem
                    name="Home"                                                                                                        
                />} />
                <Route path="/orders" element={<SidebarItem
                    name="Orders"
                />} />
                <Route path="/products" element={<SidebarItem
                    name="Products"
                />} />
                <Route path="/analytics" element={<SidebarItem
                    name="Analytics"
                />} />
            </Routes>
        </>
    )
}

export default Sidebar;