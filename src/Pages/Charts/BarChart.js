import BarChartComp from "../../Components/ChartComponents/BarChartComp";
import { mockDataBar } from "../../Data/ChartData";
import TopBar from "../../Components/TopBar/TopBar";
import './Style.scss';

function BarChart() {
    return (
        <>
            <TopBar />
            <div className=" h-50 barchart bg-primary"><BarChartComp data={mockDataBar} /></div>
        </>
    )
}

export default BarChart;