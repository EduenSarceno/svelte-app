import config from '$lib/config.js';
const { seek } = config.paginator;

export class Paginator {
  constructor(data, entity) {
    if (!data || !entity) {
      throw new TypeError();
    }
    let object = data[entity];
    this.pages = object.pages;
    this.length = object.length;
    this.actual = 1;
  }

  get first() {
    return 1;
  }

  get last() {
    return this.pages;
  }

  get prev() {
    let prev = Math.max(1, this.actual - 1);
    return prev;
  }

  get next() {
    let next = Math.min(this.pages, this.actual + 1)
    return next;
  }

  get withControls() {
    return (2 * seek + 1) < this.pages;
  }

  *items() {
    let min = Math.max(1, this.actual - seek);
    let max = Math.min(this.pages, this.actual + seek);

    for (var i = min; i <= max; i++) {
        yield i;
    }
  }
}
