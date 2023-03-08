/**
 * Creates an array containing the value of the expected field
 * @param {Array} array The array to pluck from
 * @param {String} key The key that should be plucked from the array
 * @returns {Array} Returns the new array of filtered values.
 * @example
 * _pluck(
    [
      { name: "John Doe", age: 22 },
      { name: "Jonah Fisher", age: 32 },
    ],
    "name"
  );
 * // => ['John Doe', 'Jonah Fisher"]
 */

const _pluck = <TObj extends Record<string, unknown>, TKey extends keyof TObj>(
  array: Array<TObj>,
  key: TKey
): Array<TObj[TKey]> => {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array");
  }

  return array.map((item) => item[key]);
};

export { _pluck };
