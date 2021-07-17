import { Component } from "react";
import { NavLink } from "react-router-dom";


class DisplayData extends Component{

    render(){
        return(
            <div>
                    
                    <div><NavLink to="/">Home</NavLink></div>
                    <div><NavLink to="/display">Display</NavLink></div>
                    <div><NavLink to="/performance">Performance</NavLink></div>
                    <h1>You are in Display Page</h1>
                </div>

            
    
        );

    }

}

export default DisplayData;