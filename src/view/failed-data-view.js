import AbstractView from '../framework/view/abstract-view.js';

const createFailedDataLoadTemplate = () => (
  `<p class="trip-events__msg">
  Failed to load latest route information
  </p>`);

export default class FailedDataLoadView extends AbstractView {
  get template() {
    return createFailedDataLoadTemplate();
  }
}
