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
            setPhases(response.data)
        });
        
    }, [api]);

   
    // phases.map(item=>console.log(item.))


    return(  
        <div>
            <h1>Pull MOON PHASES</h1> {
             phases.map((moon) => (
                <div key = {moon.days}>
                    <p>{moon.days.moonphase}</p>
                </div>
                ))
            }
                      

        </div>
    )
};

// return (
//     <div className = "App">
//         <h1> Fetch data from an api in react </h1>  {
//             items.map((item) => ( 
//             <ol key = { item.id } >
//                 User_Name: { item.username }, 
//                 Full_Name: { item.name }, 
//                 User_Email: { item.email } 
//                 </ol>
//             ))
//         }
//     </div>

// const dataMining = (()=>{  
//     phases.map(item => {
//             return (
//                <div>
                //   {days.map(product => {
                //       return (
                //          <div key={product.datetime}>
                //             <p>{product.moonphase}</p>
                //          </div>
                //       );
                //   })}
//                </div>
//             )
//     })
// });




export default Moonphases;