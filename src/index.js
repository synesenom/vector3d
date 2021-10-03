/**
 * The vector factory.
 *
 * @method Vector3d
 * @param {number} x The first (x) Cartesian coordinate.
 * @param {number} y The second (y) Cartesian coordinate.
 * @param {number} z The third (z) Cartesian coordinate.
 * @constructor
 */
const Vector3d = function (x, y, z) {
  // Private members: the coordinates.
  const _ = {
    x: x,
    y: y,
    z: z
  }

  // Public API.
  const api = {}

  /**
   * Returns a deep copy of the vector.
   *
   * @method copy
   * @memberOf Vector3d
   * @return {Vector3d} A new vector which is the copy of the current one.
   */
  api.copy = () => Vector3d(_.x, _.y, _.z)

  /**
   * Returns or sets the X coordinate.
   *
   * @method x
   * @memberOf Vector3d
   * @param {number=} x Value for the X coordinate. If not provided, the X coordinate is returned.
   * @returns {(number|Vector3d)} The value of the X coordinate or a new vector with the X coordinate as provided.
   */
  api.x = x => typeof x === 'undefined' ? _.x : Vector3d(x, _.y, _.z)

  /**
   * Returns or sets the Y coordinate.
   *
   * @method y
   * @memberOf Vector3d
   * @param {number=} y Value for the Y coordinate. If not provided, the Y coordinate is returned.
   * @returns {(number|Vector3d)} The value of the Y coordinate or a new vector with the Y coordinate as provided.
   */
  api.y = y => typeof y === 'undefined' ? _.y : Vector3d(_.x, y, _.z)

  /**
   * Returns or sets the Z coordinate.
   *
   * @method z
   * @memberOf Vector3d
   * @param {number=} z Value for the Z coordinate. If not provided, the Z coordinate is returned.
   * @returns {(number|Vector3d)} The value of the Z coordinate or a new vector with the Z coordinate as provided.
   */
  api.z = z => typeof z === 'undefined' ? _.z : Vector3d(_.x, _.y, z)

  /**
   * Scales the vector by the specified value.
   *
   * @method scale
   * @memberOf Vector3d
   * @param {number} value Scaling factor.
   * @returns {Vector3d} A new vector which is parallel to the original and scaled by the scaling factor.
   */
  api.scale = value => Vector3d(value * _.x, value * _.y, value * _.z)

  /**
   * Returns or sets the vector's length.
   *
   * @method r
   * @memberOf Vector3d
   * @param {number=} value The length to set. If not provided, the vector's length is returned.
   * @returns {(number|Vector3d)} The length of the vector or a new vector which is parallel to the original and has the
   * specified length.
   */
  api.r = value => {
    const length = Math.sqrt(_.x ** 2 + _.y ** 2 + _.z ** 2)
    if (typeof value === 'undefined') {
      return length
    } else {
      return api.scale(value / length)
    }
  }

  /**
   * Returns or sets the inclination of the vector in spherical coordinates.
   *
   * @method inclination
   * @memberOf Vector3d
   * @param {number=} value The vector's inclination to set. If not provided, the vector's inclination is returned.
   * @return {(number|Vector3d)} The inclination of the vector or a new vector with the same length and azimuth but the
   * inclination is set as specified.
   */
  api.inclination = value => {
    if (typeof value === 'undefined') {
      return Math.atan2(Math.sqrt(_.x ** 2 + _.y ** 2), _.z)
    } else {
      const r = api.r()
      const azimuth = api.azimuth()
      return Vector3d(
        r * Math.cos(azimuth) * Math.sin(value),
        r * Math.sin(azimuth) * Math.sin(value),
        r * Math.cos(value)
      )
    }
  }

  /**
   * Returns or sets the azimuth of the vector in spherical coordinates.
   *
   * @method azimuth
   * @memberOf Vector3d
   * @param {number=} value The vector's azimuth to set. If not provided, the vector's azimuth is returned.
   * @return {(number|Vector3d)} The azimuth of the vector or a new vector with the same length and inclination but the
   * azimuth is set as specified.
   */
  api.azimuth = value => {
    if (typeof value === 'undefined') {
      return Math.atan2(_.y, _.x)
    } else {
      const r = api.r()
      const inclination = api.inclination()
      return Vector3d(
        r * Math.cos(value) * Math.sin(inclination),
        r * Math.sin(value) * Math.sin(inclination),
        r * Math.cos(inclination)
      )
    }
  }

  /**
   * Adds a vector to the current vector.
   *
   * @method add
   * @memberOf Vector3d
   * @param {Vector3d} vec The vector to be added to the current vector.
   * @return {Vector3d} A new vector that is the sum of the two vectors.
   */
  api.add = vec => Vector3d(_.x + vec.x(), _.y + vec.y(), _.z + vec.z())

  /**
   * Subtracts a vector from the current vector.
   *
   * @method sub
   * @memberOf Vector3d
   * @param {Vector3d} vec The vector to be subtracted from the current vector.
   * @return {Vector3d} A new vector that is the difference of the two vectors.
   */
  api.sub = vec => Vector3d(_.x - vec.x(), _.y - vec.y(), _.z - vec.z())

  /**
   * Returns the dot (scalar) product with another vector.
   *
   * @method dot
   * @memberOf Vector3d
   * @param {Vector3d} vec Vector to multiply the current vector with.
   * @return {number} The scalar product of the two vectors.
   */
  api.dot = vec => _.x * vec.x() + _.y * vec.y() + _.z * vec.z()

  /**
   * Returns the cross (vector) product with another vector.
   *
   * @method cross
   * @memberOf Vector3d
   * @param {Vector3d} vec Vector to multiply the current vector with.
   * @return {Vector3d} The vector product of the two vectors.
   */
  api.cross = vec => Vector3d(
    _.y * vec.z() - _.z * vec.y(),
    _.z * vec.x() - _.x * vec.z(),
    _.x * vec.y() - _.y * vec.x()
  )

  return api
}

export default Vector3d
