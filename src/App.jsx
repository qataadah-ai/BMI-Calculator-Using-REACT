import { useEffect, useState } from 'react'

import './App.css'

function App() {
const [height, setheight] = useState("")
const [weight, setweight]= useState("")
const [BMI , setBMI]= useState("")

 
// Formula/Function for BMI
const calculateBmi = ()=>{

  if(height>0 && weight >0){
   const  heightinCM = height/100
  const result = (weight / (heightinCM*heightinCM)).toFixed(2);
  setBMI(result)
  }else{
    setBMI("invalid BMI")
  }

}


  return (
    <div className='Section'>

      {/* BMI CONTAINER */}
    <div className='BMI-contain'>

      <h2>BMI Calculator</h2>
        
    {/* Input Fields */}
      <input type="number" 
      placeholder='Enter Height in Cm'
      value={height}
      onChange={(e)=>setheight(e.target.value)}
      />

       <input type="number" 
      placeholder='Enter Weight'
      value={weight}
      onChange={(e)=>setweight(e.target.value)}
      />

      {/* Button for Function */}
      <button onClick={calculateBmi}>calculate</button>
        {BMI && (
           <h4>Your BMI IS {BMI}</h4>
       
        )}
     
   {/* Conditions according to BMI */}
  {BMI && (
  <p>
 
  {BMI < 18.5
    ? " Underweight"
    : BMI < 24.9
    ? " Normal Weight"
    : BMI < 29.9
    ? " Overweight"
    : ""}
</p>
)}


 
    </div>
    
    </div>
  )
}

export default App
     