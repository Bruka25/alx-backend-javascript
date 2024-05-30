export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new Error('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new Error('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Override valueOf to enable casting to a number
  valueOf() {
    return this._size;
  }

  // Override toString to enable casting to a string
  toString() {
    return this._location;
  }
}
