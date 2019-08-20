import Slide from './slide.js';

export default class SlideNav extends Slide {
  addArrow(prev, next) {
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.addArrowEvents();
  }

  addArrowEvents() {
    this.prev.addEventListener('click', this.prevSlide);
    this.next.addEventListener('click', this.nextSlide);
  }
}
