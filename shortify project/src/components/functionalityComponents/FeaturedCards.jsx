import React from 'react'
import CommonCard from './CommonCard'

const FeaturedCards = () => {
  return (
    <div >
      <h2 className="text-6xl font-semibold text-white my-10 text-center">We place great editors FAST
      </h2>
      <div className="flex justify-between items-center gap-8">
      <CommonCard/>
      <CommonCard/>
      <CommonCard/>
      </div>
   
    </div>
  )
}

export default FeaturedCards