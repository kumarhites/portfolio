import React, {useState} from 'react'
import project from "../imgs/project.png"
import defi from "../imgs/defi.jpg"
import home from '../icon/home.svg'
function Blogs() {
  return (
    <>
    <div className="block mb-6 md:flex">
      <a href="/" className="flex justify-start items-center p-2 rounded-md hover:bg-slate-800 transistion-all duration-300 max-w-[100px] min-w-[100px]">
      <img src={home} alt="home"/>
      <p className='text-slate-50 font-bold leading-tight ml-3'>Home</p></a>
    </div>
    <div className='block mb-6 md:flex'>
        <div className="items-center md:w-full md:max-w-[150px]">
          <a aria-current="page">
              <img src={project} className='rounded-full transform transistion-all duration-150 hover:scale-105' height="150px" width="150"/>
          </a>
        </div>
        <div className="flex flex-col justify-center pt-6 md:pt-1 md:flex-1 md:pl-20">
            <h1 className='text-5xl text-slate-50 font-bold leading-tight'>
                <a aria-current="page" className="cursor-default">Blogs</a>
            </h1>
            <p className='text-gray-100'>Check out a few of my blogs.</p>
        </div>
    </div>
    <div className="map">
        <div className="block pt-12 md:flex ">
          
            <div className="flex-none text-lg text-gray-700 font-light md:flex-1">
                    <div className="max-w-sm rounded overflow-hidden shadow-indigo-400 backdrop-blur bg-white">
                        <img className="w-full" src={defi} alt="defi"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-2xl mb-2 ">Decentralized Finance</div>
                            <p className="text-gray-800 text-base font-medium">
                            DeFi is an acronym of Decentralized Finance that is basically a financial structure or an ecosystem of financial applications that built using blockchain networks which translates an existing financial structure by porting them onto the... <a href='https://medium.com/@hkhiteshkumar66/decentralized-finance-ff9e96783d16' className='hover:underline transistion-all duration-300 text-blue-700' target="_blank">Read More</a>
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#defi</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#blockchain</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blogs