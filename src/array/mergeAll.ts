/**
 * Creates one new object with the own properties from a list of objects.
 * If a key exists in more than one object, the value from the last
 * object it exists in will be used
 *
 * @param {Array} array The array to perform the grouping on
 * @param {String} key The key that should be the array should be grouped by
 * @returns {Array} Returns the new array of filtered values.
 * @example
 * _mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }, { bar: 4 }]);
 * // => { foo: 1, baz: 3, bar: 4 }
 */

const _mergeAll = <TObj extends Record<string, unknown>>(list: Array<TObj>) => {
  let result = {} as Record<keyof TObj, TObj[keyof TObj]>;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    // result = { ...element };
    Object.assign(result, element);
  }

  return result;
};

export { _mergeAll };
