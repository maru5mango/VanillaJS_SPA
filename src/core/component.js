import { observable, observe } from "./observer.js";

export class Component {
  state;
  props;
  $el;
  $store;

  constructor($el, props) {
    this.$el = $el;
    this.props = props;
    this.setup();
    this.useStore();
    this.setEvent();
    this.render();
  }
  setup() {}
  useStore() {
    this.$store = observable(this.initState());
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    });
  }
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  initState() {
    return {};
  }
  template() {
    return "";
  }
  render() {
    this.$el.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {}
  mounted() {}
  addEvent(eventType, selector, callback) {
    const children = [...this.$el.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    this.$el.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
