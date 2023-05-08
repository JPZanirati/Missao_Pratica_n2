function swap(array, num1, num2) {
  const temp = array[num1];
  array[num1] = array[num2];
  array[num2] = temp;
}

function shuffle(array, troca_num) {
  const len = array.length;
  for (let i = 0; i < troca_num; i++) {
    const num1 = Math.floor(Math.random() * len);
    const num2 = Math.floor(Math.random() * len);
    swap(array, num1, num2);
  }
}

function bubbleSort(array) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (let n = 0; n < len - i - 1; n++) {
      if (array[n] > array[n + 1]) {
        swap(array, n, n + 1);
      }
    }
  }
  return array;
}

function selectionSort(array) {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let n = i + 1; n < len; n++) {
      if (array[n] < array[minIndex]) {
        minIndex = n;
      }
    }
    if (minIndex != i) {
      swap(array, i, minIndex);
    }
  }
  return array;
}

function quickSort(array, start, end) {
  if (start >= end) {
    return array;
  }
  const pivotIndex = partition(array, start, end);
  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivotIndex = end;
  let i = start - 1;
  for (let n = start; n < end; n++) {
    if (array[n] <= array[pivotIndex]) {
      i++;
      swap(array, i, n);
    }
  }
  swap(array, i + 1, pivotIndex);
  return i + 1;
}
