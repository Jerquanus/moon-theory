import React, { useState, useEffect } from "react";
import axios from "axios";

// import "./style.css"
import "../index"


function Moonphases () {
    const [phases, setPhases] = useState([]);
    
    useEffect(() => {
        async function getMoons() {
            // This is pulling data for the next 7 days
            axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/washington%20DC?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cmoonphase&include=days&key=PZ29AWQYWB27ZVT2XE8Z689AY&contentType=json")
            .then ((response) => {
                // console.log(response.data.days,"setPhases")
                setPhases(response.data.days)
            });
        }  
        getMoons();
    }, []);

    console.log(phases,"The goods")

    return(  
            <div>
                {/* This should really be the card inserted here */}
                <h1>MOON PHASES</h1> {
                    phases.map((moon) => (
                        <div key = {moon}>
                            <p>Date:{moon.datetime} - Phase: {moon.moonphase}</p>
                        </div>
                    ))
                }

                <div>
                    
                </div>
            </div>
    )
};

export default Moonphases;