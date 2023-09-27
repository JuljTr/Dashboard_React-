import Table from 'react-bootstrap/Table';
import TopBar from "../../Components/TopBar/TopBar";

function mockDataTable(name, status, date, trackingId, city, creditCard) {
    return { name, status, date, trackingId, city, creditCard }
}

const createMockData = [
    mockDataTable("Timothy Griffin", 'Pending', "4-10-2016", "3393702792", "New Castle", "Discover"),
    mockDataTable("Eric Lopez", 'Pending', "10/8/2018", "1635819743", "Los Angeles", "MasterCard"),
    mockDataTable("Adam Evans", 'Pending', "1/5/2013", "1369491368", "Franklin", "VISA"),
    mockDataTable("Joshua Gray", 'Pending', "9/10/2020", "400180223", "Reno", "American Express"),
    mockDataTable("James Hernandez", 'Pending', "31/5/2016", "485454938", "Hampton", "American Express"),
    mockDataTable("Stephanie Simmons", 'Pending', "30/5/2021", "1103090886", "Schaumburg", "MasterCard"),
    mockDataTable("Brandon King", 'Pending', "18/8/2014", "230176182", "Casey", "VISA")
]
console.log(createMockData.length)

function Analytics() {
    return (
        <>
            <TopBar />
            <Table responsive="sm" variant="dark" hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Tracking Id</th>
                        <th>Status</th>
                        <th>City</th>
                        <th>Credit Card</th>
                    </tr>
                </thead>
                <tbody>
                    {createMockData.map((data) => {
                        console.log(data)
                        return (<tr>
                            <td key={data.name}>1</td>
                            <td>{data.date}</td>
                            <td>{data.name}</td>
                            <td>{data.trackingId}</td>
                            <td>{data.status}</td>
                            <td>{data.city}</td>
                            <td>{data.creditCard}</td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        </>
    )
}


export default Analytics;