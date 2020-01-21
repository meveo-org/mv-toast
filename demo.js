import { LitElement, html, css } from "lit-element";
import "./mv-toast.js";

export class MvToastDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },
      hue: { type: Number, attribute: false, reflect: false },
      saturation: { type: Number, attribute: false, reflect: false },
      lightness: { type: Number, attribute: false, reflect: false }
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
      
      .slidecontainer {
        width: 500px;
      }
      
      .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
      }
      
      .slider:hover {
        opacity: 1;
      }
      
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
      }
      
      .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
      }
      
      .theme {
        margin: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.hue = 153;
    this.saturation = 53;
    this.lightness = 56;
  }

  render() {
    const color = `--mv-toast-background-color: hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%);`;
    return html`
    <section>
      <mv-toast type="success" .closeable="${false}">
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
    <div class="theme">
      <h3>Customize theme with HSL colors</h3>
      Hue: ${this.hue}
      <div class="slidecontainer">
        <input type="range" min="1" max="360" value="${this.hue}" class="slider" @input="${this.changeHue}">
      </div>
      Saturation: ${this.saturation}%
      <div class="slidecontainer">
        <input type="range" min="1" max="100" value="${this.saturation}" class="slider" @input="${this.changeSaturation}">
      </div>
      Lightness: ${this.lightness}%
      <div class="slidecontainer">
        <input type="range" min="1" max="100" value="${this.lightness}" class="slider" @input="${this.changeLightness}">
      </div>
      <mv-toast .closeable="${false}" style="${color}">
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
    </div>    
    `;
  }

  changeHue = event => {
    this.hue = event.currentTarget.value;
  };

  changeSaturation = event => {
    this.saturation = event.currentTarget.value;
  };

  changeLightness = event => {
    this.lightness = event.currentTarget.value;
  };
}

customElements.define("mv-toast-demo", MvToastDemo);
