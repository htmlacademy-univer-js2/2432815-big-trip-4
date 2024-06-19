export default class DestinationModel {
  #destinations = [];
  #pointApiService = null;
  #isSuccessfulLoading = false;

  constructor(pointApiService) {
    this.#pointApiService = pointApiService;
  }

  init = async () => {
    try {
      this.#destinations = await this.#pointApiService.destinations;
      this.#isSuccessfulLoading = true;
    } catch (err) {
      this.#destinations = [];
      this.#isSuccessfulLoading = false;
    }
  };

  get destinations() {
    return this.#destinations;
  }

  get isSuccessfulLoading() {
    return this.#isSuccessfulLoading;
  }

  getDestinationById(id) {
    return this.#destinations.find((city) => city.id === id);
  }
}
