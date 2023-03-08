/**
 * Creates a deep clone from an object
 * @param {Object} value The object to deep clone
 * @returns {Object} Returns the new cloned object.
 * @example
 * _deepClone({
    set: new Set([1, 3, 3]),
    map: new Map([[1, 2]]),
    regex: /foo/,
    deep: {
      array: [
        { name: "docker.txt", size: "25kb" },
        { name: "file.txt", size: "14kb" },
      ],
    },
    error: new Error("Hello!"),
  })
 * // => {
    set: new Set([1, 3, 3]),
    map: new Map([[1, 2]]),
    regex: /foo/,
    deep: {
      array: [
        { name: "docker.txt", size: "25kb" },
        { name: "file.txt", size: "14kb" },
      ],
    },
    error: new Error("Hello!"),
  }
 */

const _deepClone = <TObj extends object, TOptions extends { transfer: any }>(
  value: TObj,
  options?: TOptions
): TObj => {
  if (typeof value !== "object") {
    throw new TypeError("Parameter is not of type object");
  }

  return structuredClone(value, options);
};

export { _deepClone };
