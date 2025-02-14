import React from 'react'
import { Arrow, Logo } from './Icons'

export default function Header() {
  return (
    <div className='bg-[#05252C]/40 flex px-4 items-center justify-between rounded-xl h-[68px] container mx-auto bg-[05252C] border-[1px] border-[#197686] '>
        <Logo/>
        <div className='hidden md:flex gap-14 lg:gap-16 xl:gap-20 items-center'>
            <a className='text-lg jeju text-[#B3B3B3] w-fit '>Events</a>
            <a className='text-lg jeju text-[#B3B3B3] w-fit '>My Tickets</a>
            <a className='text-lg jeju text-[#B3B3B3] w-fit '>About Project</a>
        </div>
        <button className='h-[44px] w-[141px] bg-white text-[#0A0C11] jeju text-sm flex gap-2 items-center justify-center rounded-xl outline outline-1 outline-[#D5EA00]/10 '>
            <span>MY TICKETS </span><Arrow/>
        </button>
    </div>
  )
}
