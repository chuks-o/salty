/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @param {Array} list The array to perform the sort on
 * @param {String} compareFn The comparator function
 * @returns {Array} Returns the sorted array.
 * @example
 * _sort([5, 6, 12, 8, 9], (a, b) => a - b);
 * // => [5, 6, 8, 9, 12]
 */

const _sort = <T extends number | string | object>(
  list: Array<T>,
  compareFn?: (a: T, b: T) => number
): Array<T> => {
  if (!Array.isArray(list)) {
    throw new TypeError("List is not an array");
  }

  return list.slice(0).sort(compareFn);
};

export { _sort };
