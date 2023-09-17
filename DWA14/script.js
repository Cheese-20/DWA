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

      constructor (){
        super();
        this.number = 0;
      };

    render() {
        return html `
    <input
        class="counter__value"
        data-key="number"
        readonly
        .value="${this.number}" />
    <div class="counter__actions">
        <button
          class="counter__button counter__button_first"
          data-key="subtract"
          @click="${this.subtractHandler}"
          ?disabled="${this.number <= MIN_NUM}">
          -
        </button>
        <button
          class="counter__button"
          data-key="add"
          @click="${this.addHandler}"
          ?disabled="${this.number >= MAX_NUM}">
          +
        </button>
    </div>`
    }
}

customElements.define("counter-app", CounterSet);