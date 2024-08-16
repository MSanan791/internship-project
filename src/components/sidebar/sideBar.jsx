import React from 'react'
import { useState } from 'react';


export default function sidebar({img}){
    const img_src = img
    
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

        return(
            <div className={`SideBar ${sidebarActive? 'active' : ''}`}>
                <div className='top'>
                    <div className='logo'>
                    <i className='bx bx-lemon' ></i>
                        <span className='logo-text'>LEMON</span>
                    </div>
                    <i  onClick={toggleSidebar} id = "btn"><i className='bx bx-menu'/></i>
                    
                </div>
                
                <div className='user'>
                    
                    <img src = {img_src} className='user-img'/>
                    <div >
                        <p className="bold">clint B.</p>
                        <p>Admin</p>
                    </div>

                </div>
                
                
                <ul>
                        <li>
                            <a href="/homepage/employees">
                            <i className='bx bx-yen' ></i>
                            <span className='nav-item'>DashBoard</span>
                            </a>
                            <span className="tooltip">DashBoard</span>
                        </li>

                        <li>
                            <a href="/homepage/employees">
                            <i className='bx bx-briefcase' ></i>
                            
                            <span className='nav-item'>Employees</span>
                            </a>
                            <span className="tooltip">Employees</span>
                        </li>

                    </ul>


            </div>
        )
}