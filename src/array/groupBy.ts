/**
 * Groups an array by a specific key
 * @param {Array} array The array to perform the grouping on
 * @param {String} key The key that should be the array should be grouped by
 * @returns {Array} Returns the new array of filtered values.
 * @example
 * const r = _groupBy(
  [
    {
      age: 30,
      name: "John",
      title: "Mr",
    },
    {
      age: 10,
      name: "Doe",
      title: "Mr",
    },
    {
      age: 10,
      name: "James",
      title: "Mr",
    },
  ],
  "age"
);
 *
 * =>  {
        '10': [
          { age: 10, name: 'Doe', title: 'Mr' },
          { age: 10, name: 'James', title: 'Mr' }
        ],
        '30': [ { age: 30, name: 'John', title: 'Mr' } ]
      }
 */

const _groupBy = <
  TObj extends Record<string, unknown>,
  TKey extends keyof TObj
>(
  array: Array<TObj>,
  key: TKey
) => {
  const result = {} as Record<TObj[TKey] & PropertyKey, Array<TObj>>;

  array.forEach((item) => {
    const resultKey = item[key] as TObj[TKey] & PropertyKey;

    if (result[resultKey]) {
      result[resultKey].push(item);
    } else {
      result[resultKey] = [item];
    }
  });

  return result;
};

export { _groupBy };
