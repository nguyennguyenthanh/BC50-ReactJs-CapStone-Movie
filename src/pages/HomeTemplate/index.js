import React, { Component } from 'react'
import {Outlet} from "react-router-dom";
export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <Outlet/>
      </div>
    )
  }
}
