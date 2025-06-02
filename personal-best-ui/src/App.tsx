import './App.css'
import LineChart from './data-visualisation/LineChart'

function App() {

  return (
    <>
      <h1>Personal Best 🏋🏻</h1>
      <div className="card">
        <p>
          Check your progress and feel good about yourself! Yeah
        </p>
      </div>
      <p className="read-the-docs">
        You're doing really well ❤️
      </p>
      <LineChart exerciseName={'Kettlebell swing'} lineColour={'rgb(255, 99, 132)'} borderColour={'rgb(255, 99, 132)'}></LineChart>
    </>
  )
}

export default App
