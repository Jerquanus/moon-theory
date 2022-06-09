import React, { useState, useEffect } from "react";
import axios from "axios";
// import MoonPhaseDisplay from './MoonPhaseDisplay'
// import "./style.css"
import "../index"


function Moonphases () {
    
        const getLastSevenPhases = (async () => {
            const moon = await axios.get(
                "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Herndon,VA/last7days?unitGroup=us&key=PZ29AWQYWB27ZVT2XE8Z689AY&include=days&elements=datetime,moonphase,sunrise,sunset&contentType=csv")
            .then ((response) => {
                console.log(response)
                // const allPhases = response.data
                // setPhases(allPhases.data);
            });
        });

        return(

            <div>
                MOON PHASES <button onClick={getLastSevenPhases}> GET LUNAR TIME </button>
            </div>
        )



}
// function Moonphases () {
//     const [moon, setPhases] = useState('');
//     // useEffect to avoid continuous loop thru api

//     useEffect(() => {
//         const getLastSevenPhases = (async () => {
//             const moon = await axios.get(
//                 "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Herndon,VA/last7days?unitGroup=us&key=PZ29AWQYWB27ZVT2XE8Z689AY&include=days&elements=datetime,moonphase,sunrise,sunset&contentType=csv")
//             .then ((response) => {
//                 console.log(response)
//                 const allPhases = response.data
//                 // setPhases(allPhases.data);
//             });
            
//         });
//         // getLastSevenPhases();
//         return(
//             // <MoonPhaseDisplay moon={moon} />
//             <div>
//                 MOON PHASES <button onClick={getLastSevenPhases}> GET LUNAR TIME </button>
//             </div>
//         )
        
//         }, []);
        


// }

export default Moonphases;