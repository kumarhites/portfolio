import './App.css'
import {Routes, Route} from 'react-router-dom'

//components
import Head from './components/Head'
import Body from './components/Body'
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";

function App() {

  return (
    <div className="relative">
      <div className="p-8 relative max-w-screen-xl lg:p-24">
        <Routes>
          <Route path='/' element={<><Head /><Body /></>}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/blogs' element={<Blogs />}/>
        </Routes>
        
      </div>
    </div>
  )
}

export default App
