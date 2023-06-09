import {LitElement, css, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('counter-element')
export class CounterElement extends LitElement {
    /**
     * Copy for the read the docs hint.
     */
    @property()
    docsHint = 'Use the button to increment the counter.'

    /**
     * The number of times the button has been clicked.
     */
    @property({type: Number})
    count = 0

    @property()
    span = false

    render() {
        return html`
            <span class="logo"></span>
            ${this.span ? html`
                <div class="bg-red-400">BG Color should change</div>` : html`
                <div>BG Color should change</div>`}
            <button @click=${this._toggleSpan} part="button">
                Change BG Color:: ${this.span ? 'Normal' : 'Red'}
            </button>
            <slot></slot>
            <div class="card">
                <button @click=${this._onClick} part="button" class="text-red-500">
                    count is ${this.count}
                </button>
                <div class="i-ic-baseline-add-circle text-3xl bg-green-500"/>
            </div>
            <p class="cool-blue">${this.docsHint}</p>
            <another-element class="part-[cool-part]:cool-green part-[another-cool-part]:cool-green">Other Element
            </another-element>
        `
    }

    private _onClick() {
        this.count++
    }

    private _toggleSpan() {
        this.span = !this.span
    }

    static styles = css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }

      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }

      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }

      a:hover {
        color: #535bf2;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }

      button:hover {
        border-color: #646cff;
      }

      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }

        button {
          background-color: #f9f9f9;
        }
      }
    @unocss-placeholder
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'counter-element': CounterElement
    }
}
