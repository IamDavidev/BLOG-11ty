class NavbarApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{

    }
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${NavbarApp.styles}</style>
 <div class='container'>
     <div class='renderNavbar'></div>
        <slot></slot>
</div>
    `;
    }
}

module.export = customElements.define('navbar-app', NavbarApp);