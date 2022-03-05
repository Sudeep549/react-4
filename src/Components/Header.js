import React, {Component} from "react";
import "./Style/style.css";
import { Link } from "react-router-dom";

export class Header extends Component{

    constructor(props){
        super(props);
        this.state = {};
    };

    render(){
        return (
            <div className="header">
                <Link to="/home" className="header_span home_">Home</Link>
                <Link to="/students" className="header_span student_">Students</Link>
                <Link to="/contact" className="header_span contact_">Contact Us</Link>
            </div>
        );
    };

};

