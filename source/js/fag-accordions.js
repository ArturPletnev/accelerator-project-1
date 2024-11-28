const initFagAccordions = () => {
  const accordionButtonNodes = document.querySelectorAll('.fag-accordion__item-button');
  const accordionContentNodes = document.querySelectorAll('.fag-accordion__item p');
  const toggleAccordion = (event) => {
    const button = event.currentTarget;
    const paragraph = button.nextElementSibling;
    button.classList.toggle('fag-accordion__item-button--active');
    accordionContentNodes.forEach((accordionContentNode) => accordionContentNode.setAttribute('aria-hidden', 'true'));
    if (button.classList.contains('fag-accordion__item-button--active')) {
      paragraph.setAttribute('aria-hidden', 'false');
    }
  };
  accordionButtonNodes[0].classList.add('fag-accordion__item-button--active');
  accordionButtonNodes.forEach((accordionButtonNode) => accordionButtonNode.addEventListener('click', toggleAccordion));
};

export { initFagAccordions };
