import React from 'react'
import Info from './components/Info'
import About from './components/About'

function App() {


  return (
    <div className="card--container">
      <div className="card">
        <Info />
        <div className="card--content">
          <About />
        
        </div>

      </div>
    </div>
  )
}

export default App
