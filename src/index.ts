/**
 * General APP Error.
 * @see https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
 * @see https://stackoverflow.com/a/55066280/717267
 * @see https://stackoverflow.com/a/60250733/717267
 */
export default class BaseError extends Error {
  constructor(message?: string) {
    const trueProto = new.target.prototype;
    super(message);
    Object.setPrototypeOf(this, trueProto);
  }
}
