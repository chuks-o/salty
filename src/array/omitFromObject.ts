/**
 * Omits keys from an object
 * @param {Object} obj The object to omit values
 * @param {Array} omittedKeys An array of keys to be omitted
 * @returns {Object} Returns the new object without the omitted keys.
 * @example
 * const obj = _omitFromObject({ a: 1, b: 2, c: 3 }, ["b", "c"]);
 * // => { a: 1 }
 */

const _omitFromObject = <TObj extends object, TOmmited extends keyof TObj>(
  obj: TObj,
  omittedKeys: Array<TOmmited>
) => {
  let newObj = { ...obj };

  for (let index = 0; index < omittedKeys.length; index++) {
    delete newObj[omittedKeys[index]];
  }

  return newObj as Omit<TObj, TOmmited>;
};

export { _omitFromObject };
