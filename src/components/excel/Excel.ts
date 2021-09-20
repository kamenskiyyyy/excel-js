export class Excel {
  private $el: HTMLElement;
  private components: Array<any> = [];

  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components
  }
}
