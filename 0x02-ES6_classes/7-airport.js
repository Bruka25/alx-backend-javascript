export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
