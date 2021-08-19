import { Component } from "./core/component.js";

import Header from "./component/common/header.js";
import Footer from "./component/common/footer.js";

class App extends Component {
  template() {
    return `
      <header id="header"></header>
      <main id="content"></main>
      <footer id="footer"></footer>
      `;
  }
  mounted() {
    const $header = this.$el.querySelector("#header");
    const $footer = this.$el.querySelector("#footer");
    new Header($header, {});
    new Footer($footer, {});
  }
}

new App(document.querySelector("#root"));
