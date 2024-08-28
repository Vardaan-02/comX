import { Component } from './dashboard/Commit-chart'
import { ReviewCardStack } from './dashboard/ReviewCardStack'
export function Dashboard() {

  return (
    <div className='text-white sm:flex w-full'>
      <div className='sm:w-[60%] flex flex-col gap-3 mt-3 bg-red-500'>
        <div className='flex justify-around'>
        <div>something</div>
        <div>
          <ReviewCardStack />
        </div>
        </div>
      </div>
      <div className='sm:w-[40%] sm:pr-20 pt-10'>
        <Component />
      </div>
    </div>
  )
}