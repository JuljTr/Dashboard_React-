import BarChartComp from "../../Components/ChartComponents/BarChart";
import { mockDataBar} from "../../Data/Data";

function BarChart() {
    return (
        <div className="h-50 mw-lg-75"><BarChartComp data={mockDataBar}/></div>
    )
}

export default BarChart