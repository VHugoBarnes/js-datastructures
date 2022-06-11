
/**
 * This class emulates the behavior of the built-in Array class in JavaScript.
 * 
 * I'm using a literal object to handle the behavior and data of the array.
 */
class MyArray {

  constructor() {
    this.length = 0; // Lenght of the array
    this.data = {}; // Here we store the array data
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]; // Deletes the last item because it is repeated with the last statement
    this.length--;
  }

  addFirst(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;

    return this.data;
  }

  popFirst() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }

}

export default MyArray;
