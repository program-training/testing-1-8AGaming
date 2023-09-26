// With God's Help

export const fetchUserData = async (userId: number) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await res.json();
    if (!data.email) throw new Error("TEST error 7");
    return Promise.resolve(data);
  } catch (error) {
    if (error instanceof Error) throw error;
  }
};

export const sumArray = (array: number[]) => {
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  });
  return sum;
};

export const isPolydrhome = (string: string) => {
  const strLen = string.length;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[strLen - i - 1]) return false;
    return true;
  }
};

export const sortUpOrder = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

export const sqrt = (number: number) => {
  return number ** 0.5;
};

export const lengthOfString = (string: string) => string.length;

export const fibonachi = (number: number) => {
  let now = 0;
  let past = 0;
  let fiboNumber = 0;
  const array = [];
  for (let i = 0; i < number; i++) {
    if (i <= 1) {
      now = i;
      fiboNumber = now + past;
    } else {
      now = fiboNumber;
      fiboNumber = now + past;
      past = now;
    }
    array.push(fiboNumber);
  }
  return array;
};

export const nextFiboValue = (array: number[]) => {
  if (array.length >= 3) {
    const lastValue = array[array.length - 1];
    const OneBeforelastValue = array[array.length - 2];
    const TwoBeforelastValue = array[array.length - 3];
    const sum = TwoBeforelastValue + OneBeforelastValue;
    if (sum === lastValue) return true;
    return false;
  } else {
    throw new Error("Your array mush have at least 3 elements");
  }
};

export const isPerfectSquare = (number: number) => {
  const num = Math.sqrt(number);
  if (Math.floor(num) === Math.ceil(num)) {
    return true;
  } else {
    return false;
  }
};

export const isFibo = (number: number) => {
  if (
    isPerfectSquare(5 * number ** 2 + 4) ||
    isPerfectSquare(5 * number ** 2 - 4)
  )
    return true;
  return false;
};
export const isLastThreeFibo = (numA: number, numB: number, numC: number) => {
  if (!isFibo(numA)) {
    return false;
  }
  if (!isFibo(numB)) {
    return false;
  }
  if (!isFibo(numC)) {
    return false;
  } else {
    return true;
  }
};

export const IsFiboArray = (array: number[]) => {
  const arrayLen = array.length;
  let numA = 0;
  let numB = 0;
  let numC = 0;
  if (arrayLen >= 3) {
    for (let i = 0; i < arrayLen - 2; i++) {
      numA = array[arrayLen - i - 1];
      numB = array[arrayLen - i - 2];
      numC = array[arrayLen - i - 3];
      if (numA !== numB + numC) {
        return false;
      }
    }
    if (!isLastThreeFibo(numA, numB, numC)) return false;
    return true;
  } else {
    throw new Error("Your array must have at least 3 elements.");
  }
};
