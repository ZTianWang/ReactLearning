import React from "react";
import StateHook from "./components/02.Hooks/StateHook";
import EffectHook from "./components/02.Hooks/EffectHook";

import './components/components.css'
import RefHook from "./components/02.Hooks/RefHook";
import MemoHook from "./components/02.Hooks/MemoHook";

export default class App2 extends React.Component{
  render(){
    return (
      <>
        <h3>2.Hooks:</h3>
        <StateHook/>
        <EffectHook />
        <RefHook/>
        <MemoHook/>
        <br />
      </>
    )
  }
}

