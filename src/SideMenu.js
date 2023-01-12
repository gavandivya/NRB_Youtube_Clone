import React from 'react'
import { useSelector } from 'react-redux';

const SideMenu = () => {
    const toggle = useSelector(store => store.SideMenu.toggle);
    return toggle && (
        <div className='col-2 shadow-md text-left pl-8'>
            <ul>
                <li className='p-2'><i class="fa-sharp fa-solid fa-house pr-4"></i> Home </li>
                <li className='p-2'><i class="fa-solid fa-s pr-4"></i> Shorts </li>
                <li className='p-2'><i class="fa-brands fa-squarespace pr-4"></i>Subscriptions</li>
                <li className='p-2'><i class="fa-regular fa-rectangle-list pr-4"></i>Library</li>
                <li className='p-2'><i class="fa-sharp fa-solid fa-clock-rotate-left pr-4"></i>History</li>
                <li className='p-2'><i class="fa-solid fa-clapperboard pr-4"></i>Your videos</li>
                <li className='p-2'><i class="fa-regular fa-clock pr-4"></i>Watch Later</li>
                <li className='p-2'><i class="fa-regular fa-thumbs-up pr-4"></i>Liked videos</li>
            </ul>
        </div >
    )
}

export default SideMenu
