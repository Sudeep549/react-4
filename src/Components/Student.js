import React, { Component } from "react";
import Details from "./Info";
import "./Style/style.css";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Age: "",
      Course: "",
      Batch: "",
      Id: "",
      arrayOfStudents: [
        {
          name: "Pruthvi",
          age: "21",
          course: "MERN",
          batch: "October",
          id: "1",
        },
        {
          name: "Nithin",
          age: "25",
          course: "MERN",
          batch: "September",
          id: "2",
        },
        {
          name: "Shashank",
          age: "21",
          course: "MERN",
          batch: "November",
          id: "3",
        },
        {
          name: "Sudeep",
          age: "23",
          course: "MERN",
          batch: "December",
          id: "4",
        },
        {
          name: "Sujan",
          age: "23",
          course: "MERN",
          batch: "October",
          id: "5",
        },
        {
          name: "Sourabh",
          age: "22",
          course: "MERN",
          batch: "November",
          id: "6",
        },
      ],
    };
  }

  render() {
    return (
      <div id="students_container">
        <p className="head">Students Detail</p>
        <Details data={this.state.arrayOfStudents} />
      </div>
    );
  }
}

export default Students;
