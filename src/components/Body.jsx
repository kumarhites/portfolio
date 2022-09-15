import { Link } from "react-router-dom";
function Body() {
  return (
    <>
      <div className="block pt-12 md:flex">
        <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
          <h2 className="font-xs font-light tracking-widest text-sm text-gray-100 leading-normal uppercase">
            About Me
          </h2>
        </div>
        <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
          <div className="mb-6">
            <p>
            I'm a Fullstack Web Developer. I enjoy solving problems and I'm always seeking improvement in the work I do.
            Check out some of my work in the <i><b>Projects</b></i> section.
            </p>
          </div>
        </div>
      </div>
      <div className="block pt-12 md:flex">
        <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
          <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
            Featured Projects
          </h2>
        </div>
        <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
              <a href="https://wavencs.netlify.app/" target="_blank">Waves Music app</a>
            </h3>
            <p className="text-md text-gray-300 text-light">Waves is a music app where users can listen to non-copyright  music, fetched via an api made to scrape NCS
            webpage, which is then consumed by Waves Music app</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline ">
              <a href="https://themausam.netlify.app/" target="_blank">the.mausam</a>
            </h3>
            <p className="text-md text-gray-100 text-light">the.mausam is a weather app which fetches data based on query string and displays weather of a location,
            with dark and light mode which activates based on day and night time of the given location</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline ">
              <Link to="/projects">neoG Camp Projects</Link>
            </h3>
            <p className="text-md text-gray-100 text-light">From a CLI to a Full-stack Applications.</p>
          </div>
        </div>
      </div>
      <div className="block pt-12 md:flex">
        <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
          <h2 className="font-xs font-light text-sm text-gray-100 uppercase tracking-widest">
            Blogs
          </h2>
        </div>
        <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline" id="languages">
              <a href="#blog">Dummy Blog 1</a>
            </h3>
            <p className="text-md text-gray-300 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, hic magni delectus exercitationem ex saepe aspernatur blanditiis maiores, deserunt magnam dolorum fugit vero dolore veritatis eum fugiat ea illum optio?...</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline" id="databases">
              <a href="#blog">Dummy Blog 2</a>
            </h3>
            <p className="text-md text-gray-300 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quod maxime ratione sint minima voluptatibus sed deleniti illo odit, excepturi libero error, praesentium iure consequuntur ipsa quia nisi tempore distinctio....</p>
          </div>
        </div>
      </div>
      <div className="block pt-12 md:flex">
        <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
          <h2 className="font-xs font-light text-sm text-gray-100 uppercase tracking-widest">
            Skills
          </h2>
        </div>
        <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline" id="languages">
              <a href="#languages">Languages & Frameworks</a>
            </h3>
            <p className="text-md text-gray-300 text-light">JavaScript (ES6+), React, HTML5, CSS3, Sass, Tailwind, Java</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline" id="databases">
              <a href="#databases">Databases</a>
            </h3>
            <p className="text-md text-gray-300 text-light">MySQL</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline" id="others">
              <a href="#others">Other</a>
            </h3>
            <p className="text-md text-gray-300 text-light">Agile / Scrum</p>
          </div>
        </div>
      </div>
      <div className="block pt-12 md:flex">
        <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
          <h2 className="font-xs font-light tracking-wider text-sm text-gray-100 uppercase">
            Certifications
          </h2>
        </div>
        <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline ">
              <a href="https://www.coursera.org/account/accomplishments/verify/2GACKFS2TLP2">Algorithmic toolbox (Coursera)</a>
            </h3>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
              <a href="https://www.coursera.org/account/accomplishments/verify/KVRRVK4E2VPK">Blockchain Basics (Coursera)</a>
            </h3>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
              <a href="https://www.freecodecamp.org/certification/hitesh18995/javascript-algorithms-and-data-structures">JavaScript algorithms and data structures (freecodecamp)</a>
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
