import React, { useState, useEffect } from "react";
import axios from "axios";
// import MoonPhaseDisplay from './MoonPhaseDisplay'
// import "./style.css"
import "../index"


function Moonphases () {
    const [phases, setPhases] = useState(null);
    
    const api = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/washington%20DC?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cmoonphase&include=days&key=PZ29AWQYWB27ZVT2XE8Z689AY&contentType=json"
    
    
    // let sharePhases = null
    useEffect(() => {
        axios.get(api)
        .then ((response) => {
            console.log(response.data.days)
            setPhases(response)
        });
        
    }, [api]);

   
    // phases.map(item=>console.log(item.))


    return(  

        <div>
             <h1>MOON PHASES</h1>
            {/* <button onClick={dataMining}> GET LUNAR DATES </button> */}
            <div>
                {/* <h1>{phases}</h1> */}
                
            </div>
        </div>
    )
};


// const dataMining = (()=>{  
//     phases.map(item => {
//             return (
//                <div key={item.days}>
//                   {item.days.map(product => {
//                       return (
//                          <div key={product.datetime}>
//                             <p>{product.moonphase}</p>
//                          </div>
//                       );
//                   })}
//                </div>
//             )
//     })
// });




export default Moonphases;