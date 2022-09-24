import React, {useState} from 'react'
import project from "../imgs/project2.png"
import github from '../icon/github.svg'
import navigate from '../icon/navigate.png'
import home from '../icon/home.svg'
import projectsData from "../projectsData/data"
function Projects() {

  const [data] = useState(projectsData());



  return (
  <>
    <div id="top"></div>
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
                <a aria-current="page" className="cursor-default">neoG Camp Projects</a>
            </h1>
            <p className='text-gray-100'>Check out a few of the projects I have worked on.</p>
        </div>
    </div>
    <div className="map">
      {data.map((d) => (
        <div className="block pt-12 md:flex" key={d.id}>
          <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
            <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
              {d.id}
            </h2>
          </div>
          <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
                <a href={d.liveLink} target="_blank">{d.projectName}</a>
              </h3>
              <p className="text-md text-gray-300 text-light">
                {d.info}
              </p>
            </div>
            <ul className='mt-6 uppercase tracking-wider flex'>
              <li className='inline list-none pr-4'>
                <div className='flex items-center'>
                    <a href={d.githubLink} className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
                </div>
              </li>
              <li className='inline list-none pr-4'>
                <div className='flex items-center'>
                    <a href={d.liveLink} className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  </>
  )
}

export default Projects