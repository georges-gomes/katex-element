import { LitElement, html } from 'lit-element';
import katex from 'katex/dist/katex.mjs';

class KatexElement extends LitElement {

  static get properties() {
      return {
          displayMode: { type: Boolean },
      };
  }

  constructor()
  {
      super();
      this.displayMode = false;
  }

  firstUpdated() {
      this.elSlot = this.shadowRoot.querySelector('slot');
      let slotNode = this.elSlot.assignedNodes()[0];
      let slotData = slotNode.data;

      let elContainer = this.shadowRoot.querySelector('#container');
      katex.render(slotData, elContainer, {
          displayMode: this.displayMode,
          throwOnError: false
      });
  }

  render() {
      return html`
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css" integrity="sha384-dbVIfZGuN1Yq7/1Ocstc1lUEm+AT+/rCkibIcC/OmWo5f0EA48Vf8CytHzGrSwbQ" crossorigin="anonymous">

      <div id="container">
          <slot></slot>
      </div>
  `;
  }
}

window.customElements.define('katex-element', KatexElement);

export default KatexElement;
