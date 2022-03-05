import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import "./Style/style.css";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passedProps: props,
    };
  }

  render() {
    return (
      <>
        {this.state.passedProps.data.length > 0 &&
          this.state.passedProps.data.map((ele) => {
            return (
              <>
                <div id="hr_line"></div>
                <div className="row_color">
                  <div className="name row_color_2">{ele.name}</div>
                  <div className="age row_color_2">{ele.age}</div>
                  <div className="course row_color_2">{ele.course}</div>
                  <div className="batch row_color_2">{ele.batch}</div>
                  <div className="change "></div>
                </div>
                <Outlet />
              </>
            );
          })}
      </>
    );
  }
}

export default Info;
