import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor
    if (typeof floors !== 'number') {
      throw new Error('Floors must be a number');
    }
    this._floors = floors; // Store the floors attribute
  }

  // Getter for sqft is inherited from Building class

  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
