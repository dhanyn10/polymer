import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class TestPolymerApp extends PolymerElement {
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
        value: 'test-polymer-app'
      }
    };
  }
}

window.customElements.define('test-polymer-app', TestPolymerApp);
