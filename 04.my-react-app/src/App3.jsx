import React from "react";
import FatherNChild from "./components/03.NestedComponent/FatherNChild";
import MyContextTest from "./components/03.NestedComponent/Context/MyContextTest";

import './components/components.css'

export default class App3 extends React.Component{
  render(){
    return (
      <>
        <h3>3.Nested Components:</h3>
        <FatherNChild />
        <MyContextTest/>
        <br />
      </>
    )
  }
}

