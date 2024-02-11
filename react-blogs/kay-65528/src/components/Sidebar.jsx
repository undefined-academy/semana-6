import React from 'react';
import '../styles/Sidebar.css'

const Sidebar = ({data}) => {

  return(
    <div className="sidebar">
      <div className="searchbar">
        <input className='sidebar-input' type="text" placeholder="Search..." />
      </div>
      <div className="suggestions">
        {data.map(dataKey =>{
          return(
          <li key={data.indexOf(dataKey)+1}>
            <a>{dataKey}</a>
          </li>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar;