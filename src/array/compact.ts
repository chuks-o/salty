/**
 * Creates an array with all falsy value removed
 * The value `false`, `null`, `0`, `""` `undefined`, and `NaN` are falsy.
 * @param {Array} array The array to compact
 * @returns {Array} Returns the new array of filtered values.
 * @example
 * compact([1,3,0,false,2,'',4,undefined,5,NaN])
 * // => [1,3,2,4,5]
 */

const _compact = (array: any[]): any[] => {
  return array.filter((item) => !!item);
};

export { _compact };
