import React from 'react'

function Head() {
  return (
    <div className='block mb-6 md:flex'>
        <div className="items-center md:w-full md:max-w-[150px]">
            <a aria-current="page" class href="/">
                <img src="./src/imgs/profile.jpg" className='rounded-full transform transistion-all duration-150 hover:scale-105' height="150px" width="150"/>
            </a>
            
        </div>
        <div className="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20">
            <h1 className='text-5xl text-slate-50 font-bold leading-tight hover:text-black'>
                <a aria-current="page" class="" href="/">Hitesh Kumar</a>
            </h1>
            <p className='text-gray-100'>Front-end Developer 💻</p>
            <ul className='mt-6 uppercase tracking-wider flex'>
                <li className='inline list-none pr-4'>
                    <div className='flex items-center'>
                        
                        <a href="https://twitter.com/hitesh091895" className="inline-block font-semibold text-xs text-gray-100 hover:text-black"><img src="src\icon\twitter.svg" className='min-w-6 w-6' /></a>
                    </div>
                </li>
                <li className='inline list-none pr-4'>
                    <div className='flex items-center'>
                        
                        <a href="https://github.com/kumarhites/" className="inline-block font-semibold text-xs text-gray-600 hover:text-black"><img src="src\icon\github.svg" className='min-w-6 w-6' /></a>
                    </div>
                </li>
                <li className='inline list-none pr-4'>
                    <div className='flex items-center'>
                        
                        <a href="https://www.linkedin.com/in/hitesh-kumar09/" className="inline-block font-semibold text-xs text-gray-600 hover:text-black"><img src="src\icon\linkedin.svg" className='min-w-6 w-6' /></a>
                    </div>
                </li>
                <li className='inline list-none pr-4'>
                    <div className='flex items-center'>
                        
                        <a href="mailto:hkhiteshkumar66@gmail.com" className="inline-block font-semibold text-xs text-gray-600 hover:text-black"><img src="src\icon\gmail.svg" className='min-w-6 w-6' /></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Head