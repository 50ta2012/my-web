import reactLogo from './assets/react.svg'
import './App.css'

document.title = "Berlin Website";

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Berlin Website</h1>
      <p>Continue...</p>
    </div>
  )
}

export default App
