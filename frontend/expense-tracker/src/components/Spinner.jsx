import React from 'react'
import {ClipLoader} from 'react-spinners'
const Spinner = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <ClipLoader size={50} color="#4fa94d"/>
    </div>
  )
}

export default Spinner