import React from 'react'
import CommonButton from '../ui/CommonButton'

const CommonCard = () => {
  return (
   <div className="w-1/3 px-10 py-5 rounded-lg border border-4 border-red-600 flex flex-col items-start">
    <div className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 w-56 flex justify-center">
    BETTER EDITING

    </div>
    <h4 className='text-3xl font-semibold text-white my-10'>Top 1%</h4>
    <ul>
      <li className='text-xl text-white'>We find you the best editor for your video style
      </li>
      <li className='text-xl text-white'>We have 5+ years of experience editing our own content with overseas talent

      </li>
    </ul>
    <CommonButton buttonText="Start Hiring"/>
  </div>
  )
}

export default CommonCard