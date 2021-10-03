const Vector3d = function (x, y, z) {
  const _ = {
    x: x,
    y: y,
    z: z
  }

  const api = {}

  api.x = x => typeof x === 'undefined' ? _.x : Vector3d(x, _.y, _.z)

  api.y = y => typeof y === 'undefined' ? _.y : Vector3d(_.x, y, _.z)

  api.z = z => typeof z === 'undefined' ? _.z : Vector3d(_.x, _.y, z)

  api.scale = value => Vector3d(value * _.x, value * _.y, value * _.z)

  // TODO api.dot
  // TODO api.cross
  // TODO api.rotate

  api.length = value => {
    const length = Math.sqrt(_.x ** 2 + _.y ** 2 + _.z ** 2)
    if (typeof value === 'undefined') {
      return length
    } else {
      return api.scale(value / length)
    }
  }

  api.norm = () => api.length(1)

  api.add = vec => Vector3d(_.x + vec.x(), _.y + vec.y(), _.z + vec.z())

  api.sub = vec => Vector3d(_.x - vec.x(), _.y - vec.y(), _.z - vec.z())

  return api
}

export default Vector3d
