const Vector3d = function (x, y, z) {
  const _ = {
    x: x,
    y: y,
    z: z
  }

  const api = {}

  api.x = () => _.x

  api.y = () => _.y

  api.z = () => _.z

  api.add = vec => Vector3d(_.x + vec.x(), _.y + vec.y(), _.z + vec.z())

  return api
}

export default Vector3d
