import React from 'react'
import { useSelector } from 'react-redux';

const SideMenu = () => {
    const toggle = useSelector(store => store.SideMenu.toggle);
    return toggle && (
        <div className='col-2 shadow-md'>
            <ul>
                <li className='p-2'>Home</li>
                <li className='p-2'>Shorts</li>
                <li className='p-2'>Subscriptions</li>
                <li className='p-2'>Library</li>
                <li className='p-2'>History</li>
                <li className='p-2'>Your videos</li>
                <li className='p-2'>Watch Later</li>
                <li className='p-2'>Liked videos</li>
            </ul>
        </div >
    )
}

export default SideMenu
