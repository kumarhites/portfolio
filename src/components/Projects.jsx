import React, {useState} from 'react'
import project from "../imgs/project.png"
import github from '../icon/github.svg'
import navigate from '../icon/navigate.png'
import home from '../icon/home.svg'
import projectsData from "../projectsData/data"
function Projects() {

  const [data] = useState(projectsData());



  return (
  <>
    <div className="block mb-6 md:flex">
      <a href="/" className="md:flex justify-center items-center p-2 rounded-md hover:bg-slate-800 transistion-all duration-300">
      <img src={home} alt="home"/>
      <p className='text-slate-50 font-bold leading-tight ml-3'>Home</p></a>
    </div>
    <div className='block mb-6 md:flex'>
        <div className="items-center md:w-full md:max-w-[150px]">
          <a aria-current="page">
              <img src={project} className='rounded-full transform transistion-all duration-150 hover:scale-105' height="150px" width="150"/>
          </a>
        </div>
        <div className="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20">
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
    /* <div className="block mb-6 md:flex">
      <a href="/" className="md:flex justify-center items-center p-2 rounded-md hover:bg-slate-800 transistion-all duration-300">
      <img src={home} alt="home"/>
      <p className='text-slate-50 font-bold leading-tight ml-3'>Home</p></a>
    </div>
    <div className='block mb-6 md:flex'>
        <div className="items-center md:w-full md:max-w-[150px]">
          <a aria-current="page">
              <img src={project} className='rounded-full transform transistion-all duration-150 hover:scale-105' height="150px" width="150"/>
          </a>
        </div>
        <div className="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20">
            <h1 className='text-5xl text-slate-50 font-bold leading-tight'>
                <a aria-current="page" className="cursor-default">neoG Camp Projects</a>
            </h1>
            <p className='text-gray-100'>Check out a few of the projects I have worked on.</p>
        </div>
    </div> */
    /* mark 1 */
    /* <div className="block pt-12 md:flex">
      {data.map((d) => {
        <>
          <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          {d.id}
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://replit.com/@HiteshKumar17/mark1#index.js" target="_blank">{d.projectName}</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/mark1" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://replit.com/@HiteshKumar17/mark1#index.js" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
        </>
      })}
    </div>
    </> */
    /* mark 1 */
    /* mark 1 */
    /* <div className="block pt-12 md:flex">
      <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          Mark 1
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://replit.com/@HiteshKumar17/mark1#index.js" target="_blank">How well do you know me?</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/mark1" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://replit.com/@HiteshKumar17/mark1#index.js" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
    </div> */
    /* mark 1 */
    /* mark 2 */
    /* <div className="block pt-12 md:flex">
        <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
          <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
            Mark 2
          </h2>
        </div>
        <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
              <a href="https://replit.com/@HiteshKumar17/mark2#index.js" target="_blank">Ocean Quiz</a>
            </h3>
            <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
          </div>
          <ul className='mt-6 uppercase tracking-wider flex'>
            <li className='inline list-none pr-4'>
              <div className='flex items-center'>
                  <a href="https://github.com/kumarhites/mark1" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
              </div>
            </li>
            <li className='inline list-none pr-4'>
              <div className='flex items-center'>
                  <a href="https://replit.com/@HiteshKumar17/mark2#index.js" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
              </div>
            </li>
          </ul>
        </div>
      </div>   */
    /* mark 2 */
    /* mark 3, 4, 5 */
    /* <div className="block pt-12 md:flex">
        <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
          <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
            Mark 3
          </h2>
          <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
            Mark 4
          </h2>
          <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
            Mark 5
          </h2>
        </div>
        <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
              <a href="/" target="_blank">Personal Portfolio</a>
            </h3>
            <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
          </div>
          <ul className='mt-6 uppercase tracking-wider flex'>
            <li className='inline list-none pr-4'>
              <div className='flex items-center'>
                  <a href="https://github.com/kumarhites/portfolio" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
              </div>
            </li>
            <li className='inline list-none pr-4'>
              <div className='flex items-center'>
                  <a href="/" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
              </div>
            </li>
          </ul>
        </div>
      </div>   */
      /* mark 3, 4, 5 */
      /* mark 6 */
    /* <div className="block pt-12 md:flex">
      <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          Mark 6
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://minion-translatr.netlify.app/" target="_blank">Minion Translator</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/minion-translator" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://minion-translatr.netlify.app/" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>   */
    /* mark 6 */
    /* mark 7 */
    /* <div className="block pt-12 md:flex">
      <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          Mark 7
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://fictional-translatr.netlify.app/" target="_blank">Fictional Translator</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/fictional-translation" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://fictional-translatr.netlify.app/" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>   */
    /* mark 7 */
    /* mark 8 */
    /* <div className="block pt-12 md:flex">
      <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          Mark 8
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://emojipdia.netlify.app/" target="_blank">EmojiPedia 📚</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/emojipedia" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://emojipdia.netlify.app/" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>   */
    /* mark 8 */
    /* mark 9 */
    /* <div className="block pt-12 md:flex">
      <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          Mark 9
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://gamesjam.netlify.app/" target="_blank">GameJam</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/gamejam" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://gamesjam.netlify.app/" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>   */
    /* mark 9 */
    /* mark 10 */
    /* <div className="block pt-12 md:flex">
      <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          Mark 10
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://gamesjam.netlify.app/" target="_blank">Cash Register Manager</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/gamejam" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://gamesjam.netlify.app/" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>   */
    /* mark 10 */
    /* mark 11 */
    /* <div className="block pt-12 md:flex">
      <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          Mark 11
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://luckybirthday0.netlify.app/" target="_blank">Is Your Birthday Lucky ?</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/luckybirthday" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://luckybirthday0.netlify.app/" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>   */
    /* mark 11 */
    /* mark 12 */
    /* <div className="block pt-12 md:flex">
      <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          Mark 12
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://funwithtriangles09.netlify.app/" target="_blank">Fun with Triangles</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/fun-with-triangles" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://funwithtriangles09.netlify.app/" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>   */
    /* mark 12 */
    /* mark 13 */
    /* <div className="block pt-12 md:flex">
      <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          Mark 13
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://bright-taffy.netlify.app/" target="_blank">Birthday Palindrome</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/birthday-plaindrome" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://bright-taffy.netlify.app/" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>   */
    /* mark 13 */
    /* mark 14 */
    /* <div className="block pt-12 md:flex">
      <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
        <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
          Mark 14
        </h2>
      </div>
      <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
            <a href="https://sparkly-pixie-f8f1fb.netlify.app/" target="_blank">Stocks. Check Profit/Loss on your Stock</a>
          </h3>
          <p className="text-md text-gray-300 text-light">A CLI app built with nodeJS. You can send this to your friends and find out who knows you better</p>
        </div>
        <ul className='mt-6 uppercase tracking-wider flex'>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://github.com/kumarhites/stockProfitLoss" className="inline-block font-semibold text-xs text-gray-100 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={github} className='min-w-6 w-6'/></a>
            </div>
          </li>
          <li className='inline list-none pr-4'>
            <div className='flex items-center'>
                <a href="https://sparkly-pixie-f8f1fb.netlify.app/" className="inline-block font-semibold text-xs text-gray-600 transform transistion-all duration-150 hover:scale-125" target="_blank"><img src={navigate} className='min-w-6 w-6'/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>   */
    /* mark 14 */
  )
}

export default Projects