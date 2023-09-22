import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import './Dashboard.scss';


function Dashboard() {
    return (
        <>
            <TopBar/>
            <div className='dashboard'>
                <p className='text-light fs-2 fw-medium lh-1'>DASHBOARD</p>
                <p className='subtitle'>Welcome to your dashboard</p>
            </div>

            <div class="container text-center text-light ">
                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 ">
                    <div class="col">
                        <div class="p-3 border border-danger bg-primary">Row column</div>
                    </div>
                    <div class="col">
                        <div class="p-3 bg-primary">Row column</div>
                    </div>
                    <div class="col">
                        <div class="p-3 bg-primary"> column</div>
                    </div>
                    <div class="col">
                        <div class="p-3 bg-primary">Row column</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard