import {
    LitElement,
    html,
    css
} from 'lit-element';
import katex from 'katex/dist/katex.mjs';

export default class KatexElement extends LitElement {

    static get properties() {
        return {
            displayMode: { type: Boolean },
            exp: {type: String}
        };
    }

    constructor()
    {
        super();
        this.displayMode = false;
        this.exp = '';
    }

    createRenderRoot() {
        return this;//.attachShadow({mode: 'open'});
    }

    firstUpdated() {
        let elContainer = this.querySelector('#container');
        katex.render(this.exp, elContainer, {
            displayMode: this.displayMode,
            throwOnError: false
        });
    }

    render() {
        return html`
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css" integrity="sha384-dbVIfZGuN1Yq7/1Ocstc1lUEm+AT+/rCkibIcC/OmWo5f0EA48Vf8CytHzGrSwbQ" crossorigin="anonymous">

        <div id="container">
        </div>
    `;
    }
}

window.customElements.define('katex-element', KatexElement);
