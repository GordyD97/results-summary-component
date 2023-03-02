import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='mx-auto'>
        {/* big container */}
        <div className='leftcard'>
            <h2>your result</h2>

            <div className='score'>
              <h1>76</h1>
                <p>out of 100</p>

                <h2> Great</h2>
                <p> You score d higher than 65% of the poeple who have taken these test.</p>
            </div>
            
        </div>
        {/* this is the seperation between left card and right card. */}


      </div>



    </div>
  )
}

export default App
