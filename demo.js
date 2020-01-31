import { LitElement, html, css } from "lit-element";
import "mv-font-awesome";
import "./mv-toast.js";

export class MvToastDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },
      open: { type: Boolean, attribute: true },
      theme: { type: String, attribute: true }
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
        grid-template-columns: auto 1fr 1fr 1fr auto;
      }
  
      mv-toast {
        margin: 0 5px;
      }
      
      mv-fa[icon="lightbulb"] {
        font-size: 50px;
        cursor: pointer;
        margin: 20px;
      }
      
      .theme {
        display: flex;
        justify-content: flex-start;
      }
    `;
  }

  constructor() {
    super();
    this.open = true;
    this.theme = "light";
  }

  render() {
    return html`
    <div class="theme">
      <mv-fa icon="lightbulb" style="color: ${this.open ? "yellow" : ""}" @click=${this.toggleLightBulb}></mv-fa>
    </div>
    <section>
      <mv-toast type="success" .closeable="${false}" .theme="${this.theme}">
        <ul>
          <li>type: <b>success</b></li>
          <li>closeable: <b>false</b></li>
        </ul>
        Nunc a nisl eget dolor consequat bibendum non id odio. Suspendisse laoreet hendrerit dignissim. Etiam condimentum
        vestibulum neque sit amet tristique. Sed sit amet convallis tortor, sed lacinia mi. Vivamus malesuada semper ante,
        non commodo quam auctor id. Duis vel neque ultricies, volutpat justo ac, posuere mauris. In fermentum sem vitae
        augue pellentesque porta in in erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Fusce id dolor accumsan, feugiat tellus eget, placerat tortor. Donec ullamcorper nisi et dui
        commodo
      </mv-toast>
      <mv-toast type="information" .theme="${this.theme}">
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

      <mv-toast type="error" .theme="${this.theme}">
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

  toggleLightBulb = () => {
    this.open = !this.open;
    if (this.open) {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
  };
}

customElements.define("mv-toast-demo", MvToastDemo);
