// Define the ClassRoom class
export default class ClassRoom {
  // Constructor that accepts maxStudentsSize as a parameter
  constructor(maxStudentsSize) {
    // Assign the parameter to the private property _maxStudentsSize
    this._maxStudentsSize = maxStudentsSize;
  }

  // Getter method to access the _maxStudentsSize property
  get maxStudentsSize() {
    return this._maxStudentsSize;
  }

  // Setter method to modify the _maxStudentsSize property
  set maxStudentsSize(size) {
    this._maxStudentsSize = size;
  }
}
