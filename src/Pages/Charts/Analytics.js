import Table from 'react-bootstrap/Table';
import TopBar from "../../Components/TopBar/TopBar";
import { createMockData } from "./TableData";

function statusStyle(status) {
    if (status === "Approved") {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

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
                            <td style={statusStyle(data.status)}>{data.status}</td>
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