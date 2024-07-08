import React, {useState} from "react";

const TrafficLight = () => {

    let [color, setColor] = useState("");
    
    function changeColor(event){
        setColor(event.target.name);
    }
    
    return (
        <div className="d-flex flex-column">
            <imput type="button" onClick={changeColor} name="red" 
            className={`${color === 'red' ? 'shadow': 'opacity-75'} rounded-circle bg-danger m-2`} 
            style={{height: "100px", width: "100px"}}>
            </imput>
            <imput type="button" onClick={changeColor} name="yellow" 
            className={`${color === 'yellow' ? 'shadow': 'opacity-75'} rounded-circle bg-warning m-2`} 
            style={{height: "100px", width: "100px"}}>
            </imput>
            <imput type="button" onClick={changeColor} name="green" 
            className={`${color === 'green' ? 'shadow': 'opacity-75'} rounded-circle bg-success m-2`} 
            style={{height: "100px", width: "100px"}}>
            </imput>
        </div>
    );
    };

    export default TrafficLight;