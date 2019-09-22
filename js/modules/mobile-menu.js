import outsideClick from './outside-click.js';

export default class MobileMenu {
  constructor(menu, mobileButton, menuList, events) {
    this.menu = document.querySelector(menu);
    this.mobileButton = document.querySelector(mobileButton);
    this.menuList = document.querySelector(menuList);

    if (events === undefined) {
      this.events = ['click', 'touchstart'];
    }

    this.open = this.open.bind(this);
  }

  open(event) {
    event.preventDefault();
    this.menu.classList.add('active');
    this.mobileButton.classList.add('active');
    this.menuList.classList.add('active');
    outsideClick(this.menuList, this.events, () => {
      this.menu.classList.remove('active');
      this.mobileButton.classList.remove('active');
      this.menuList.classList.remove('active');
    });
  }

  addMenuEvents() {
    this.events.forEach((e) => {
      this.mobileButton.addEventListener(e, this.open, { passive: true });
    });
  }

  init() {
    if (this.mobileButton && this.menuList) this.addMenuEvents();
  }
}
