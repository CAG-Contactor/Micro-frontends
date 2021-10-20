import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';

const style = {
  backgroundColor: "#ace6c7",
  border: "solid #829dae 1px"
}

const Page: React.FC = ({}) => {
  return (
  <div style={style}>Detta är React Micro FE:s huvudsida</div>
  )
}

// Custom Element
export class PageElement extends HTMLElement {
  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({mode: "open"});
  }

  connectedCallback() {
    render(<Page />, this.shadow);
  }

  disconnectedCallback() {
    unmountComponentAtNode(this);
  }
}

export default Page

