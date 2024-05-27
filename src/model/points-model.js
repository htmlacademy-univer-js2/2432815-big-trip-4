<<<<<<< HEAD
import { createPoint } from '../mock/point';

export default class pointsModel {

  #point = Array.from({ length: 10 }, createPoint);

  get point() {
    return this.#point;
  }
=======
import { createPoint } from '../mock/task';

export default class pointsModel {

  constructor() {
    this.point = Array.from({ length: 10 }, createPoint);
  }

  getPoint() { return this.point; }

>>>>>>> origin
}
