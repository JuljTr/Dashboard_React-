import './App.css';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "./Components/Sidebar/Sidebar";
import ContactsInformation from "./Pages/Data/ContactsInformation";
import Invoices from "./Pages/Data/Invoices";
import ManageTeam from "./Pages/Data/ManageTeam";
import Customers from "./Pages/Data/Customers";
import Calendar from "./Pages/PagesFile/Calendar";
import FAQPage from "./Pages/PagesFile/FAQPage";
import Analytics from "./Pages/Charts/Analytics";
import BarChart from "./Pages/Charts/BarChart";
import LineChart from "./Pages/Charts/LineChart";
import PieChart from "./Pages/Charts/PieChart";


function App() {
  return (
    <Container fluid>
      <Row xs={1}>
        <Col md={3} className='p-0 h-100'><Sidebar /></Col>
        <Col md={8}>
          <Routes>
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
          </Routes></Col>
      </Row>
    </Container>
  );
}

export default App;
