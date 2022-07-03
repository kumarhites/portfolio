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
              I'm a motivated front-end engineer who has experience building and scaling web applications and services in various domains. I'm also passionate about open-source contributions, working in high impact environments, and contributing to growing development teams by helping build great products.
            </p>
          </div>
        </div>
      </div>
      <div className="block pt-12 md:flex">
        <div className="pb-6 md:p-0 md:w-full md:max-w-[150px]">
          <h2 className="font-xs font-light text-gray-100 uppercase tracking-widest text-sm">
            Projects
          </h2>
        </div>
        <div className="flex-none text-lg text-gray-100 font-light md:flex-1 md:pl-20">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
              <a href="https://wavencs.netlify.app/">Waves Music app</a>
            </h3>
            <p className="text-md text-gray-300 text-light">Waves is a music app where users can listen to non-copyright  music, fetched via an api made to scrape NCS
            webpage, which is then consumed by Waves</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
              <a href="https://bugtracker-dbc33.web.app/">BugTracker</a>
            </h3>
            <p className="text-md text-gray-300 text-light">BugTracker is a project management and collaboration web-app that lets users create and collaborate on
            different project across different domains, take realtime updates from colleagues</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline ">
              <a href="https://themausam.netlify.app/">the.mausam</a>
            </h3>
            <p className="text-md text-gray-100 text-light">the.mausam is a weather app which fetches data based on query string and displays weather of a location,
            with dark and light mode which activates based on day and night time of the given location</p>
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
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline ">
              <a href="#">Languages & Frameworks</a>
            </h3>
            <p className="text-md text-gray-300 text-light">JavaScript (ES6+), React, HTML5, CSS3, Sass, Tailwind, Java</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline ">
              <a href="#">Databases</a>
            </h3>
            <p className="text-md text-gray-300 text-light">MongoDB, MySQL</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-100 pb-1 hover:underline ">
              <a href="#">Other</a>
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
