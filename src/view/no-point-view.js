import { NoPointsTextType } from '../mock/const.js';
import AbstractView from '../framework/view/abstract-view';


function createNoPointViewTemplate(isLoading) {
  const noPointTextValue = isLoading ? NoPointsTextType.LOADING : NoPointsTextType.NOPOINTS;

  return `<p class="trip-events__msg">${noPointTextValue}</p>`;
}

export default class NoPointView extends AbstractView {
  #isLoading = false;

  constructor(isLoading) {
    super();
    this.#isLoading = isLoading;
  }

  get template() {
    return createNoPointViewTemplate(this.#isLoading);
  }
}
