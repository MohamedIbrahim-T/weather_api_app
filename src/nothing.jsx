import "./style.css"
import { useState } from "react"
import axios from "axios"
function Weather(){
    const[city,setcity] = useState("")
    const[wheather,setweather] = useState("")
    const[temp,settemperature] = useState("")
    const[description,setdecription] = useState("")

    function handlecity(evt){
        setcity(evt.target.value)
    }
    function getwht(){
var whetherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e572227f236eaab55bbda5b1790d6ecc`)
whetherdata.then(
    function(sucess){
        console.log(sucess.data)
        setweather(sucess.data.weather[0].main)
        settemperature(sucess.data.main.temp)
        setdecription(sucess.data.weather[0].description)
    }
)
    }
    return(
    
        <div className="container">
            <div className="wholediv">
                <h1 className="heading">Weather Report</h1>
                <p>I can give you the weather report clearly</p>
                <input onChange={handlecity} type="text" placeholder="Enter City,State,Country Name To Search"></input>
                <button onClick={getwht}>Get Details</button>
                <ul>
                    <li>Weather : {wheather}</li>
                    <li>Temperature : {temp}</li>
                    <li>Description : {description}</li>
                </ul>

           </div>
            </div>
    )
}
export default Weather