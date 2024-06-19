import { UpdateType } from '../mock/const';
import Observable from '../framework/observable';
import { adaptToClient } from '../utils/adapt';
import { updateItem } from '../utils/common';
import { sortByDay } from '../utils/point';

export default class PointModel extends Observable {
  #points = [];
  #pointApiService = null;
  #isSuccessfulLoading = false;

  constructor(pointApiService) {
    super();
    this.#pointApiService = pointApiService;
    this.#points = [];
  }

  init = async () => {
    try {
      const points = await this.#pointApiService.points;
      this.#points = points.map(adaptToClient);
      this.#isSuccessfulLoading = true;
    } catch (err) {
      this.#points = [];
      this.#isSuccessfulLoading = false;
    }

    this._notify(UpdateType.INIT);
  };

  get points() {
    return this.#points.sort(sortByDay);
  }

  get isSuccessfulLoading() {
    return this.#isSuccessfulLoading;
  }

  async updatePoint(updateType, update) {
    try {
      const response = await this.#pointApiService.updatePoint(update);
      const updatePoint = adaptToClient(response);
      this.#points = updateItem(this.#points, updatePoint);
      this._notify(updateType, updatePoint);
    } catch (err) {
      throw new Error('Can\'t update task');
    }
  }

  async addPoint(updateType, update) {
    try {
      const response = await this.#pointApiService.addPoint(update);
      const newPoint = adaptToClient(response);
      this.#points.push(newPoint);
      this._notify(updateType, newPoint);
    } catch (err) {
      throw new Error('Can\'t add point');
    }
  }

  async deletePoint(updateType, update) {
    try {
      await this.#pointApiService.deletePoint(update);
      this.#points = this.#points.filter((point) => point.id !== update.id);
      this._notify(updateType);
    } catch (err) {
      throw new Error('Can\'t delete point');
    }
  }
}
