/**
 * Creates a new object containing the key/value pair of the keys to be picked
 * @param {Array} obj The object to pick from
 * @param {String} keys The keys that should be picked from the object
 * @returns {Object} Returns the new object with the picked key/value pair.
 * @example
* _pickFromObject({ id: 1, name: "John", title: "Mr", location: "California" }, [
    "id",
    "name",
  ]);
 * // => { id: 1, name: "John" }
 */

const _pickFromObject = <
  TObj extends Record<string, unknown>,
  TKeys extends keyof TObj
>(
  obj: TObj,
  keys: Array<TKeys>
) => {
  let result = {} as Pick<TObj, TKeys>;

  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};

export { _pickFromObject };
