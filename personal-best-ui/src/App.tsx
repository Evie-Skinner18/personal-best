import './App.css'
import LineChart from './data-visualisation/LineChart'
import client from './main'

function App() {
  let message;
  // to-do consume api response with useState
  // [const message, setMessage] =  useState<string | null>(null);;

  client.queries.getPersonalBests({
    exerciseName: "Kettlebell swing",
    modality: "Weights"
  }).then((response) => {
    message  = response;
  }).catch((error) => {
    console.error("Error fetching personal bests:", error);
  });

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
      <LineChart exerciseName={'Kettlebell swing'} lineColour={'rgb(255, 99, 132)'} borderColour={'rgb(250, 91, 125)'}></LineChart>
      <div>
        <h2> { message?? 'coucou' }</h2>
      </div>
    </>
  )
}

export default App
