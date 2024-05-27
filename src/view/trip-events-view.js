<<<<<<< HEAD
import AbstractView from '../framework/view/abstract-view.js';
=======

import { createElement } from '../render.js';

>>>>>>> origin

const createTripEventsTemplate = () => (
  `<ul class="trip-events__list">
  </ul>`
);

<<<<<<< HEAD
export default class TripEventsView extends AbstractView {

  get template() {
    return createTripEventsTemplate();
=======
export default class TripEventsView {
  getTemplate() {
    return createTripEventsTemplate;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;

>>>>>>> origin
  }
}
