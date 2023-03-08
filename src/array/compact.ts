/**
 * Creates an array with all falsy value removed
 * The value `false`, `null`, `0`, `""` `undefined`, and `NaN` are falsy.
 * @param {Array} array The array to compact
 * @returns {Array} Returns the new array of filtered values.
 * @example
 * _compact([1, 3, 0, false, true, 2, '', 4, undefined, 5, NaN])
 * // => [1, 3, true, 2, 4, 5]
 */

type DefinitelyTruthy<T> = T extends true ? T : T extends number ? T : never;

const _compact = <TObj extends string | number | boolean | undefined>(
  array: Array<TObj>
) => {
  return array.filter((item) => !!item) as Array<DefinitelyTruthy<TObj>>;
};

export { _compact };
