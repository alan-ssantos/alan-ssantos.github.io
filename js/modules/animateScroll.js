export default class AnimateScroll {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
  }

  animate() {
    console.log('oi');
    this.halfWindowHeight = window.innerHeight * 0.6;

    this.sections.forEach((section) => {
      const distFromTop = section.getBoundingClientRect().top;
      const isSectionVisible = (distFromTop - this.halfWindowHeight) < 0;

      if (isSectionVisible) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  addEvents() {
    window.addEventListener('scroll', this.animate, { passive: true });
  }

  bind() {
    this.animate = this.animate.bind(this);
  }

  init() {
    if (this.sections.length > 0) {
      this.bind();
      this.addEvents();
      this.animate();
    }
  }
}
