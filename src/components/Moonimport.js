import React, { useState, useEffect } from "react";
import axios from "axios";
// import MoonPhaseDisplay from './MoonPhaseDisplay'
// import "./style.css"
import "../index"


function Moonphases () {
    const [phases, setPhases] = useState(null);
    
    const api = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/washington%20DC?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cmoonphase&include=days&key=PZ29AWQYWB27ZVT2XE8Z689AY&contentType=json"
    
    useEffect(() => {

        async function getMoons() {
            axios.get(api)
            .then ((response) => {
                console.log(response.data.days)
                setPhases(response.data)
            });
        }  
        getMoons();
    }, [api]);

    console.log(phases,"The goods")

   
    // phases.map(item=>console.log(item.))
    if (phases){
        return(  
    
            <div>
                <h1>Pull MOON PHASES</h1> {
                 phases.map((moon) => (
                    <div key = {moon.data.days}>
                        <p>{moon.days.moonphase}</p>
                    </div>
                    ))
                }
            </div>
        )
    }
};


// import {useState, useEffect} from 'react';

// function App() {
//   // ✅ State is initialized to `[]`
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function getUsers() {
//       const response = await fetch('https://randomuser.me/api/', {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//         },
//       });

//       const data = await response.json();

//       setUsers(data.results);
//     }

//     getUsers();
//   }, []);

//   console.log(users);

//   return (
//     <div>
//       {/* ✅ users is `[]`, until API responds */}
//       {users.map(user => (
//         <div key={user.id.value}>
//           <h2>
//             Name: {user.name.first} {user.name.last}
//           </h2>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


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