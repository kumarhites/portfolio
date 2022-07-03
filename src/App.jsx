import './App.css'

//components
import Head from './components/Head'
import Body from './components/Body'

function App() {

  return (
    <div className="relative">
      <div className="App relative max-w-screen-xl xs:p-20 p-20">
        <Head />
        <Body />
      </div>
    </div>
  )
}

export default App
