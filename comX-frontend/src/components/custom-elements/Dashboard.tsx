import React from 'react'
import { Component } from './dashboard/Commit-chart'
import { ThreeDCard } from './dashboard/Commit-counter'
export function Dashboard() {
  return (
    <div className='text-white sm:flex'>
      <div className='sm:w-[60%] flex flex-col gap-3 mt-3'>
      <div className='flex justify-center gap-3 h-auto'>
        <div>
          <ThreeDCard Heading="Play games"/>
        </div>
        <div>
          <ThreeDCard Heading="Appreciation Recieved"/>
        </div>
        <div>
          <ThreeDCard Heading="Tasks Completed"/>
        </div>
      </div>
      <div className=' flex justify-center gap-3 h-auto'>
        <div>
          <ThreeDCard Heading="Web Development"/>
        </div>
        <div>
          <ThreeDCard Heading="App Development"/>
        </div>
        <div>
          <ThreeDCard Heading="Blockchain"/>
        </div>
      </div>
      </div>
      <div className='sm:w-[40%] sm:pr-20 pt-10'>
        <Component />
      </div>
    </div>
  )
}