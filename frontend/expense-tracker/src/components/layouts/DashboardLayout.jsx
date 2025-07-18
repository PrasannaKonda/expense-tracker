import React,{useContext} from 'react'

import { UserContext,UserProvider } from '../../context/UserContext'
import Navbar from './Navbar'
import SideMenu from './SideMenu'

const DashboardLayout = ({children, activeMenu}) => {
    const {user} = useContext(UserContext)
  return (
    <div className="">
        <Navbar activeMenu={activeMenu}/>

        {user && (
            <div className='flex'>
                {/* <div className='bg-red-200'> */}
                <div className='max-[1080px]:hidden'>
                    <SideMenu activeMenu={activeMenu}/>
                </div>
                <div className='grow mx-5'>{children}</div>
            </div>
         )}
    </div>
  )
}

export default DashboardLayout