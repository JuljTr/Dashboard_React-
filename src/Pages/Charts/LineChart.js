import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import LineChartComp from '../../Components/ChartComponents/LineChartComp';
import { mockDataLine } from '../../Data/ChartData';
import './Style.scss';


function LineChart() {
    return (
        <>
            <TopBar />
            <div className=" h-50 barchart bg-primary"><LineChartComp data={mockDataLine} /></div>
        </>
    )
}

export default LineChart;