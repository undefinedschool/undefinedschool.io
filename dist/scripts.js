const expandButtons = document.querySelectorAll('.expand');

expandButtons.forEach(btn =>
  btn.addEventListener('click', () => {
    const list = btn.parentNode.nextSibling.nextSibling;
    const icon = btn.children[0].classList;
    const text = btn.previousElementSibling.children[0].classList;

    icon.toggle('fa-plus');
    icon.toggle('fa-minus');
    text.toggle('cyan-100');

    list.classList.toggle('hidden');
  })
);
