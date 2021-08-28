export class Component {
  state;
  props;
  $el;

  constructor($el, props) {
    this.$el = $el;
    this.props = props;
    this.setup();
    this.setEvent();
    this.fetchData();
    this.render();
  }
  setup() {}
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
  fetchData() {}
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
