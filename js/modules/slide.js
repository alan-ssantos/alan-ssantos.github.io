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

  onDown(event) {
    event.preventDefault();
    this.dist.startX = event.clientX;
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  onMove(event) {
    const finalPosition = this.updatePosition(event.clientX);
    this.moveSlide(finalPosition);
  }

  onUp() {
    this.dist.finalX = this.dist.finalMovement;
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  addEvents() {
    this.wrapper.addEventListener('mousedown', this.onDown);
    this.wrapper.addEventListener('mouseup', this.onUp);
  }

  bindEvents() {
    this.onDown = this.onDown.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onUp = this.onUp.bind(this);
  }

  init() {
    this.bindEvents();
    this.addEvents();
    return this;
  }
}
