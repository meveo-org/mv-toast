import { LitElement, html, css } from "lit-element";
import "./mv-toast.js";

export class MvToastDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      section {
        display: grid;
        grid-template-columns: auto 1fr 1fr auto;
      }
  
      mv-toast {
        margin: 0 5px;
      }
    `;
  }

  render() {
    return html`
    <section>
      <mv-toast type="information">
        <h3>Label</h3>
        <pre>{
  "value 1": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
  "value 2": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
  "value 3": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
  "value 4": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
  "value 5": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
  "value 6": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
  "value 7": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
  "value 8": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
  "value 9": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum."
}</pre>
      </mv-toast>

      <mv-toast type="error">
        Nunc a nisl eget dolor consequat bibendum non id odio. Suspendisse laoreet hendrerit dignissim. Etiam condimentum
        vestibulum neque sit amet tristique. Sed sit amet convallis tortor, sed lacinia mi. Vivamus malesuada semper ante,
        non commodo quam auctor id. Duis vel neque ultricies, volutpat justo ac, posuere mauris. In fermentum sem vitae
        augue pellentesque porta in in erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Fusce id dolor accumsan, feugiat tellus eget, placerat tortor. Donec ullamcorper nisi et dui
        commodo
      </mv-toast>
    </section>    
    `;
  }
}

customElements.define("mv-toast-demo", MvToastDemo);
