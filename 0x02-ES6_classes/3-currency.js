export default class Currency {
  constructor(code, name) {
    // Store attributes with underscore attribute version
    this._code = code;
    this._name = name;
  }

  // Getter and setter for the code attribute
  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = code;
  }

  // Getter and setter for the name attribute
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;
  }

  // Method to display the full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
