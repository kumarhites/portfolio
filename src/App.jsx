import './App.css'

//components
import Head from './components/Head'
import Body from './components/Body'

function App() {

  return (
    <div className="relative">
      <div className="p-8 relative max-w-screen-xl lg:p-24">
        <Head />
        <Body />
      </div>
    </div>
  )
}

export default App
