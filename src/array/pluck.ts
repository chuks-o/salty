/**
 * Creates an array containing the value of the expected field
 * @param {Array} array The array to pluck from
 * @param {String} field The field that should be plucked from the array
 * @returns {Array} Returns the new array of filtered values.
 * @example
 * _pluck([{name: 'John Doe', age: 32}, 'name'])
 * // => ['John Doe']
 */

const _pluck = (array: any[], field: keyof typeof array): any[] => {
  if (!(field in array)) {
    throw new Error(
      `Field ${field.toString()} is not a key in the array ${array}`
    );
  }

  return array.map((item) => item[field]);
};

export { _pluck };
