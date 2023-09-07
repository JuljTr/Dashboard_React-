import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import SidebarItem from "./SidebarItem";
import { BiHome } from "react-icons/bi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { GoPeople } from "react-icons/go";
import { CgBox } from "react-icons/cg";
import { TfiBarChart } from "react-icons/tfi";


function Sidebar() {
    return (
        <>
            <BrowserRouter>
                <h1>Hello</h1>
                <SidebarItem
                    name="Home"
                    icon={<BiHome />}
                />
                <SidebarItem
                    name="Orders"
                    icon={<HiOutlineClipboardList />}
                />
                <SidebarItem
                    name="Customers"
                    icon={<GoPeople />}
                />
                <SidebarItem
                    name="Products"
                    icon={<CgBox />}
                />
                <SidebarItem
                    name="Analytics"
                    icon={<TfiBarChart />}
                />
            </BrowserRouter>
        </>
    )
}

export default Sidebar;