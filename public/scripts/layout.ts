"use strict";

class Navbar {
    private menuToggle: HTMLElement | null;
    private menu: HTMLElement | null;

    constructor() {
        this.menuToggle = document.querySelector('.menu-toggle');
        this.menu = document.querySelector('.menu');

        if (this.menuToggle && this.menu) {
            this.menuToggle.addEventListener('click', () => {
                this.menu!.classList.toggle('active');
                this.menuToggle!.classList.toggle('active');

         
                const expanded = this.menu!.classList.contains('active');
                this.menuToggle!.setAttribute('aria-expanded', String(expanded));
                this.menu!.setAttribute('aria-hidden', String(!expanded));
            });
        }

        if (this.menuToggle) {
            this.menuToggle.setAttribute('aria-expanded', 'false');
        }
        if (this.menu) {
            this.menu.setAttribute('aria-hidden', 'true');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Navbar();
});
