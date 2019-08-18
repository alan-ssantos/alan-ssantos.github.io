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
  }

  addEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addEvents();
    return this;
  }
}
