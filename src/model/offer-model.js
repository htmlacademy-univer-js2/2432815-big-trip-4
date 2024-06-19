export default class OfferModel {
  #offers = [];
  #pointApiService = null;
  #isSuccessfulLoading = false;

  constructor(pointApiService) {
    this.#pointApiService = pointApiService;
  }

  init = async () => {
    try {
      this.#offers = await this.#pointApiService.offers;
      this.#isSuccessfulLoading = true;
    } catch (err) {
      this.#offers = [];
      this.#isSuccessfulLoading = false;
    }
  };

  get offers() {
    return this.#offers;
  }

  get isSuccessfulLoading() {
    return this.#isSuccessfulLoading;
  }

  getOffersByType(type) {
    return this.#offers.find((offer) => offer.type === type);
  }
}
