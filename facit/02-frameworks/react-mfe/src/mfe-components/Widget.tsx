import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import Page from "./Page";

const style = {
  backgroundColor: "#ace6c7",
  border: "solid #829dae 1px",
  borderRadius: "10px",
  padding: "10px 20px",
  width: "fit-content"
}

const Widget: React.FC = ({}) => {
  return (
  <div style={style}>En liten widget från React Micro FE</div>
  )
}

// Custom Element
export class WidgetElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    render(<Widget />, this);
  }

  disconnectedCallback() {
    unmountComponentAtNode(this);
  }
}


export default Widget

