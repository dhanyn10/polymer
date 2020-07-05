import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `opt-1`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Opt1 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'opt-1',
      },
    };
  }
}

window.customElements.define('opt-1', Opt1);
