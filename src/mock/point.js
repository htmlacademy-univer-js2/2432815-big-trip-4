import { getRandomArrayElement, getRandomPositiveInteger } from '../utils/common';
import { createRandomDates } from './dates';
import { POINT_TYPES, DESCRIPTIONS, DESTINATIONS_NAMES, tripPrice, offerPrice, OFFER_TITLES, picturesCount } from './constants';
import { nanoid } from 'nanoid';

const createPicture = () => ({
  src: `http://picsum.photos/248/152?r=${getRandomPositiveInteger(0, 10)}`,
  description: getRandomArrayElement(DESCRIPTIONS),
});

const createDestination = (id) => ({
  id,
  description: getRandomArrayElement(DESCRIPTIONS),
  name: DESTINATIONS_NAMES[id],
  pictures: Array.from({ length: getRandomPositiveInteger(picturesCount.MIN, picturesCount.MAX) }, createPicture)
});

const getDestinations = () => Array.from({ length: DESTINATIONS_NAMES.length }).map((value, index) => createDestination(index));

const createOffer = (id) => ({
  id,
  title: getRandomArrayElement(OFFER_TITLES),
  price: getRandomPositiveInteger(offerPrice.MIN, offerPrice.MAX)
});

const generateOffersByType = (pointType) => ({
  type: pointType,
  offers: Array.from({ length: getRandomPositiveInteger(picturesCount.MIN, picturesCount.MAX) }).map((value, index) => createOffer(index + 1, pointType)),
});

const getOffersByType = () => Array.from({ length: POINT_TYPES.length }).map((value, index) => generateOffersByType(POINT_TYPES[index]));

const offersByType = getOffersByType();
const destinations = getDestinations();

const createPoint = () => {
  const offersByTypePoint = getRandomArrayElement(offersByType);
  const allOfferIdsByTypePoint = offersByTypePoint.offers.map((offer) => offer.id);
  const randomDates = createRandomDates();
  return {
    basePrice: getRandomPositiveInteger(tripPrice.MIN, tripPrice.MAX),
    dateFrom: randomDates.dateFrom,
    dateTo: randomDates.dateTo,
    destinationId: getRandomArrayElement(destinations).id,
    id: nanoid(),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offerIds: Array.from({ length: getRandomPositiveInteger(0, allOfferIdsByTypePoint.length) }).map(() => allOfferIdsByTypePoint[getRandomPositiveInteger(0, allOfferIdsByTypePoint.length - 1)]),

    type: offersByTypePoint.type
  };
};

const getPoints = () => Array.from({ length: 20 }).map(() => createPoint()).sort();

export { getPoints, getDestinations, getOffersByType };
