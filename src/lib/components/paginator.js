import config from '$lib/config.js';
let { size } = config.paginator;

if (size % 2 == 0) {
  size++; // must be odd
}

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
    return this.pages > size;
  }

  *items() {
    const seek = (size - 1) >>> 1
    let min = Math.max(1, this.actual - seek);
    let max = Math.min(this.pages, this.actual + seek);

    let diff
    if ((diff = max - this.actual) < seek) {
      // We are at the end of the pager, there's no more items at the end
      min -=  seek - diff
    } else if ((diff = this.actual - min) < seek) {
      // We are at the start of the pager, there's no more items at the end
      max +=  seek - diff
    }

    for (var i = min; i <= max; i++) {
        yield i;
    }
  }

  normalize(page) {
    if (this._maxDigits) {
      let s = page.toString()
      return s.padStart(this._maxDigits, '0');
    }

    let digits = 0;
    for (let rest = this.pages; rest > 0; rest = ~~(rest / 10)) {
      digits++;
    }
    this._maxDigits = digits;
    console.log(this._maxDigits);
    return this.normalize(page)
  }
}
