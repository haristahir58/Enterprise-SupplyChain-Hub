import React from 'react'
import Sidebar from '../../Sole Distributor/Components/Sidebar/SoleSidebar'

import Navbar from '../Components/navbar/Navbar'
import Chart from '../../Admin/Components/chart/Chart';
import Featured from '../../Admin/Components/featured/Featured'

function soleHome() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>

          <div className="charts">
                <Featured/>
                <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
                </div>
          </div>
          </div>
          
  )
}

export default soleHome
