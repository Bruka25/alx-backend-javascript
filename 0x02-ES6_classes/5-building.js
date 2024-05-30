export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Square feet must be a number');
    }
    this._sqft = sqft;

    // Check if the subclass has implemented evacuationWarningMessage
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
