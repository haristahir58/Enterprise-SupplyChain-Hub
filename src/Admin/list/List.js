import React from 'react'
import './list.scss'
import '../Components/sidebar/sidebar.scss'
import Navbar from '../Components/navbar/Navbar'
import Sidebar from '../Components/sidebar/Sidebar'
import Datatable from '../Components/datatable/Datatable'

const List = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Datatable/>
    </div>
  </div>
  )
}

export default List