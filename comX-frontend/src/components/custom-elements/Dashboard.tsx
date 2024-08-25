import React from 'react'
import { Component } from './dashboard/Commit-chart'
export function Dashboard() {
  return (
    <div className='text-white sm:flex w-full'>
      <div className='sm:w-[60%] flex flex-col gap-3 mt-3 bg-red-500'>
        dsf
      </div>
      <div className='sm:w-[40%] sm:pr-20 pt-10'>
        <Component />
      </div>
    </div>
  )
}