import { FilterType } from '../mock/const';
import { isFuturedPoint, isPresentedPoint, isPastedPoint } from './point';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isFuturedPoint(point)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPresentedPoint(point)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastedPoint(point)),
};

export { filter };

