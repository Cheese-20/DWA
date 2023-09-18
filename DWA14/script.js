//@ts-check

import {
    LitElement,
    html,
    css,
  } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

const MAX_NUM = 10;
const MIN_NUM = -10;
const STEP_AMOUNT = 1;

class CounterSet extends LitElement{
  // defining the properties
    static get properties () {
        return {number: { type: Number }}
      };

    
      subtractHandler() {
        this.number -= STEP_AMOUNT;
        this.requestUpdate();
      };
    
      addHandler() {
        this.number += STEP_AMOUNT;
        this.requestUpdate();
      };
      // initializing the state
      constructor (){
        super();
        this.number = 0;
      };

      // creating the template for the html
    render() {
        return html `
    <input
       
        data-key="number"
        readonly
        .value="${this.number}" />
    <div >
        <button
          data-key="subtract"
          @click="${this.subtractHandler}"
          ?disabled="${this.number <= MIN_NUM}">
          -
        </button>
        <button
          data-key="add"
          @click="${this.addHandler}"
          ?disabled="${this.number >= MAX_NUM}">
          +
        </button>
    </div>`
    }
};

customElements.define("counter-app", CounterSet);