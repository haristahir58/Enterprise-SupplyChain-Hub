import React from 'react'
import Sidebar from '../Components/sidebar/Sidebar'
import Navbar from '../Components/navbar/Navbar'
import "./home.scss"
import Widget from "../Components/widget/Widget";
import Chart from '../Components/chart/Chart';
import Featured from '../Components/featured/Featured'
import Table from '../Components/table/Table'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earnings"/>
          <Widget type="products"/>
          </div>
                  <div className="charts">
                <Featured/>
                <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
                </div>
                <div className="listContainer">
                  <div className="listTitle">Latest Transactions</div>
                  <Table/>
                </div>
        </div>
    </div>
  )
}

export default Home