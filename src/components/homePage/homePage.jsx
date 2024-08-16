import React from 'react';
import Sidebar from '../sidebar/sideBar';
import Content from '../content/content';
import { BrowserRouter, Router, Route, Routes, Outlet } from 'react-router-dom';;


export default function HomePage(){





    return( <div className='homePage-container' >
            
            <div className='homePage-card'>
                
            <Sidebar img="/undraw_drink_coffee_v3au.svg"/>
            
            <Outlet/>  
            
            </div>
            </div>
    )
}
