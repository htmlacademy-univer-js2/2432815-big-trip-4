import { render } from './render.js';
<<<<<<< HEAD
import TripPresenter from './presenter/board-presenter.js';
import FilterView from './view/filter-view.js';
import PointsModel from './model/points-model.js';
import { generateFilter } from './mock/filter.js';
=======
import TripPresenter from './presenter/presenter.js';
import FilterView from './view/filter-view.js';
import PointsModel from './model/points-model.js';

>>>>>>> origin

const siteMainElement = document.querySelector('.page-main');
const siteHeaderElement = document.querySelector('.trip-main');

<<<<<<< HEAD
const pointModel = new PointsModel();
const tripPresenter = new TripPresenter(siteMainElement.querySelector('.trip-events'), pointModel);

const filters = generateFilter(pointModel.point);

render(new FilterView(filters), siteHeaderElement.querySelector('.trip-controls__filters'));

tripPresenter.init();
=======

const tripPresenter = new TripPresenter(siteMainElement.querySelector('.trip-events'));
const pointModel = new PointsModel();

render(new FilterView(), siteHeaderElement.querySelector('.trip-controls__filters'));

tripPresenter.init(siteMainElement.querySelector('.trip-events'), pointModel);

>>>>>>> origin
