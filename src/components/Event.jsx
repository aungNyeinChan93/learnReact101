import { Fragment } from "react";
import "../components/Event.css"


function Event({title}){
    const alertFunction = function (e) {
        const greeting = "hello world"
        alert(greeting )
        console.log(e.target.innerHTML);
    };
    function paramFunction (item){
        alert(item)
        console.log(`this is  ${item}`);
    }
    return(
        <Fragment>
            <h1 className="event-title">{title}</h1>
            <div className="event-btn">
                <button className="event-btn" onClick={ alertFunction }>Click me</button>
                
                {/* callback function used when the data including conditional */}
                <button className="event-btn" onClick={ ()=> paramFunction(title)}>Click me</button>
            </div>
        </Fragment>
    )
};

export default Event;