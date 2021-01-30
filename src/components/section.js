import React from 'react'

export default function Section({title,svg}) {
	return (
		<div className ='flex items-center divide-x-2 justify-center py-10'>
          	<p className='text-center wow slideInLeft font-bold md:text-3xl md:mx-5 '>{title}</p>
          	<p className='md:mx-5 wow slideInRight'><img src={svg} alt="svg"  className='w-32 h-32'/></p>
        </div>
	)
}