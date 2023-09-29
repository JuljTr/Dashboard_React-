import './App.css';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "./Components/Sidebar/Sidebar";
import ContactsInformation from "./Pages/DataPages/ContactsInformation";
import Invoices from "./Pages/DataPages/Invoices";
import ManageTeam from "./Pages/DataPages/ManageTeam";
import Customers from "./Pages/DataPages/Customers";
import Calendar from "./Pages/PagesFile/Calendar";
import ProfileForm from "./Pages/PagesFile/ProfileForm";
import FAQPage from "./Pages/PagesFile/FAQPage";
import Analytics from "./Pages/Charts/Analytics";
import BarChart from "./Pages/Charts/BarChart";
import LineChart from "./Pages/Charts/LineChart";
import PieChart from "./Pages/Charts/PieChart";
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <Container fluid>
      <Row xs={1}>
        <Col md={3} lg={2}className='vh-100 p-0'><Sidebar /></Col>
        <Col md={9} lg={10}>
          <Routes>
            <Route path="/home" element={<Dashboard
              name="Dashboard"
            />} />
            <Route path="/contactsInformation" element={<ContactsInformation
              name="ContactsInformation"
            />} />
            <Route path="/invoices" element={<Invoices
              name="Invoices"
            />} />
            <Route path="/analytics" element={<Analytics
              name="Analytics"
            />} />
            <Route path="/manageteam" element={<ManageTeam
              name="ManageTeam"
            />} />
            <Route path="/customers" element={<Customers
              name="Customers"
            />} />
            <Route path="/profileForm" element={<ProfileForm
              name="ProfileForm"
            />} />
            <Route path="/calendar" element={<Calendar
              name="Calendar"
            />} />
            <Route path="/faqpage" element={<FAQPage
              name="FAQPage"
            />} />
            <Route path="/barchart" element={<BarChart
              name="BarChart"
            />} />
            <Route path="/linechart" element={<LineChart
              name="LineChart"
            />} />
            <Route path="/piechart" element={<PieChart
              name="PieChart"
            />} />
          </Routes>
          </Col>
      </Row>
    </Container>
  );
}

export default App;
