document.addEventListener('DOMContentLoaded', () => {

     // menu

  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.menu')
  const menuClose = document.querySelector('.menu__close')
  const menuLinks = document.querySelectorAll('.menu__link')

  burger.addEventListener('click', () => {
    menu.classList.add('menu--active')
  })
  menuClose.addEventListener('click', () => {
    menu.classList.remove('menu--active')
  })
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('menu--active')
    })
  })

    // Range
    const range = document.querySelector("#range");

    range.addEventListener("input", () => {

        const min = range.min;
        const max = range.max;
        const currentVal = range.value + '%';

        range.style.backgroundSize = ((currentVal - min) / (max - min)) * 100 + "%";
    })

    // Dropdown
    const dropdown = document.querySelector('[data-dropdown]');
    const dropdownTrigger = dropdown.querySelector('[data-dropdown-trigger]');
    const items = dropdown.querySelectorAll('[data-dropdown-item]');
    const input = dropdown.querySelector('[data-dropdown-input]');
    const event = new Event("input");

    dropdownTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        dropdown.classList.toggle('registration__form-dropdown--active');
    })

    items.forEach(item => {
        item.addEventListener('click', () => {
            input.value = item.textContent;
            input.dispatchEvent(event);
            dropdown.classList.remove('registration__form-dropdown--active');
        })
    })


})
