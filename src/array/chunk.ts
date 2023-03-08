/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * @param {Array} array The array to process
 * @param {number} size The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 * _chunk([1,2,3,4,5], 2)
 * // => [[1,2], [3,4], [5]]
 * _chunk([1,2,3,4,5,6,7,8], 3)
 * // => [[1,2,3], [4,5,6], [7,8]]
 */

const _chunk = <
  TObj extends object | number | string | boolean,
  TSize extends number
>(
  array: Array<TObj>,
  size: TSize
): Array<Array<TObj>> | Array<TObj> => {
  if (!Array.isArray(array) || array.length === 0) return array;

  let result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, (index += size)));
  }
  return result;
};

export { _chunk };
