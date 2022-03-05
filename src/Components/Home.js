import React, {Component} from "react";
import "./Style/style.css";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {};
    };
    render(){
        return(
            <div id="home">
                Welcome to Home Page
            </div>
        );
    };
};

export default Home;