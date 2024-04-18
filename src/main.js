
import FilterView from './view/filter-view.js';
import BoardView from './view/board-view.js';
import SortView from './view/sort-view.js';
import TaskEditView from './view/task-edit-view.js';
import TaskListView from './view/task-list-view.js';
import TaskView from './view/task-view.js';
import {render} from './render.js';

const siteMainElement = document.querySelector('.main');
const filterElement = document.querySelector('.trip-controls__filters');
const sortElement = document.querySelector('.trip-events');


render(new FilterView(), filterElement);
render(new BoardView(), siteMainElement);
render(new SortView(), sortElement);
render(new TaskEditView(), siteMainElement);
render(new TaskListView(), siteMainElement);
render(new TaskView(), siteMainElement);
