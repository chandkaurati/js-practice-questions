class ArrayADT {
  constructor(totalSize, usedSize) {
    this.array = new Array(totalSize).fill(null);
    this.usedSize = usedSize;

    for (let i = 0; i < usedSize; i++) {
      this.array[i] = i;
    }
  }

  indexInsert(element, index) {
    if (index > this.usedSize) {
      return "index insertion acannot be prformed on this";
    }
    for (let i = this.usedSize - 1; i >= index; i--) {
      this.array[i + 1] = this.array[i];
    }
    this.array[index] = element;
    this.usedSize = this.usedSize + 1;
    return true;
  }

  indexDelete(index) {
    if (index > this.usedSize) {
      return -1;
    }

    for (let i = index; i < this.usedSize; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.usedSize = this.usedSize - 1;
    return true;
  }
}

const myArray = new ArrayADT(100, 10);

myArray.indexInsert(462, 0 )
myArray.indexInsert(2523, 2)
myArray.indexInsert(3114, 5 )
myArray.indexInsert(522, 1 )
myArray.indexInsert(52, 6 )
// myArray.indexDelete(3)
console.log(myArray.array);

