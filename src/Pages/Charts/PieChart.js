import TopBar from "../../Components/TopBar/TopBar";
import { mockDataPie } from "../../Data/ChartData";
import PieChartComp from "../../Components/ChartComponents/PieChartComp";
import './Style.scss';

function PieChart() {
    return (
        <>
            <TopBar />
            <div className=" h-50 barchart bg-primary"><PieChartComp data={mockDataPie} /></div>
        </>
    )
}

export default PieChart