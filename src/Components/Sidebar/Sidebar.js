import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import SidebarItem from "./SidebarItem";
import './Sidebar.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHome } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { BiSolidContact} from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { BsFillBarChartFill } from "react-icons/bs";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { AiOutlineRise } from "react-icons/ai";
import icon from "../../img/icons-avatar.png";

function Sidebar() {
    return (
        <>
            <Container className="bg-primary sidebar">
                <Navbar.Brand href="#home" className='h3'>ADMIN <span><GiHamburgerMenu /></span></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                <hr></hr>
                {/* <Navbar.Collapse id="navbarScroll"> */}
                <Image src={icon} roundedCircle fluid className='icon mx-auto d-block' />
                <Nav activeKey="/home" className="flex-column">
                    <Nav.Link  as={Link} to="/home"> <SidebarItem name="Dashboard" icon={<BiHome />} /></Nav.Link>
                    <div id='listing-title'>Data</div>
                    <Nav.Link as={Link} to="/manageteam"><SidebarItem name="Manage Team" icon={<GoPeople />} /></Nav.Link>
                    <Nav.Link as={Link} to="/contactsInformation"> <SidebarItem name="Contacts Information" icon={<BiSolidContact />} /></Nav.Link>
                    <Nav.Link as={Link} to="/customers"> <SidebarItem name="Customers" icon={<BsReverseListColumnsReverse />}  /></Nav.Link>
                    <Nav.Link as={Link} to="/invoices"><SidebarItem name="Invoices" icon={<FaFileInvoiceDollar />} /></Nav.Link>
                    <div id='listing-title'>Pages</div>
                    <Nav.Link as={Link} to="/calendar"><SidebarItem name="Calendar" icon={<AiFillCalendar />} /></Nav.Link>
                    <Nav.Link as={Link} to="/faqpage"> <SidebarItem name="FAQ Page" icon={<FaQuestionCircle />} /></Nav.Link>
                    <div id='listing-title'>Charts</div>
                    <Nav.Link as={Link} to="/analytics"><SidebarItem name="Analytics" icon={<TbDeviceAnalytics />} /></Nav.Link>
                    <Nav.Link as={Link} to="/barchart"> <SidebarItem name="Bar Chart" icon={<BsFillBarChartFill />} /></Nav.Link>
                    <Nav.Link as={Link} to="/linechart"><SidebarItem name="Line Chart" icon={<AiOutlineRise />} /></Nav.Link>
                    <Nav.Link as={Link} to="/piechart"><SidebarItem name="Pie Chart" icon={<BiSolidPieChartAlt2 />} /></Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
                {/* </Navbar.Collapse> */}
            </Container>
        </>
    )
}

export default Sidebar;