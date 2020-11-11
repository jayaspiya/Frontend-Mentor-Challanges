export default class Challanges {
    constructor() {
      this.myChallanges = [];
    }
    addChallange(challangeName) {
      this.myChallanges.push(challangeName);
    }
    viewChallange() {
      return this.myChallanges;
    }
  }