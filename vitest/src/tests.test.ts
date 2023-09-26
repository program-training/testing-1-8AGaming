// With God's Help

import { expect, test, describe } from "vitest";
import {
  fetchUserData,
  sumArray,
  isPolydrhome,
  sortUpOrder,
  sqrt,
  lengthOfString,
  nextFiboValue,
  IsFiboArray,
} from "./myFunctions/myFunctions";
describe("Targil A", () => {
  // 1
  test("test", () => {
    // Arange
    const myString = "asafaiperets";

    // Act
    const result = lengthOfString(myString);

    // Assert
    expect(result).toBe(12);
  });

  // 2
  test("isPoly", () => {
    // Arange
    const myString = "AsafasA";

    // Act
    const result = isPolydrhome(myString);

    // Assert
    expect(result).toEqual(true);
  });

  // 3
  test("TestUpOrder Function", () => {
    // Arange
    const myArray = [1, 2, 4, 53, 3, 6, 7, 9, 8];

    // Act
    const result = sortUpOrder(myArray);

    // Assert
    expect(result).toEqual(myArray.sort());
  });

  // 4

  test("test Sqrt", () => {
    // Arange
    const myNumber = 25;

    // Act
    const result = sqrt(myNumber);

    // Assert
    expect(result).toEqual(Math.sqrt(myNumber));
  });

  // 5

  // Test 1
  test("Test 1 - sumArray", () => {
    // Arange
    const myArray = [2, 2, 2, 2];

    // Act
    const result = sumArray(myArray);

    // Assert
    expect(result).toBe(8);
  });

  // Test 2
  test("Test 2 - sumArray", () => {
    // Arange
    const myArray = [2, 2, 2, 2];

    // Act
    const result = sumArray(myArray);

    // Assert
    expect(result).greaterThan(7);
  });

  // 6

  type UserInterface = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };

  test("test fetchUserData Equal", async () => {
    // Arange
    const userId = 4;

    // Act
    const result = await fetchUserData(userId);

    // Assert
    expect(result).toEqual({
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    });
  });
  test("test fetchUserData TypeOf", async () => {
    // Arange
    const userId = 4;

    // Act
    const result = await fetchUserData(userId);

    // Assert
    expect(result).toMatchObject<UserInterface>({
      id: expect.any(Number),
      name: expect.any(String),
      username: expect.any(String),
      email: expect.any(String),
      address: {
        street: expect.any(String),
        suite: expect.any(String),
        city: expect.any(String),
        zipcode: expect.any(String),
        geo: {
          lat: expect.any(String),
          lng: expect.any(String),
        },
      },
      phone: expect.any(String),
      website: expect.any(String),
      company: {
        name: expect.any(String),
        catchPhrase: expect.any(String),
        bs: expect.any(String),
      },
    });
  });
  test("test fetchUserData ID", async () => {
    // Arange
    const userId = 11;

    // Assert
    await expect(fetchUserData(userId)).rejects.toThrowError();
  });

  // 7
  test("Checking if the next value is a fibo number ", () => {
    // Arange
    const array = [0, 1, 1, 2, 3, 5];

    // Act
    const result = nextFiboValue(array);

    // Assert
    expect(result).toBeTruthy();
  });

  test("Checking if the series is from Fibo series ", () => {
    // Arange
    const array = [0, 1, 1, 2, 3, 5];

    // Act
    const result = IsFiboArray(array);

    // Assert
    expect(result).toBeTruthy();
  });
});
