import React, { useEffect, useState } from "react";


function Timer() {

       
       const [id, setId] = useState(null)
       const [startDisabled, setStartDisabled] = useState(false)
       const [seconds, setSeconds] = useState(55);
       const [minutes, setMinutes] = useState(59);
       const [hours, setHours] = useState(0);
     
       

        function handleStartClick() {
            
            setStartDisabled(true);
            setId(
                setInterval(() => {
                 
                  setSeconds((prevSeconds) => {
                    if (prevSeconds === 59) {
                      setMinutes((prevMinutes) => {
                        if (prevMinutes === 59) {
                          setHours((prevHours) => prevHours + 1);
                          return 0;
                        }
                        return prevMinutes + 1
                      })
                      return 0;
                    } else {
                      return prevSeconds + 1
                    }
                  });
                  }, 1000));
               

           
            
  
        }

      
        
        function handleStopClick() {
            clearInterval(id);
            setStartDisabled(false);
          
            
        }

        function reset() {
            setSeconds(0)
            setMinutes(0)
            setHours(0)
        }

    return(
    <div>
    <h1> {hours}:{minutes}:{seconds} </h1>
    <button name="1" onClick={handleStartClick} disabled={startDisabled}> Start </button>
    <button name="2" onClick={handleStopClick} disabled={!startDisabled}> Stop </button>
    <button onClick={reset}>Reset</button>
    </div>
)}

export default Timer;