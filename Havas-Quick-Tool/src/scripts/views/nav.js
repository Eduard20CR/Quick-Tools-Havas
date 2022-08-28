import { gsap } from "gsap";

class Nav {
  _parentElement = document.querySelector(".extensionContainer__nav");

  defaultAnchorColor = `#dee2e6`;

  constructor() {}

  loadTabOnInit() {
    this.firstElement = this._parentElement.querySelector(
      ".extensionContainer__navAnchor--1"
    );
    gsap.set(this.firstElement, {
      background: `linear-gradient(-45deg, ${this.firstElement.dataset.color1}, ${this.firstElement.dataset.color2})`,
    });
  }

  addColorToTab(event) {
    const color = `linear-gradient(-45deg, ${event.target.dataset.color1}, ${event.target.dataset.color2})`;

    gsap.to(event.target, {
      duration: 0.3,
      background: color,
    });
  }

  removeColorToTab(event) {
    if (event.target.classList.contains("active")) return;
    gsap.to(event.target, {
      duration: 0.3,
      background: this.defaultAnchorColor,
    });
  }

  removeColorToElement(el) {
    gsap.to(el, {
      duration: 0.3,
      background: this.defaultAnchorColor,
    });
  }

  changeTab(event) {
    if (event.target.classList.contains("active")) return;

    const childElements = this._parentElement.querySelectorAll(
      ".extensionContainer__navAnchor"
    );

    childElements.forEach((el) => {
      el.classList.remove("active");
      if (event.target !== el) this.removeColorToElement(el);
    });

    event.target.classList.add("active");
    this.addColorToTab(event);
  }

  handlerSwitchTab(callback) {
    this._parentElement.addEventListener("click", (e) => {
      e.preventDefault();
      this.changeTab(e);
      callback(e);
    });
    this.handlerHoverEffects();
  }

  handlerHoverEffects() {
    this._parentElement
      .querySelectorAll(".extensionContainer__navAnchor")
      .forEach((e) => {
        e.addEventListener("mouseenter", (e) => {
          e.preventDefault();
          this.addColorToTab(e);
        });
      });

    this._parentElement
      .querySelectorAll(".extensionContainer__navAnchor")
      .forEach((e) => {
        e.addEventListener("mouseleave", (e) => {
          e.preventDefault();
          this.removeColorToTab(e);
        });
      });
  }
}

const navModule = new Nav();
export { navModule };
