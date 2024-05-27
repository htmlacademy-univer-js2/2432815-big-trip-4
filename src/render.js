export const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};
<<<<<<< HEAD

export const render = (component, container, place = RenderPosition.BEFOREEND) => {
  container.insertAdjacentElement(place, component.element);
=======

export const render = (component, container, place = RenderPosition.BEFOREEND) => {

  container.insertAdjacentElement(place, component.getElement());

>>>>>>> origin
};
