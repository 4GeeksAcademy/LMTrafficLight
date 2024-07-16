import React, {useState} from "react";

const TrafficLight = () => {

    let [color, setColor] = useState("");
    
    function changeColor(event){
        setColor(event.target.name);
    }
    
    return (
        <div className="d-flex flex-column">
            <input type="button" onClick={changeColor} name="red" 
            className={`${color === 'red' ? 'shadow': 'opacity-50'} rounded-circle bg-danger m-2`} 
            style={{height: "100px", width: "100px"}}>
            </input>
            <input type="button" onClick={changeColor} name="yellow" 
            className={`${color === 'yellow' ? 'shadow': 'opacity-50'} rounded-circle bg-warning m-2`} 
            style={{height: "100px", width: "100px"}}>
            </input>
            <input type="button" onClick={changeColor} name="green" 
            className={`${color === 'green' ? 'shadow': 'opacity-50'} rounded-circle bg-success m-2`} 
            style={{height: "100px", width: "100px"}}>
            </input>
        </div>
    );
    };

    export default TrafficLight;