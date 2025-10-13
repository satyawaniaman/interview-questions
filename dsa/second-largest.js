function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else {
      if (arr[i] != largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
  }
  return secondLargest;
}

console.log(secondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
