import './App.css'
import Home from './components/Home/Home'

function App() {


  return (
    <>
      <Home fallbackElement={<div>Loading application...</div>} />
    </>
  )
}

export default App
