import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TimeRangeSlider from 'react-time-range-slider';
const TimeFilter = ({start, end, handleFlightTime, destination}) => {
    // console.log("SELECTE", destination);
    const[params] = useSearchParams();
    const [stime, setTime] = useState({
        value: {
            start: "0:00",
            end: "23:59"
        }
    });

    useEffect((e) => {
        console.log('start', params.get('start'));
        if(params.get('start')){
            setTime({
                value: {
                    start: params.get('start'),
                    end: params.get('end')
                }
            });
        }
       
    },[]);

    function changeStartHandler(time){
        // console.log("Start Handler Called", time);
    }

    function timeChangeHandler(time){
        // console.log("Time Handle", time);
        // handleFlightTime(time);
        setTime({
            value: time
        });
    }

    function changeCompleteHandler(time){
        handleFlightTime(time);
        console.log("Complete Handler Called", time);
    }

    return (
      <div className="cm-filter-widget cm-stops-filter">
      <h4>Flight Times</h4>
      <ul className="cm-menu-ul">
        <div>
        <div>Goint To {destination.locationArrival}</div>
        <div><span>Start Time: </span>{stime.value.start}</div>
        <div><span>End Time: </span>{stime.value.end}</div>
        <TimeRangeSlider  
            disabled={false}
            maxValue={"23:59"}  
            minValue={"00:00"} 
            name={"time_range"}
            onChangeStart={changeStartHandler}
            onChange={timeChangeHandler}
            onChangeComplete={changeCompleteHandler}
            format={24}
            step={15}
            value={stime.value}
            />
        </div>
      </ul>
    </div>
    )
}

export default TimeFilter