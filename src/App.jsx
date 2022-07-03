import './App.css'

//components
import Head from './components/Head'
import Body from './components/Body'

function App() {

  return (
    <div className="relative">
      <div className="App relative max-w-screen-xl xs:p-24 p-24">
        <Head />
        <Body />
      </div>
    </div>
  )
}

export default App
