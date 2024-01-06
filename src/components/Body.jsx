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
                            I'm a Fullstack Web Developer. I enjoy solving
                            problems and I'm always seeking improvement in the
                            work I do. Check out some of my work in the{" "}
                            <i>
                                <b>Projects</b>
                            </i>{" "}
                            section.
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
                            <a
                                href="https://flocker.netlify.app/"
                                target="_blank"
                            >
                                Flocker [Social media]
                            </a>
                        </h3>
                        <p className="text-md text-gray-300 text-light">
                            Flockr is a social media app built with React and
                            Tailwind CSS. It provides various features for users
                            to connect, share posts, and explore content. The
                            app is designed to be responsive, ensuring a
                            seamless experience across different devices.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
                            <a
                                href="https://kicks-ecomm.netlify.app/"
                                target="_blank"
                            >
                                Kicks [E-commerce]
                            </a>
                        </h3>
                        <p className="text-md text-gray-300 text-light">
                            This is a sneakers ecommerce app built with React
                            and Tailwind CSS. It provides various features for
                            users to browse, search, and purchase sneakers. The
                            app is also responsive, ensuring a seamless
                            experience across different devices.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-100 pb-1 hover:underline ">
                            <a
                                href="https://themausam.netlify.app/"
                                target="_blank"
                            >
                                the.mausam
                            </a>
                        </h3>
                        <p className="text-md text-gray-100 text-light">
                            the.mausam is a weather app which fetches data based
                            on query string and displays weather of a location,
                            with dark and light mode which activates based on
                            day and night time of the given location
                        </p>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-100 pb-1 hover:underline ">
                            <Link to="/projects">
                                <a href="#top">neoG Camp Projects</a>
                            </Link>
                        </h3>
                        <p className="text-md text-gray-100 text-light">
                            From a CLI to a Full-stack Applications.
                        </p>
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
                        <h3
                            className="font-semibold text-gray-100 pb-1 hover:underline"
                            id="languages"
                        >
                            <Link to="/blogs">Check out my blogs</Link>
                        </h3>
                        <p className="text-md text-gray-300 text-light">
                            I am also working on some technical and non
                            techincal blogs. I like to document my journey of
                            learning.
                        </p>
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
                        <h3
                            className="font-semibold text-gray-100 pb-1 hover:underline"
                            id="languages"
                        >
                            <a href="#languages">Languages & Frameworks</a>
                        </h3>
                        <p className="text-md text-gray-300 text-light">
                            <span className="flex gap-1">
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="JavaScript"
                                    />
                                </a>
                                <a
                                    href="https://www.typescriptlang.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="TypeScript"
                                    />
                                </a>
                                <a
                                    href="https://git-scm.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="Git"
                                    />
                                </a>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="HTML5"
                                    />
                                </a>
                                <a
                                    href="https://reactjs.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="React"
                                    />
                                </a>
                                <a
                                    href="https://vitejs.dev/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="Vite"
                                    />
                                </a>
                                <a
                                    href="https://tailwindcss.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="TailwindCSS"
                                    />
                                </a>
                                <a
                                    href="https://www.w3.org/TR/CSS/#css"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="CSS3"
                                    />
                                </a>
                                <a
                                    href="https://getbootstrap.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="Bootstrap"
                                    />
                                </a>
                                <a
                                    href="https://redux.js.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="Redux"
                                    />
                                </a>
                                <a
                                    href="https://nodejs.org/en/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="NodeJS"
                                    />
                                </a>
                                <a
                                    href="https://expressjs.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="Express"
                                    />
                                </a>
                                <a
                                    href="https://www.mongodb.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="MongoDB"
                                    />
                                </a>
                                <a
                                    href="https://www.mysql.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="MySQL"
                                    />
                                </a>
                                <a
                                    href="https://www.figma.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                                        width="36"
                                        height="36"
                                        alt="Figma"
                                    />
                                </a>
                            </span>
                        </p>
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
                            <a href="https://www.coursera.org/account/accomplishments/verify/2GACKFS2TLP2">
                                Algorithmic toolbox (Coursera)
                            </a>
                        </h3>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
                            <a href="https://www.coursera.org/account/accomplishments/verify/KVRRVK4E2VPK">
                                Blockchain Basics (Coursera)
                            </a>
                        </h3>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-100 pb-1 hover:underline">
                            <a href="https://www.freecodecamp.org/certification/hitesh18995/javascript-algorithms-and-data-structures">
                                JavaScript algorithms and data structures
                                (freecodecamp)
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
