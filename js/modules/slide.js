import debounce from './debounce.js';

export default class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.querySelector(wrapper);
    this.slide = document.querySelector(slide);
    this.dist = {
      finalX: 0,
      startX: 0,
      moveX: 0,
      movement: 0,
    };
  }

  moveSlide(x) {
    this.dist.finalMovement = x;
    this.slide.style.transform = `translate3d(${x}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalX - this.dist.movement;
  }

  onStart(event) {
    let eventType;
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.dist.startX = event.clientX;
      eventType = 'mousemove';
    } else {
      eventType = 'touchmove';
      this.dist.startX = event.changedTouches[0].clientX;
    }
    this.transition(false);
    this.wrapper.addEventListener(eventType, this.onMove);
  }

  onMove(event) {
    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const eventType = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
    this.dist.finalX = this.dist.finalMovement;
    this.wrapper.removeEventListener(eventType, this.onMove);
    this.transition(true);
    this.changeOnEnd();
  }

  changeOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.nextSlide();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.prevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return { element, position };
    });
  }

  slideIndex(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.slideIndex(index);
    this.dist.finalX = activeSlide.position;
    this.moveSlide(activeSlide.position);
  }

  nextSlide() {
    if (this.index.next !== undefined) this.changeSlide(this.index.next);
  }

  prevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);
  }

  transition(active) {
    if (active) {
      this.slide.style.transition = 'transform .3s';
    } else {
      this.slide.style.transition = '';
    }
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 500);
  }

  addEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);

    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  init() {
    this.bindEvents();
    this.transition(false);
    this.addEvents();
    this.slidesConfig();
    this.addResizeEvent();
    this.changeSlide(0);
    return this;
  }
}
