exports.data = {
    title: "My Rad Blog"
};

class AboutApp extends HTMLElement {

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
    data() {
        return {
            name: 'About',
            description: 'This is the about page',
            permalink: '/about'
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${AboutApp.styles}</style>
 <div class='container'>
     <div class='renderabout'></div>
        <slot></slot>
</div>
    `;
    }
}
exports.render = customElements.define('aboutapp', AboutApp);