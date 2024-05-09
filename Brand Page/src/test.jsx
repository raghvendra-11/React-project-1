
import { useState } from "react";
import ReactDOM  from "react-dom/client";

export default function Test(){
    const [car,setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"Red"
    })
    
    const updateColor = () => {
        setCar(previousState => {
            return {
                ...previousState, color:"Blue"
            }
        });
    } 

    return (
    <>
    <h1>This is {car.brand}</h1>
    <p>It is {car.color} {car.model} from {car.year}</p>
    <button type="button" onClick={updateColor}>
        Blue
    </button>
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Test />)

